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
          'string': 'string',
          'number': 'number',
          'password': 'password',
          'file': 'file',
          'checkbox': 'checkbox'
        },
        'optionsTypes': {
          'required': 'required'
        }
      });
  });
}(require));
