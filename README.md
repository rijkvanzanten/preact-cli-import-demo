# Preact-cli import failed demo

On the homepage I required Headroom from `headroom.js` and Vimeo's player from `@vimeo/player`. Running the app in dev mode with `npm start` works as expected. Building the app with either `npm run build` or serving it with `npm run serve` throws an error about the modules not being found.

It seems to search in the `src` folder instead of `node_modules`.

```
Template execution failed: Error: ENOENT: no such file or directory, open '/Users/rijkvanzanten/Development/import-demo/src/~/@vimeo/player/dist/player.js'
  Error: ENOENT: no such file or directory, open '/Users/rijkvanzanten/Development/i  mport-demo/src/~/@vimeo/player/dist/player.js'

  - prerender.js:69 handlePrerenderError
    [import-demo]/[preact-cli]/lib/lib/webpack/prerender.js:69:33

  - prerender.js:52 prerender
    [import-demo]/[preact-cli]/lib/lib/webpack/prerender.js:52:3

  - webpack-client-config.js:194 Object.ssr
    [import-demo]/[preact-cli]/lib/lib/webpack/webpack-client-config.js:194:54

  - template.html:111 EM6I.module.exports
    [import-demo]/[preact-cli]/lib/resources/template.html:111:37

  - index.js:264
    [import-demo]/[html-webpack-plugin]/index.js:264:16

  - util.js:16 tryCatcher
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/util.js:16:23

  - promise.js:512 Promise._settlePromiseFromHandler
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:512:31

  - promise.js:569 Promise._settlePromise
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:569:18

  - promise.js:606 Promise._settlePromiseCtx
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/promise.js:606:10

  - async.js:138 Async._drainQueue
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/async.js:138:12

  - async.js:143 Async._drainQueues
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/async.js:143:10

  - async.js:17 Immediate.Async.drainQueues
    [import-demo]/[html-webpack-plugin]/[bluebird]/js/release/async.js:17:14


Build failed!
```
