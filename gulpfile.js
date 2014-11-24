var gulp = require("gulp");
var typescript = require('gulp-tsc');
var browserify = require("gulp-browserify");

var files = [
    "src/LinkedList.ts",
    "src/_Stack.ts"
];

var names = [
    "LinkedList", "_Stack"
];

names.forEach(function(name) {
    gulp.task("compile-" + name, function() {
        var filename = "src/" + name + ".ts";

        return gulp.src(filename)
            .pipe(typescript({
                target: "ES5",
                module: "commonjs"
            }))
            .pipe(gulp.dest('temp/'))
    });
});


var tasks = names.map(function (name) {
    return "compile-" + name;
});

gulp.task("compile", tasks, function () {

});

gulp.task("browserify", function () {
    return gulp.src("temp/LinkedList.js")
        .pipe(browserify({
            standalone: "LinkedList"
        }))
        .pipe(gulp.dest("dest/"));
});
