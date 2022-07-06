// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular proj
// npm i <packageName>  (install)

// global dependency - use it in any proj
//npm install -g <packageName>
//sudo npm install -g <packageName>

//package.json - manifest file (stores important info about prj/package)
// manual approach (create package.json in the root, ceate properties etc)
//npm init (create json file's step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
//[1,2,3,4]
console.log('hello people')