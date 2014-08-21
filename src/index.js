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

var shift = false;

[].map.call(document.querySelectorAll('.key'), function (key) {
  var str = key.innerHTML.trim();
  var chr;

  if (str.length === 1) {
    chr = str.charCodeAt(0);
  } else if ((chr = map[str])) {
  } else {
    return;
  }

  key.addEventListener('click', function (event) {
    event.preventDefault();

    window.onkeydown({
      preventDefault: function() {},
      keyCode: chr,
      shiftKey: shift
    });
  });
});

var caps = document.querySelector('.caps-lock');

caps.addEventListener('click', function (event) {
    event.preventDefault();
     shift = !shift;
     if (shift) {
       caps.className += ' active';
     } else {
       caps.className = caps.className.replace(' active', '');
     }
});
