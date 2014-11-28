var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsc = require("gulp-tsc");

function buildBrowser(sourceFile, outputName, outputLocation) {
    browserify({ extensions: ['.ts'], standalone: outputName })
        .plugin('tsify', { target: 'ES5', removeComments: true })
        .add(sourceFile)
        .bundle()
        .pipe(source(outputName + '.js'))
        .pipe(gulp.dest(outputLocation));
}

function buildNode(sourceFile, outputLocation) {
    gulp.src(sourceFile)
      .pipe(tsc({ target: 'ES5', removeComments: true, declaration: true }))
      .pipe(gulp.dest(outputLocation))
}

gulp.task("build-browser", function () {
    buildBrowser('./src/LinkedList.ts', "LinkedList", "./dist");
    buildBrowser('./src/Stack.ts', "Stack", "./dist");
});

gulp.task("build-node", function () {
    buildNode("./src/LinkedList.ts", "./lib");
    buildNode("./src/Stack.ts", "./lib");
});

gulp.task("default", ["build-node", "build-browser"]);
