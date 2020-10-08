const exec  = require('./exec')
const { writeToJson, readFromJson } = require('./writePackJson')
const setBookName = require('./setBookName')
const compile = require('./compile')
const { exit } = require('process')



const fileName = readFromJson('fileName')

/*
 * Check and define file name
 */
if(!fileName) {
  setBookName("Please run this command again to compile")
}
else{
  /*
   * Create dirs
   */
  exec('mkdir -p pdf logs')


  /*
   * compile to pdf
   */
  compile(fileName)

  /*
   *  move pdf to proper dir
   */
  exec(`mv ./logs/${fileName}.pdf ./pdf`)

  exit()
}


