# ep_fullscreen

## Function
Adds a button in the toolbar to fill the browser viewport (i.e. the 'Toggle fullscreen' functionality)

Mind you, this is an early alpha

## Settings
use this repo which contains the button icons (embedded in the fontawesome font)
<https://github.com/tudorilisoi/etherpad-lite>
, or edit `editbarButtons.ejs` to style the button with CSS classes

**NOTE**: You must set document.domain='yourdomain.com' the the parent window, and etherpad-lite must be hosted *on the same domain as the parent document* (the one which embeds the pad)
```js
<script>
document.domain='yourdomain.com';
</script>
```

As pointed out in this issue, you may have to go an extra mile to get it working in IE:
<https://github.com/tudorilisoi/ep_fullscreen/issues/2#issue-116146785>
