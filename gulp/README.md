# Gulp-Flow

Develop and build your [Jekyll](http://jekyllrb.com/) website with [Gulp.js](http://gulpjs.com/).  

Created and maintained by Carles Muiños and Klaudia Alvarez.  
Inspired by Stefan Imhoff's [gulp-tutorial](https://github.com/kogakure/gulp-tutorial) project.


## Installation & Setup

Add the repository to your local as a `git subtree`.
You can use Christophe Porteneuve's [git-stree](https://github.com/tdd/git-stree) to achieve that:

```sh
$ git stree add gulp-flow -P gulp git@github.com:adab1ts/gulp-flow.git
```

Once installed:

- move `package-sample.json` to `/your/project/root/folder/package.json`,
- move `gulpfile-sample.js` to `/your/project/root/folder/gulpfile.js` and
- open `gulp/config.js` and change settings as needed.  


## Running Gulp-Flow

Three main tasks are available:

```sh
$ npm run serve
$ npm run build
$ npm run jekyllize
```

- `npm run serve` will generate a development build of the Jekyll site, start a development server and watch for changes.
- `npm run build` will generate an optimized production build of the Jekyll site.
- `npm run jekyllize` will prepare an optimized version of the Jekyll site code.


## Contact

Email:    info[@]adabits[.]org  
Twitter:  [@adab1ts](https://twitter.com/adab1ts)  
Facebook: [Adab1ts](https://www.facebook.com/Adab1ts)  
LinkedIn: [adab1ts](https://www.linkedin.com/company/adab1ts)  


## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
