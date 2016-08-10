/**
 * JavaScript Libray v0.1
 */
"use strict";
(function(window) {
    window.vjs = {
        option: {
            'type' : 'pie'
        },
        init: function(selector, path, type) {
            this.option.type = type;
        },

        draw: function() {
        }
    };
})(window, (typeof(global) !== "undefined") ? global : window);
