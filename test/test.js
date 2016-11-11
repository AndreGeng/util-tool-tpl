var assert = require('assert');
import {tpl} from '../index.es6';
describe('tpl', function() {
  it('should convert template to raw string', function(){
    var templateStr = '<%= it %>';
    var data = 'msg';
    var result = tpl(templateStr)(data);
    assert.equal(result, data);
  });
});
