const { writeToJson } = require('./writePackJson')
const setFileName = require('./setFileName')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = (msg) => {
  rl.question("Please insert your book name:\n", (bookName) => {
    writeToJson("fileName", setFileName(bookName))
    if(msg) console.log(msg)
    rl.close()
  })

}


