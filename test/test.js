const texExtension = require('../index')
const marked = require('marked')
const katex = require('katex')
const fs = require('fs')

// 1. extend marked
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

// 2. read Markdown document and parse it
let md = fs.readFileSync('./test.md', 'utf-8')
let html = marked.parse(md)
let output =
  `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css">
  <style>
  .block-tex{
    text-align: center;
  }
</style>
</head>
<body>
${html}
</body>
</html>
  `
// 3. output result
fs.writeFileSync('./output.html', output, 'utf-8')