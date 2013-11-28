module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    //specify an alternate install location for Bower
    bower: {
      dev: {
        dest: 'boilerapp/static/dev/js'
      }
    },

    // minification of the .js files
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'boilerapp/static/dev/js/*.js',
        dest: 'boilerapp/static/build/js/all.min.js',
        options: {
          stripJsAffix: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "bower" task.
  grunt.loadNpmTasks('grunt-bower');

  // Default task(s).
  grunt.registerTask('default', ['bower', 'uglify']);

};