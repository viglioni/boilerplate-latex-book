const readline = require('readline');
const newChapter = require('./newChapter')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please insert your chapter name:\n", (bookName) => {
  newChapter(bookName)
  rl.close()
})

