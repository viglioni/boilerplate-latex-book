const exec = require('./exec')

const runPdfLatex = (fileName) => {
    exec(`pdflatex -jobname ${fileName} -output-directory "./logs" ../book/book.tex`)
}

const runBibTex = (fileName) => {
    exec(`bibtex ./logs/${fileName}.aux`)
}

module.exports = (fileName) => {
  runPdfLatex(fileName)
   runBibTex(fileName)
   runPdfLatex(fileName)
}
