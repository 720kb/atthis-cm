/*global require module*/
(function lint(require, module) {
  'use strict';

  var path = require('path')
    , walk = require('./walk')
    , CLIEngine = require("eslint").CLIEngine
    , cli = new CLIEngine(require('../confs/eslint.json'));

  walk('spec', [], function(err, results) {
    if (err) {

      throw err;
    }
    if (results &&
      results.length > 0) {

      var resultsIndex = 0
        , resultsLength = results.length
        , aResult
        , toLint = [];
      for (; resultsIndex < resultsLength; resultsIndex += 1) {

        aResult = results[resultsIndex];
        if (aResult) {

          var aFileToLint = path.resolve(__dirname, '../..', aResult);
          if (aFileToLint) {

            toLint.push(aFileToLint);
          }
        }
      }

      var report = cli.executeOnFiles(toLint);
      console.log(report);
    }
  });
}(require, module));
