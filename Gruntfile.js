'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // specify an alternate install location for Bower
        bower: {
            dev: {
                dest: 'base/static/libs'
            }
        },

        watch: {
            files: [
                '**/assets/js/*.js',
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
                src: ['base/static/libs/jquery.js', 'base/static/libs/bootstrap.js', 'base/assets/js/*.js', 'module1/assets/js/*.js', 'module2/assets/js/*.js'],
                dest: 'base/static/build/js/all.min.js',
                options: {
                    stripJsAffix: true
                }
            }
        },

        // jshint
        jshint: {
          all: ['Gruntfile.js', '**/assets/js/*.js']
        },

        // copy modules assets under /static/assets
        copy: {
            all: {
                expand: true,
                //cwd: 'flaskapp/',
                src: ['module1/assets/**/*.js', 'module1/assets/**/*.css'
                     ,'module2/assets/**/*.js', 'module2/assets/**/*.css'],
                dest: 'base/static/assets/'
            }
        }

    });

    // Default task(s)
    grunt.registerTask('default', ['bower', 'uglify', 'copy']);
};