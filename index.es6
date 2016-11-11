export function tpl(template,){
  debugger;
  let outputExp = /<%=(.+?)%>/g;
  let scriptExp = /<%([\s\S]+?)%>/g;
  var script = template.replace(/[\r\n](\s)*/g,'')
    .replace(outputExp, `'); \n  echo( $1 ); \n  echo('`)
    .replace(scriptExp, `'); \n $1 \n  echo('`);
  return function(it){
    let result = '';
    let echo = (str) => result += str;
    eval(`echo('${script}');`);
    return result;
  }
}
