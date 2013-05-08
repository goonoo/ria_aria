(function () {
  "use strict";

  var KEY_TAB = 9, KEY_ENTER = 13, KEY_SHIFT = 16, shiftPressed = false,
      t1, t2,
      keyPressed = function (key) {
        clearTimeout(t1);
        clearTimeout(t2);
        $('#key').removeClass('remove').addClass('show').text(key);
        t1 = setTimeout(function () {
          $('#key').addClass('remove');
        }, 500);
        t2 = setTimeout(function () {
          $('#key').removeClass('show remove');
        }, 1000);
      };

  $(window).on('keydown', function (e) {
    var key = e.keyCode;
    if (key === KEY_SHIFT) {
      shiftPressed = true;
    }
  }).on('keyup', function (e) {
    var key = e.keyCode;
    if (key === KEY_SHIFT) {
      shiftPressed = false;
    }
    if (key === KEY_TAB && shiftPressed) {
      keyPressed('Shift+Tab');
    } else if (key === KEY_TAB) {
      keyPressed('Tab');
    } else if (key === KEY_ENTER) {
      keyPressed('Enter');
    }
  });
}());
