const { writeFile } = require('fs')
const setFileName = require('./setFileName')
const exec = require('./exec')
const { readdir } = require('fs')
const { exit } = require('process')

const template = `\\documentclass[../book/book.tex]{subfiles}

\\begin{document}
\\chapter{Chapter Title}


\\end{document}`


module.exports = (chapterName) => {
  const basePath = './chapters/'
  const fileName = `${setFileName(chapterName)}.tex`

  readdir(basePath, (err,files)=>{
    if(err) throw err
    if(files.includes(fileName)) {
      console.log("Cannot create new chapter!")
      console.log(`${fileName} already existis!`) 
    }
    else {
      writeFile(basePath + fileName, template, (err)=>{
        if(err) throw err
      })
      console.log("Created!")
    }
  })
}





