/*jshint indent: 2 */
/*global module:false*/
/**
  @file Gruntfile.js
  @author Brent S.A. Cowgill
  @see {@link module:Gruntfile}
  @description
  Grunt build configuration.

  @see {@link http://usejsdoc.org/ JSDoc Documentation}
*/

/**
  Grunt build configuration.
  @module Gruntfile
*/
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
    /**
      jshint validation of javascript code.
      @see {@link https://github.com/gruntjs/grunt-contrib-jshint About jshint grunt plugin}
      @see {@link http://jshint.com/docs/options/ jshint options}
      @see {@link https://github.com/jshint/jshint/blob/master/src/messages.js Warning codes for jshint}
    */
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
      tabs: {
        options: {},
        src: ['lib/indent-with-tabs.js']
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
  grunt.registerTask('default', ['jshint:tabs']);
  grunt.registerTask('all', ['before', 'jshint:afterconcat']);
  grunt.registerTask('before', ['jshint:package', 'jshint:settings', 'concat', 'jshint:enforce', 'jshint:relax', 'jshint:environment', 'jshint:tabs']);
  grunt.registerTask('single', ['jshint:single']);
  grunt.registerTask('enforce', ['jshint:enforce', 'concat:enforce', 'jshint:afterconcatenforce']);
  grunt.registerTask('relax', ['jshint:relax', 'concat:relax', 'jshint:afterconcatrelax']);
  grunt.registerTask('environment', ['jshint:environment', 'concat:environment', 'jshint:afterconcatenvironment']);
  grunt.registerTask('disabled', ['jshint', 'qunit', 'concat', 'uglify']);
};
// Add this to sublime-project file
//  "settings": { "build_on_save": 1 }
