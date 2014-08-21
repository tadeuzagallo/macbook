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

function keydown(chr) {
  return function (event) {
    event.preventDefault();

    window.onkeydown({
      preventDefault: function() {},
      keyCode: chr,
      shiftKey: shift
    });
  };
}

[].map.call(document.querySelectorAll('.key'), function (key) {
  var str = key.innerHTML.trim();
  var chr;

  if (str.length === 1) {
    chr = str.charCodeAt(0);
  } else if ((chr = map[str])) {
  } else {
    return;
  }

  key.addEventListener('click', keydown(chr));
});

var caps = document.querySelector('.caps-lock');

function toggleCaps(event) {
    event.preventDefault();
     shift = !shift;
     if (shift) {
       caps.className += ' active';
     } else {
       caps.className = caps.className.replace(' active', '');
     }
}

caps.addEventListener('click', toggleCaps);

window.addEventListener('keydown', function(event) {
  var kc = event.keyCode;

  if (kc === 20) {
    toggleCaps(event);
  }
});
