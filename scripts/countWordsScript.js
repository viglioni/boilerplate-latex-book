const exec = require('./exec')
const { readdir } = require('fs')


const countFile = (fileName) =>
      Number(exec(`texcount ./chapters/${fileName}`, true)
             .match(/text: [0-9]*\n/)[0]
             .replace(/[^0-9]/g,''))

const removeSuffix = file => file.replace(/\.[a-z]*$/, '')



readdir('./chapters', (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const chapterCount = files.map(file => ({chapter: removeSuffix(file), 'word count': countFile(file)}))
  const total = files.map(countFile).reduce((acc,val)=>acc+val,0)
  const table = [...chapterCount, {chapter: 'Total', 'word count' : total}]
  console.table(table)

})


