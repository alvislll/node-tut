const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','test.txt')
console.log(filePath)
// \content\test.txt

const base = path.basename(filePath)
console.log(base)
// test.txt
const absolute = path.resolve(__dirname,'content','test.txt')
console.log(absolute)
// C:\Users\LYF894\Desktop\Tutorial\content\test.txt

