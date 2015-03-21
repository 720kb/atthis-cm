/*global require*/
(function doTest(require){
  'use strict';

  var test = require('tape')
    , atthisCm = require('../index');

  test('output', function doTestCase(tape) {
      tape.plan(2);

      tape.equal(typeof atthisCm, 'object');
      tape.deepEqual(atthisCm, {
        'dataTypes': {
          'string': {
            'required': true
          },
          'number': {
            'required': true
          },
          'password': {
            'required': true
          },
          'file': {
            'required': true
          },
          'checkbox': {
            'required': true
          }
        }
      });
  });
}(require));
