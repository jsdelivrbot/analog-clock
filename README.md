#Analog clock [![ghit.me](https://ghit.me/badge.svg?repo=alfredwesterveld/analog-clock)](https://ghit.me/repo/alfredwesterveld/analog-clock)

Borrowed(stole :P) clock from [w3school](http://www.w3schools.com/canvas/canvas_clock.asp) and made as riot tag(component).
In your html you could just do `<clock radius="{radius}"><clock>` anywhere you like(even multiple times). But you need [riot.js](http://riotjs.com/) for this. See complete example(s) below which also links to runnable [codepen](http://codepen.io/alfredwesterveld/pen/NxyePR) (plain javascript).

#How would (GIF below)

I Recorded the clock as gif on linux thanks to [byzanz](https://www.maketecheasier.com/record-screen-as-animated-gif-ubuntu/)

![Demo](https://cdn.rawgit.com/alfredwesterveld/analog-clock/master/clock.gif)
#Example plain javascript

You could just copy paste this example.
Also available at [codepen](http://codepen.io/alfredwesterveld/pen/NxyePR)
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Clock</h1>
    
    <-- first clock with radius of 300(px) -->
    <clock radius="300"></clock>
    <hr />
    <clock></clock>
    <script src="https://cdn.jsdelivr.net/riot/2.3.13/riot.min.js"></script>
    <script src="https://rawgit.com/alfredwesterveld/analog-clock/master/index.js"></script>
    <script>riot.mount("clock")</script>
</body>
</html>
```

