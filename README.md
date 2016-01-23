#Analog clock

Borrowed(stole :P) clock from [w3school][http://www.w3schools.com/canvas/canvas_clock.asp]. Browserified module so that it can be included in your project easily. call clock just pass it your canvas #id like ```javascript clock(myclock)```

#Browserify

Only when you edit clock.js and want to update bundle.

```bash
browserify --standalone clock clock.js > bundle.js
```

#GIF

Record on linux thanks to [byzanz][https://www.maketecheasier.com/record-screen-as-animated-gif-ubuntu/]
![Demo](https://github.com/alfredwesterveld/clock/raw/master/clock.gif)

