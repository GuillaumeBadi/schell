'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$_ = undefined;

var _child_process = require('child_process');

var $_ = exports.$_ = function $_(command) {
  var output = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
  return new Promise(function (resolve, reject) {
    return (0, _child_process.exec)(command, function (err, stdout, stderr) {
      return err || stderr ? reject(err || stderr) : resolve(output && console.log(stdout));
    });
  });
};
