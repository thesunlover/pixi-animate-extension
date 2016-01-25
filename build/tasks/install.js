module.exports = function(gulp, options, plugins) {
    var cmd = 'tar -xzf "' + options.outputFile + '" -C "' + options.installFolder + '"';
    gulp.task('install', plugins.shell.task([cmd])); 
};