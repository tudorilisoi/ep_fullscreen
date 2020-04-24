var $ = require('ep_etherpad-lite/static/js/rjquery').$;
var _ = require('ep_etherpad-lite/static/js/underscore');


style_full =
  '.ep_fullscreen_frame { ' +
  '  z-index: 9999 !important; ' +
  '  margin: 0 !important; ' +
  '  border: 0 !important; ' +
  '  position: fixed !important; ' +
  '  top: 0 !important; ' +
  '  left: 0 !important; ' +
  '  right: 0 !important; ' +
  '  bottom: 0 !important; ' +
  '  width: 100% !important; ' +
  '  height: 100% !important; ' +
  '} ' +
  '.ep_fullscreen_body { overflow: hidden !important; }';

//NOTE: must set document.domain='yourdomain' the the parent window
var top, $top, $frame, $body, pad;

var documentReady = function () {
    top = window.top.document;
    $top = $(top);
    $body = $('body', $(top));
    $frame = $(window.frameElement);

    $top.find('html > head').append($('<style>').text(style_full));
    console.log('documentReady', $frame);
};


// Bind the event handler to the toolbar buttons
var postAceInit = function (hook, context) {
    pad = context.pad;
    var inst = context.ace;

    //if not embedded
    if (!window.frameElement) {
        $('a.ep_fullscreen').hide();
        return;
    }

    $('a.ep_fullscreen').attr('title', window._('ep_open_fullscreen'));
    $('a.ep_fullscreen').click(function () {
        $body.toggleClass('ep_fullscreen_body');
        $frame.toggleClass('ep_fullscreen_frame');
        inst.focus();
        updateButton();
    });
    updateButton();
};

function updateButton() {
    var full = $frame.hasClass('ep_fullscreen_frame');
    $('a.ep_fullscreen').attr('title', window._(
    full? 'ep_exit_fullscreen': 'ep_open_fullscreen'));

    $('a.ep_fullscreen .buttonicon')
        .toggleClass('buttonicon-fullscreen', !full)
        .toggleClass('buttonicon-exit-fullscreen', full)
    ;
}


exports.postAceInit = postAceInit;
exports.documentReady = documentReady;
