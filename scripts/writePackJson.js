const { writeFile } = require('fs')
const json = require('../package.json')
const { stringify } = JSON

const writeToJson = (key, val) => {
  const newJson = stringify({...json, [key]: val}, null, 2)
  writeFile('package.json', newJson, (err)=>{
    if(err) throw err
  })
}

const readFromJson = (key) => json[key]

module.exports = {
  writeToJson,
  readFromJson,
}
