/*global module:false*/
module.exports = function(grunt) {
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
      }
    },
    jshint: {
      options: { 'force': true },
      'package': {
        src: ['package.json', 'Gruntfile.js']
      },
      settings: {
        src: ['lib/*.js']
      },
      single: {
        src: ['lib/relax/boss.js']
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
      afterconcat: {
        src: ['dist/*.js']
      },
      afterconcatrelax: {
        src: ['dist/relax.js']
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
  grunt.registerTask('default', ['jshint:package', 'jshint:settings', 'jshint:enforce', 'jshint:relax', 'concat', 'jshint:afterconcat']);
  grunt.registerTask('before', ['jshint:package', 'jshint:settings', 'jshint:enforce', 'jshint:relax', 'concat']);
  grunt.registerTask('single', ['jshint:single']);
  grunt.registerTask('enforce', ['jshint:enforce']);
  grunt.registerTask('relax', ['jshint:relax', 'concat', 'jshint:afterconcatrelax']);
  grunt.registerTask('disabled', ['jshint', 'qunit', 'concat', 'uglify']);
};
