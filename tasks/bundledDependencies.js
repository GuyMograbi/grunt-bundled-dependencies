'use strict';

module.exports = function(grunt){
    grunt.registerTask('bundledDependencies', 'A task that bundles all dependencies.',function(){

        var options = this.options({
            file: 'dist/package.json'
        });

        var pkg = grunt.file.readJSON(options.file);
        pkg.bundledDependencies = Object.keys(pkg.dependencies);
        grunt.file.write(options.file, JSON.stringify(pkg, undefined, '  '));
    });
};