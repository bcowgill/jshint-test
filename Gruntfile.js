/*jshint indent: 2 */
/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - for qunit v<%= pkg.config.qunit_ver %> ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> */\n',
    // Task configuration.
    concat: {
      enforce: {
        src: ['lib/header.js', 'lib/enforce/*.js'],
        dest: 'dist/enforce.js'
      },
      relax: {
        src: ['lib/header.js', 'lib/relax/*.js'],
        dest: 'dist/relax.js'
      },
      environment: {
        src: ['lib/header.js', 'lib/environment/*.js'],
        dest: 'dist/environment.js'
      }
    },
    // jshint warning codes are in:
    // node_modules/grunt-contrib-jshint/node_modules/jshint/src/messages.js
    jshint: {
      options: { 'force': true },
      'package': {
        src: ['package.json', 'Gruntfile.js']
      },
      settings: {
        src: ['lib/*.js']
      },
      single: {
        src: ['lib/relax/eqnull.js']
      },
      unused: {
        src: ['lib/enforce/unused*.js']
      },
      enforce: {
        src: ['lib/enforce/*.js']
      },
      relax: {
        src: ['lib/relax/*.js']
      },
      environment: {
        src: ['lib/environment/*.js']
      },
      afterconcat: {
        src: ['dist/*.js']
      },
      afterconcatenforce: {
        src: ['dist/enforce.js']
      },
      afterconcatrelax: {
        src: ['dist/relax.js']
      },
      afterconcatenvironment: {
        src: ['dist/environment.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['single']);
  grunt.registerTask('all', ['before', 'jshint:afterconcat']);
  grunt.registerTask('before', ['jshint:package', 'jshint:settings', 'concat', 'jshint:enforce', 'jshint:relax', 'jshint:environment']);
  grunt.registerTask('single', ['jshint:single']);
  grunt.registerTask('enforce', ['jshint:enforce', 'concat:enforce', 'jshint:afterconcatenforce']);
  grunt.registerTask('relax', ['jshint:relax', 'concat:relax', 'jshint:afterconcatrelax']);
  grunt.registerTask('environment', ['jshint:environment', 'concat:environment', 'jshint:afterconcatenvironment']);
  grunt.registerTask('disabled', ['jshint', 'qunit', 'concat', 'uglify']);
};
// Add this to sublime-project file
//  "settings": { "build_on_save": 1 }
