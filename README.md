# LaTeX book boilerplate

## About
Simple boiplerplate to organize books in LaTeX and some scripts to help.

## Structure
### book
`book.tex` is where you basic definitions are, title, author, chapter calls etc
`cover.tex` is where the book cover is defined, maybe you won't have to change this file.

### chapters
This directory is where your chapters are. You can create new chapter files with a script (see below) and to use them on your book add `\subfile{../chapter/your-file-name.tex}` on `book.tex`.

### configs
This is where layout configs and enviroments are. Maybe you won't have to change files here.

### images
Well... This one is easy, right? hehe
A file named `cover.jpg` will be automatically used in the book cover.

### logs
When you compile your book, the compilation logs will appear here. You may ignore this dir if everything is all right :)

### pdf
This dir is where your pdf will be after compilation

## Scripts
Obs.: whenever you see `yarn` you might change for `npm run` if you don't have yarn installed.

### Compile
```shell
$ yarn compile
```
Will compile `book/book.tex` (do not change this filename) into `pdf/your-book-name.pdf`. If your book name is not defined in `package.json` the script will ask you, don't worry. If your book is called "Hi this is my book" the generated file will be `pdf/hi-this-is-my-book.pdf`
Notice that you might find a error with `bibtex` execution, since it will fail if you don't have any bibliography on your book, but that is ok.

### Count words
```shell
$ yarn count
```
Will count your words chapter by chapter and the total sum :)

### Set book name
```shell
$ yarn name
```
With this command, the script will ask your book name (as in compile script). You can change the name with this script how many times you want.

### New chapter
```shell
$ yarn chapter
```
The script will ask you a chapter name (you may say "chapter 1") and will create a file in `chapters/` with the same in lower case separated with hyphens.
Notice that this script will not the chapter to your book, it's up to you add in whatever part of the book you may find appropriate (see the chapter explanation above in Structure section).


## Requirements
To be able to run the scripts, you must have installed:
> [pdflatex](https://www.latex-project.org/get/)
> bibtex
> [node](https://nodejs.org/en/)
> [yarn](https://yarnpkg.com/) (optional)

It will work on a Linux or a Macintosh. If `pdflatex` and `npm/yarn` run on Windows powershell the scripts might work there :)


## Language notes
It is mostly configured to Brazilian Portuguese. You can change summary name adding this line to your code before `\tableofcontents` on `book/book.tex`:
```latex
\renewcommand*\contentsname{Summary}
``

## Acknowledgments
This boilerplate was written using a eBook template from [LaTeXTemplates]( http://www.LaTeXTemplates.com) from [Luis Cobo](luiscobogutierrez@gmail.com) and  [Vel](vel@latextemplates.com) under [CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/) with small modifications of mine.

The book cover is by [Solen Freyissa](https://unsplash.com/photos/4Gc3B-blsJI).
