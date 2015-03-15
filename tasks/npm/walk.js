/*global require module*/
(function moduleExports(require, module) {
  'use strict';

  var fs = require('fs')
    , path = require('path')
    , walk = function walk(dir, regExcludes, done) {

        var results = [];
        fs.readdir(dir, function onDirectoryList(err, list) {

          var pending = list.length;
          if (err) {

            return done(err);
          }

          if (!pending) {

            return done(null, results);
          }

          list.forEach(function iterator(file) {

            file = path.join(dir, file);
            var excluded = false
              , len = regExcludes.length
              , i = 0;
            for (; i < len; i++) {

              if (file.match(regExcludes[i])) {

                excluded = true;
              }
            }

            // Add if not in regExcludes
            if(excluded === false) {

              results.push(file);
              // Check if its a folder
              fs.stat(file, function onStat(err, stat) {

                if (stat &&
                  stat.isDirectory()) {

                  // If it is, walk again
                  walk(file, regExcludes, function onWalk(err, res) {

                    results = results.concat(res);
                    if (!--pending) {

                      done(null, results);
                    }
                  });
                } else {

                  if (!--pending) {

                    done(null, results);
                  }
                }
              });
            } else {

              if (!--pending) {

                done(null, results);
              }
            }
          });
        });
      };

  module.exports = walk;
}(require, module));
