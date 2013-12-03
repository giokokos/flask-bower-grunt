'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //specify an alternate install location for Bower
        bower: {
            dev: {
                dest: 'flaskapp/base/static/libs'
            }
        },

        watch: {
            files: [
                'flaskapp/**/assets/js/*.js',
            ],
            tasks: ['bower', 'uglify']
        },

        // minification of the .js files
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['flaskapp/base/static/libs/jquery.js', 'flaskapp/base/static/libs/bootstrap.js', 'flaskapp/base/assets/js/*.js', 'flaskapp/module1/assets/js/*.js', 'flaskapp/module2/assets/js/*.js'],
                dest: 'flaskapp/base/static/build/js/all.min.js',
                options: {
                    stripJsAffix: true
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['bower', 'uglify']);
};