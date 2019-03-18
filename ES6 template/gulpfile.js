const { src, dest, task } = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const destination = "./dist/"

async function buildCss() {
    var cssPath = "./styles/styles.css";

    await src(cssPath)
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(destination));
}

task('build-css', buildCss);