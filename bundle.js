/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {global.clock = __webpack_require__(1)
	__webpack_require__(2)

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*  thank you w3schools.com
	    http://www.w3schools.com/canvas/tryit.asp?filename=trycanvas_clock_start
	*/

	module.exports = function clock(canvas, options) {
	    options = options || {}
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
	        ctx.arc(0, 0, radius, 0, 2 * Math.PI)
	        ctx.fillStyle = options.bg_clock || "white"
	        ctx.fill()
	        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
	        grad.addColorStop(0, options.plates_inner_rim || '#333')
	        grad.addColorStop(0.5, options.rim ||'white')
	        grad.addColorStop(1, options.outer_rim || '#333')
	        ctx.strokeStyle = grad
	        ctx.lineWidth = radius * 0.1
	        ctx.stroke()
	        ctx.beginPath()
	        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
	        ctx.fillStyle = options.knob || '#333' // knob?
	        ctx.fill()
	    }

	    function drawNumbers(ctx, radius) {
	        var ang
	        var num
	        ctx.font = radius * 0.15 + "px arial"
	        ctx.textBaseline = "middle"
	        ctx.textAlign = "center"
	     
	        for (num = 1; num < 13; num++) {
	            ang = num * Math.PI / 6
	            ctx.rotate(ang)
	            ctx.translate(0, -radius * 0.85)
	            ctx.rotate(-ang)
	            ctx.fillStyle = options.numbers || "#FFFFF"
	            ctx.fillText(num.toString(), 0, 0)
	            ctx.rotate(ang)
	            ctx.translate(0, radius * 0.85)
	            ctx.rotate(-ang)
	        }
	    }

	    function drawTime(ctx, radius) {
	        var now = new Date()
	        var hour = now.getHours()
	        var minute = now.getMinutes()
	        var second = now.getSeconds()

	        //hour
	        hour = hour % 12
	        hour = (hour * Math.PI / 6) +
	            (minute * Math.PI / (6 * 60)) +
	            (second * Math.PI / (360 * 60))
	        drawHand(ctx, hour, radius * 0.5, radius * 0.07)

	        //minute
	        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
	        drawHand(ctx, minute, radius * 0.8, radius * 0.07)

	        // second
	        second = (second * Math.PI / 30)
	        drawHand(ctx, second, radius * 0.9, radius * 0.02)
	    }

	    function drawHand(ctx, pos, length, width) {
	        ctx.beginPath()
	        ctx.lineWidth = width
	        ctx.lineCap = "round"
	        ctx.moveTo(0, 0)
	        ctx.rotate(pos)
	        ctx.lineTo(0, -length)
	        ctx.stroke()
	        ctx.rotate(-pos)
	    }
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(3);

	riot.tag2('clock', '<canvas name="canvas"></canvas>', '', '', function(opts) {
	        this.on('mount', function () {
	            this.canvas.style.backgroundColor = opts.bg_canvas || '#333'
	            this.canvas.width = opts.radius || 200
	            this.canvas.height = opts.radius || 200
	            clock(this.canvas, opts)
	        })
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = riot;

/***/ }
/******/ ]);