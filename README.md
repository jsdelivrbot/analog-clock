# Analog clock [![ghit.me](https://ghit.me/badge.svg?repo=alfredwesterveld/analog-clock)](https://ghit.me/repo/alfredwesterveld/analog-clock)

Borrowed(stole :P) clock from [w3school](http://www.w3schools.com/canvas/canvas_clock.asp) and made as riot tag(component).
In your html you could just do `<clock radius="{radius}"><clock>` anywhere you like(even multiple times). But you need [riot.js](http://riotjs.com/) for this. See complete example(s) below which also links to runnable [codepen](http://codepen.io/alfredwesterveld/pen/NxyePR) (plain javascript).

To understand these attributes better a picture explains better than a thousand words, so I would advise to look at codepen and modify attributes real time to see what happens.

`<clock>`
- `radius="{int}"`
    radius in pixels. Canvas will be this big, but clock only 90%.
- `bg_canvas={color}`
    background color canvas outside of clock.
- `bg_clock={color}`
    background color inside of clock.
- `plates_inner_rim={color}`
    background color plates(arrows pointing to time) plus background color rim inside of clock.
- `outer_rim`
    backgrond color outer rim
- `rim={color}`
    the rest of the rim

# How would it look like (animated GIF below)

I Recorded the clock as gif on linux thanks to [byzanz](https://www.maketecheasier.com/record-screen-as-animated-gif-ubuntu/)


![Demo](https://cdn.rawgit.com/alfredwesterveld/analog-clock/master/clock.gif)
# Example plain javascript

You could just copy paste this example.
Also available at [codepen](http://codepen.io/alfredwesterveld/pen/NxyePR)
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Clock webpack live reload :)</h1>
    <!-- Completely modified clock (ugly, but show good properties ;) ) -->
    <clock radius="400" bg_canvas="grey" bg_clock="yellow" plates_inner_rim="red" 
        rim="purple" knob="brown" outer_rim="orange">
    </clock>
    
    <!-- Background transparant -->
    <clock radius="100" bg_canvas="transparant"></clock>
    
    <!-- standard clock -->
    <clock></clock>
    
    <!-- Your copy of riot from cdn for example -->
    <script src="js/riot.min.js"></script>
    <script src="bundle.js"></script>
    <script>
        riot.mount("clock")
    </script>
</body>
</html>
```
