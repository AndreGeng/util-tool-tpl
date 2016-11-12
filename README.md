## gz-util-tool-tpl

simple js template engine

usage:
  put js code within '<% [js code] %>'.
  put code within '<%= [js code] %>' if something need to show on page.

  var template = `
    <div>
      <% if(it) { %>
        <%= it %>
      <% }%>
    </div>
  `;
  var data = 'test';
  import {tpl} from 'gz-util-tool-tpl';
  tpl(template)(data);
