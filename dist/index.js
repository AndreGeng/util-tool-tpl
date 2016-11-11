'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tpl = tpl;
function tpl(template, it) {
  var result = '';
  var echo = function echo(str) {
    return result += str;
  };
  var outputExp = /<%=(.+?)%>/g;
  var scriptExp = /<%([\s\S]+?)%>/g;
  var script = template.replace(/[\r\n](\s)*/g, '').replace(outputExp, '\'); \n  echo( $1 ); \n  echo(\'').replace(scriptExp, '\'); \n $1 \n  echo(\'');
  return eval('echo(\'' + script + '\')');
}