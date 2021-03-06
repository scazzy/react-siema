'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if(typeof document !== 'undefined') {
        var transform = document.documentElement.style.transform;

        if (typeof transform === 'string') {
            return 'transform';
        }
    }
    return 'WebkitTransform';
}();
