module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      options: {
        sourcemap: 'none'
      },
      dist: {
        files: {
          'style.noprefix.css': 'sass/main.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [require('autoprefixer')],
        map: false
      },
      dist: {
        files: {
          'style.nomin.css': 'style.noprefix.css'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dist: {
        files: {
          'style.css': [ 'style.nomin.css']
        }
      }
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'content-header.php': ['pug/content-header.pug'],
          'content-home.php': ['pug/content-home.pug'],
          'single.php': ['pug/single.pug'],
          'header.php': ['pug/header.pug'],
          'footer.php': ['pug/footer.pug'],
          '404.php': ['pug/404.pug']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
   
  grunt.registerTask('default', ['sass','postcss','cssmin','pug']);

};