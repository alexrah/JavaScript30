'use strict';

/**
 * Created by ale on 27/12/17.
 */

var playyxx = void 0;

var play = function play(e) {
    console.log(e);
    var el = void 0;
    if (e.type === 'click') {
        // console.log(e.target.parentNode);
        var key = e.target.parentNode;
        var audio = key.querySelector('audio');
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    } else {
        if (el = document.querySelector('div[data-key="' + e.keyCode + '" ]')) {
            el.classList.add("playing");
            var _audio = el.querySelector("audio");
            _audio.currentTime = 0;
            _audio.play();
        }
    }
};
window.addEventListener('keyup', function (e) {
    play(e);
});

var allKeys = document.querySelectorAll('.key');
console.log(allKeys);
var allArr = Array.from(allKeys);
allArr.map(function (key) {
    key.addEventListener('click', function (e) {
        return play(e);
    });
});

window.addEventListener('transitionend', function (e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
});
//# sourceMappingURL=all.js.map