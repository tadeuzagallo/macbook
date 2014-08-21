'use strict';

var zsh = require('zsh.js'),
    tmux = require('tmux.js');

zsh.create('terminal');
tmux.init(zsh);

var map = {
  delete: 8,
  '': 32,
  return: 13,
  tab: 9
};

[].map.call(document.querySelectorAll('.key'), function (key) {
  var str = key.innerHTML.trim();
  var chr;

  if (str.length === 1) {
    chr = str.charCodeAt(0);
  } else if ((chr = map[str])) {
  } else {
    return;
  }

  key.onclick = function () {
    window.onkeydown({
      preventDefault: function() {},
      keyCode: chr
    });
  };
});
