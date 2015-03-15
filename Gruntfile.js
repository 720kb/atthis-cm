/*global module*/
(function setUp(module) {
  'use strict';

  module.exports = function exportingFunction(grunt) {

    grunt.initConfig({
      'pkg': grunt.file.readJSON('package.json'),
      'eslint': grunt.file.readJSON('tasks/grunt/eslint.json')
    });

    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('cli', [
      'eslint',
    ]);

    grunt.registerTask('default', [
      'cli'
    ]);
  };
}(module));
