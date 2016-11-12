'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tpl = tpl;
function tpl(template) {
  var outputExp = /<%=(.+?)%>/g;
  var scriptExp = /<%([\s\S]+?)%>/g;
  var script = template.replace(/[\r\n](\s)*/g, '').replace(outputExp, '\'); \n  echo( $1 ); \n  echo(\'').replace(scriptExp, '\'); \n $1 \n  echo(\'');
  return function (script, it) {
    var result = '';
    var echo = function echo(str) {
      return result += str;
    };
    eval('echo(\'' + script + '\');');
    return result;
  }.bind(null, script);
}