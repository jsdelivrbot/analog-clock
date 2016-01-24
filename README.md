#Analog clock

Borrowed(stole :P) clock from [w3school][http://www.w3schools.com/canvas/canvas_clock.asp] and made as riot tag(component).
In your code you could just do `<clock radius="{radius}"><clock>`. But you need riot.js for this. See complete example below which also links to runnable codepen.

#Example

```html
<!DOCTYPE html>
<html>
<body>
    <script src="https://cdn.jsdelivr.net/riot/2.3.13/riot.min.js"></script>
    <script src="https://raw.githubusercontent.com/alfredwesterveld/analog-clock/master/index.js"></script>
    <clock radius="300"></clock>
    <hr />
    <clock></clock>
    <script>riot.mount("clock")</script>
    
</body>
</html>
```

#GIF

Record on linux thanks to [byzanz][https://www.maketecheasier.com/record-screen-as-animated-gif-ubuntu/]
![Demo](https://github.com/alfredwesterveld/analog-clock/raw/master/clock.gif)
