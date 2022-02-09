const katex = require('katex')

let f = katex.renderToString('s_{\\scriptscriptstyle N}(x)={\\frac {a_{0}}{2}}+\\sum _{n=1}^{N}\\left(a_{n}\\cos \\left({\\tfrac {2\\pi }{P}}nx\\right)+b_{n}\\sin \\left({\\tfrac {2\\pi }{P}}nx\\right)\\right)')
console.log(f)