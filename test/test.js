var should = require('chai').should();
import {tpl} from '../index.es6';
describe('tpl', function() {
  it('should convert template to raw string', function(){
    var templateStr = `
    <div>
      <% if(it.show) { %>
        <%= it.msg %>
      <% } %>
    </div>
    `;
    var data = {show: true, msg: 'msg'};
    tpl(templateStr)(data).should.to.contain(data.msg);

    data = {show: false, msg: 'msg'};
    tpl(templateStr)(data).should.to.not.contain(data.msg);
  });
});
