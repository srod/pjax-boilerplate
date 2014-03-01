module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

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
                src: ['js/**/*.js', '!js/vendor/**/*.js', '!js/app-min.js'],
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
                files: [{
                    src: ['js/vendor/requirejs/require.js', 'js/app-min-temp.js'],
                    dest: 'js/app-min.js'
                }]
            }
        },

        clean: ['js/app-min-temp.js']
    });

    grunt.registerTask('init', ['bower']);
    grunt.registerTask('test', ['jshint:dev']);
    grunt.registerTask('build', ['jshint:dev', 'requirejs', 'uglify', 'clean']);
};