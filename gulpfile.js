var gulp = require("gulp");
var typescript = require('gulp-tsc');
var browserify = require("gulp-browserify");

process.env.NODE_PATH = "./temp";

var names = [
    "LinkedList", "Stack"
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

names.forEach(function(name) {
    gulp.task("browserify-" + name, function() {
        var filename = "temp/" + name + ".js";

        return gulp.src(filename)
            .pipe(browserify({
                standalone: name
            }))
            .pipe(gulp.dest("dist/"));
    });
});

var compileTasks = names.map(function (name) {
    return "compile-" + name;
});

var browserifyTasks = names.map(function (name) {
    return "browserify-" + name;
});

gulp.task("compile", compileTasks);

gulp.task("browserify", browserifyTasks);
