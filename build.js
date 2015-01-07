var to5 = require("6to5");
var fs = require("fs");
var Q = require("q");
var browserify = require("browserify");
var glob = require("glob");
var mkdirp = require("mkdirp");

var transformFile = Q.denodeify(to5.transformFile);
var writeFile = Q.denodeify(fs.writeFile);
glob = Q.denodeify(glob);
mkdirp = Q.denodeify(mkdirp);

// TODO: maintain subfolder structure
var compile = function(opts) {
    // TODO: create a default options dictionary and merge
    var srcDir = opts.srcDir || "./src";
    var libDir = opts.libDir || "./lib";
    var distDir = opts.distDir || "./dist";
    
    Q.all([
        mkdirp(libDir), mkdirp(distDir)
    ]).then(function () {
        return glob("**/*.js", {cwd: srcDir});
    }).then(function () {
            // TODO: let users pass the glob in
            var to5Opts = {};
            return Q.all(
                files.map(function (filename) {
                    return transformFile(srcDir + "/" + filename, to5Opts)
                        .then(function (result) {
                            writeFile(libDir + "/" + filename, result.code);
                        });
                })
            );
    }).then(function () {
        var b, bOpts;
        bOpts = {
            fullPaths: false,
            standalone: opts.standalone
        };
        b = browserify(libDir + "/" + opts.entry, bOpts);
        b.bundle().pipe(fs.createWriteStream(distDir + "/" + opts.entry));
    }).then(function () {
        console.log("success!");
    }).fail(function (err) {
        console.log(err);
    });
};

var files = ["basic.js", "LinkedList.js", "Stack.js"];
compile({
    entry: "basic.js",
    standalone: "basic"
});
