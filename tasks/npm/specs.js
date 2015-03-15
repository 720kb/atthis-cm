/*global require module*/
(function specs(require, module) {
  'use strict';

  var path = require('path')
    , walk = require('./walk');

  walk('spec', [], function(err, results) {
    if (err) {

      throw err;
    }
    if (results &&
      results.length > 0) {

      var resultsIndex = 0
        , resultsLength = results.length
        , aResult
      for (; resultsIndex < resultsLength; resultsIndex += 1) {

        aResult = results[resultsIndex];
        if (aResult) {

          var specFile = path.resolve(__dirname, '../..', aResult)
            , name;

          require(specFile);
          name = require.resolve(specFile);
          delete require.cache[name];
        }
      }
    }
  });
}(require, module));
