# Link to self module

Require run `npm link`.
You have to refer to yourself modules.

```
# ./ (root directory)
$ npm link
$ cd app
$ npm link usagi-sandbox-lib
```

# Dev mode using auto reloading function

To possible to auto reload change to screen.

```
# ./app/
$ yarn start
Compiled successfully!

You can now view app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://00.000.00.00:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
```
# ./ (any proccess)
$ npm run dev
rollup v1.1.2
bundles ./src/index.ts → dist/index.js, app/src/dist/index.js...
created dist/index.js, app/src/dist/index.js in 1.8s

[2019-00-00 00:00:00] waiting for changes...
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
