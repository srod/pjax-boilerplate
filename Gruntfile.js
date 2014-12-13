module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var port = 8981;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: 'js/vendor',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: true,
          bowerOptions: {}
        }
      }
    },

    jshint: {
      dev: {
        src: [
          'js/**/*.js',
          '!js/vendor/**/*.js',
          '!js/app-min.js'
        ],
        options: {
          reporter: require('jshint-stylish'),
          jshintrc: '.jshintrc'
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'js',
          mainConfigFile: 'js/app.js',
          preserveLicenseComments: false,
          name: 'app',
          out: 'js/app-min-temp.js',
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);

            if (duplicates.length > 0) {
              grunt.log.subhead('Duplicates found in requirejs build:');
              grunt.log.warn(duplicates);
              done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }

            done();
          }
        }
      }
    },
    uglify: {
      compile: {
        options: {
          report: 'gzip',
          compress: true
        },
        files: [
          {
            src: [
              'js/vendor/requirejs/require.js',
              'js/app-min-temp.js'
            ],
            dest: 'js/app-min.js'
          }
        ]
      }
    },

    clean: ['js/app-min-temp.js'],

    watch: {
// http://badwing.com/my-gruntfile-js-an-example-gruntfile-and-my-workflow/
//      scripts: {
//        files: [
//          'public/javascripts/zoltar/**/*.js',
//          'public/javascripts/support/**/*.js',
//          '!public/javascripts/dist/**/*.js'
//        ],
//        tasks: [
//          'ngmin',
//          'uglify',
//          'docular'
//        ]
//      },
//      serverTests: {
//        files: [
//          'config/**/*.js',
//          'server.js',
//          'models/**/*.js',
//          'routes/**/*.js',
//          'utils/**/*.js',
//          'spec/**/*.js',
//          'public/schemas/**/*.json'
//        ],
//        tasks: ['jasmine_node']
//      },
      clientTests: {
        files: ['js/**/*.js'],
        tasks: ['karma']
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'web-server.js'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: port,
          base: '.'
        }
      }
    },
    shell: {
      'mocha-phantomjs': {
        command: './node_modules/mocha-phantomjs/bin/mocha-phantomjs -R spec http://localhost:8000/test/testrunner.html',
        options: {
          stdout: true,
          stderr: true
        }
      },
      'ci': {
        command: './node_modules/mocha-phantomjs/bin/mocha-phantomjs -R spec http://localhost:' + port + '/test/testrunner.html',
        options: {
          stdout: true,
          stderr: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      travis: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.registerTask('init', ['bower']);
  grunt.registerTask('js', ['jshint:dev']);
  grunt.registerTask('build', [
    'jshint:dev',
    'requirejs',
    'uglify',
    'clean'
  ]);
  grunt.registerTask('test2', [
    'connect',
    'shell:ci'
  ]);
  grunt.registerTask('test', ['karma:travis']);
};