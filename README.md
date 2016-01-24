#Analog clock

Borrowed(stole :P) clock from [w3school](http://www.w3schools.com/canvas/canvas_clock.asp) and made as riot tag(component).
In your html you could just do `<clock radius="{radius}"><clock>`. But you need riot.js for this. See complete example below which also links to runnable codepen.

#Example

Also available at [codepen](http://codepen.io/alfredwesterveld/pen/NxyePR)
```html
<!DOCTYPE html>
<html>
<body>
    <h1>Clock</h1>
    <clock radius="300"></clock>
    <hr />
    <clock></clock>
    <script src="https://cdn.jsdelivr.net/riot/2.3.13/riot.min.js"></script>
    <script src="https://rawgit.com/alfredwesterveld/analog-clock/master/index.js"></script>
    <script>riot.mount("clock")</script>
</body>
</html>
```

#Example

Record clock as gif on linux thanks to [byzanz](https://www.maketecheasier.com/record-screen-as-animated-gif-ubuntu/)
![Demo](https://github.com/alfredwesterveld/analog-clock/raw/master/clock.gif)
