'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')
const _ = require('lodash');

const Address = require('APP/db/models/address');
const Cart_Line_Item = require('APP/db/models/cart_line_item');


const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
      //notEmpty: true,
    }
  },
  session_id: {
    type: Sequelize.STRING
  },  
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
    afterUpdate: (user, options)=>{
      return User.removeUserWithSessionId(user.session_id)
    },
  },  
  classMethods:{
    removeUserWithSessionId(sessionId){   
      let member, guest;
      return User.findAll({
          where:{ session_id:sessionId }
        }).then(users=>{
          member = _.find(users, (user)=>(user.email !== null))
          guest = _.find(users, (user)=>(user.email === null))
          console.log('##### MEMBER & GUEST ####',member, guest)
          if(member && guest) {
            // if duplicate session_id exist in database
            // we will reassign associated user id from 'Address' & 'Cart'

            // console.log('Address')
            return Address.reassignUser(guest.id, member.id)
          }
        }).then(()=>{
            // console.log('Cart_Line_Item')
            if(member && guest) {
              return Cart_Line_Item.reassignUser(guest.id, member.id)
            }
        }).then(()=>{
            return User.destroy({
              where:{ session_id:sessionId, $and: {email: {$eq: null}}}
            })
        }).then(affectedRows=>{
          // console.log('affectedRows',affectedRows)
        }) 
    },
    emptySessionId(userId){
      return this.update({
          session_id: null
        },{
          where: { id: userId }
        })
    },
  },
  instanceMethods: {    
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err)
      user.set('password_digest', hash)
      resolve(user)
    })
  )
}

module.exports = User