(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
global.clock = require('./js/clock')
require('./tags/clock')

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./js/clock":2,"./tags/clock":3}],2:[function(require,module,exports){
// thank you w2

module.exports = function clock(canvas) {
    var ctx = canvas.getContext("2d")
    var radius = canvas.height / 2
    ctx.translate(radius, radius)
    radius = radius * 0.90
    drawClock() // start drawing immediately.
    setInterval(drawClock, 1000)

    function drawClock() {
      drawFace(ctx, radius)
      drawNumbers(ctx, radius)
      drawTime(ctx, radius)
    }

    function drawFace(ctx, radius) {
      var grad
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, 2*Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()
      grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05)
      grad.addColorStop(0, '#333')
      grad.addColorStop(0.5, 'white')
      grad.addColorStop(1, '#333')
      ctx.strokeStyle = grad
      ctx.lineWidth = radius*0.1
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI)
      ctx.fillStyle = '#333'
      ctx.fill()
    }

    function drawNumbers(ctx, radius) {
      var ang
      var num
      ctx.font = radius*0.15 + "px arial"
      ctx.textBaseline="middle"
      ctx.textAlign="center"
      for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6
        ctx.rotate(ang)
        ctx.translate(0, -radius*0.85)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, radius*0.85)
        ctx.rotate(-ang)
      }
    }

    function drawTime(ctx, radius){
        var now = new Date()
        var hour = now.getHours()
        var minute = now.getMinutes()
        var second = now.getSeconds()

        //hour
        hour=hour%12
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60))
        drawHand(ctx, hour, radius*0.5, radius*0.07)

        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60))
        drawHand(ctx, minute, radius*0.8, radius*0.07)

        // second
        second=(second*Math.PI/30)
        drawHand(ctx, second, radius*0.9, radius*0.02)
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap = "round"
        ctx.moveTo(0,0)
        ctx.rotate(pos)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-pos)
    }
}

},{}],3:[function(require,module,exports){
riot.tag2('clock', '<canvas name="canvas" width="{opts.radius || 200}" height="{opts.radius || 200}" style="background-color:#333"></canvas>', '', '', function(opts) {
        this.on('mount', function () {
            clock(this.canvas)
        })
}, '{ }');

},{}]},{},[1]);
