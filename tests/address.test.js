'use strict'

const db = require('APP/db');
const Address = require('APP/db/models/address');
const User = require('APP/db/models/user');
const expect = require('chai').expect;





describe('Address Model', () => {

    before('wait for the db', () => db.didSync)

    // before('wait for the db', () => {
    // 	User.create({name: 'so many', email: 'god@example.com', password: '1234'})								
    // })

    let address;
    let addressData = {
	      address1: '22-17 19th street',
        address2: null,
        city: 'New York',
        state: 'NY',
        country: 'United States',
        zipcode: '11105',
        user_id: 1
	    }

	  beforeEach(function(){
	    address = Address.build(addressData);
	  });


    describe('Validation data fields', () => {
    		
    		it('Data placed appropriate column in table', ()=>{
  				expect(address.address1).to.be.equal(addressData.address1);
  				expect(address.address2).to.be.equal(addressData.address2);
  				expect(address.city).to.be.equal(addressData.city);
  				expect(address.state).to.be.equal(addressData.state);
  				expect(address.country).to.be.equal(addressData.country);
  				expect(address.zipcode).to.be.equal(addressData.zipcode);
  				expect(address.user_id).to.be.equal(addressData.user_id);

  			})
    	
        describe('Address1 field', () => {
           
            it('should not be null', () => {
                address.address1 = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.address1 = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('city field', () => {

            it('should not be null', () => {
                address.city = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.city = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('state field', () => {

            it('should not be null', () => {
                address.state = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.state = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('country field', () => {

            it('should not be null', () => {
                address.country = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.country = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('zipcode field', () => {
            it('should not be null', () => {
                address.zipcode = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('zipcode');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.zipcode = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('zipcode');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })
    })


		describe('Associate table', () => {
				describe('Address belongs', () => {

						let users;
				    
				    let userData = {name: 'so many', email: 'god@example.com', password: '1234'}
						it('User', () => {

							return User.create(userData)
						     	.then(res=>(User.findAll()))
						     	.then(res=>(address.save()))
						     	.then(res=>(User.findById(res.user_id)))
					     		.then(res=>{
					     			expect(res.name).to.be.equal(userData.name)
					     		});
								
                // return address.create(addressData)	
                //     .then(res => {
                //         console.log(res)
                //     }).catch(console.error);
            })
				})
		})
});
