# marked-tex-extension

A tex extension for markedjs.

## Usage

```js
const texExtension = require('../index')
const marked = require('marked')
const katex = require('katex')

function texRender(tex, level) {
  let html = katex.renderToString(tex, {displayMode: level === 'block'})
  if (level === 'block') {
    html = `<p class="block-tex">${html}</p>`
  }
  return html
}

const {blockTexExtension, inlineTexExtension} = texExtension(texRender)
marked.use({
  extensions: [blockTexExtension, inlineTexExtension]
})

let html = marked.parse(md)
// ...
```

There is a complete example in `test/test.js`