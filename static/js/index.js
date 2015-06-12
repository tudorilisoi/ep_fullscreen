var $ = require('ep_etherpad-lite/static/js/rjquery').$;
var _ = require('ep_etherpad-lite/static/js/underscore');

var _full = false;


//NOTE: must set document.domain='yourdomain' the the parent window
var top, $top, $frame, $body, pad;

var documentReady = function () {
    top = window.top.document;
    $top = $(top);
    $body = $('body', $(top));
    // $frame = $('#epframet1', $body);
    $frame = $(window.frameElement);
    console.log('documentReady', $frame);
};


// Bind the event handler to the toolbar buttons
var postAceInit = function (hook, context) {
    pad = context.pad;
    var inst = context.ace;
    console.log(arguments);
    // console.log('postAceInit', window);

    //if not embedded
    if (!window.frameElement) {
        $('.ep_fullscreen').hide();
        return;
    }

    $('.ep_fullscreen').attr('title', window._('ep_open_fullscreen'));
    $('.ep_fullscreen').click(function () {
        toggleFullscreen();
        $('.ep_fullscreen').attr('title', window._(_full ? 'ep_exit_fullscreen' : 'ep_open_fullscreen'));
        inst.focus();
        var rem = _full ? 'buttonicon-fullscreen' : 'buttonicon-exit-fullscreen';
        var add = !_full ? 'buttonicon-fullscreen' : 'buttonicon-exit-fullscreen';
        $('.buttonicon', this).removeClass(rem).addClass(add);
    });
};

function go() {
    // $frame.hide();
}

function setProp(el, prop, val) {
    var prev = el.css(prop);
    el.data('ep-prev-style' + prop, prev);
    el.css(prop, val);
}

var frameH, scrollTop, styleF;

function restoreProp(el, prop) {
    var prev = el.data('ep-prev-style' + prop);
    el.css(prop, prev);
}

function save() {
    setProp($body, 'overflow', 'hidden');
    styleF = $frame.attr('style');
    $frame.attr('style', 'z-index: 9999; border: 0; position:fixed; top:0; left:0; right:0; bottom:0; width:100%; height:100%');
    // var wh = $top.height();
    // frameH = $frame.attr('height');
    // $frame.attr('height', wh);
}

function restore() {
    restoreProp($body, 'overflow', 'hidden');
    $frame.attr('style', styleF);
    // $frame.attr('height', frameH);
}

function toggleFullscreen() {
    _full = !_full;

    if (_full) {
        save();
        go();
    } else {
        restore();

    }

}


exports.postAceInit = postAceInit;
exports.documentReady = documentReady;
