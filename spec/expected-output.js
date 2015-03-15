/*global require*/
(function doTest(require){
  'use strict';

  var test = require('tape')
    , atthisCm = require('../index');

  test('output', function doTestCase(tape) {
      tape.plan(2);

      tape.equal(typeof atthisCm, 'string');
      tape.equal(atthisCm, 'Hello world!');
  });
}(require));
