# Hi, I'm online-bling

I am an e-commerce shop for sunglasses!

## I need node >= 6.7.0

If you don't have it, I'll complain and tell you how to install it.

## 1. Check me out!

Create a git repo however you want to. You can fork me on Github, etc.

## 2. Start me up!
After you have a repo on your machine:

```
npm install
npm run seed
npm run build-watch
npm start
```

`npm start` doesn't build, so watch out for that. The reason it doesn't build is because you
probably want to watch the build and run me in separate terminals. Otherwise, build errors get
all mixed in with HTTP request logging.

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)

## Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.
