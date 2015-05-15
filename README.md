# ep_fullscreen

## Function
Adds a button in the toolbar to fill the browser viewport (i.e. the 'Toggle fullscreen' functionality)

## Settings
use this repo which contains the button icons (embedded in the fontawesome font)
<https://github.com/tudorilisoi/etherpad-lite>
, or edit `editbarButtons.ejs` to style the button with CSS classes

**NOTE**: You must set document.domain='yourdomain.com' the the parent window, and etherpad-lite must be hosted *on the same domain as the parent document* (the one which embeds the pad)
```
<script>
document.domain='yourdomain.com';
</script>
```


