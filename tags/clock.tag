<clock>
    <canvas name="canvas">
    </canvas>
    <script>
        this.on('mount', function () {
            this.canvas.style.backgroundColor = opts.bg_canvas || '#333'
            this.canvas.width = opts.radius || 200
            this.canvas.height = opts.radius || 200
            clock(this.canvas, opts)
        })
    </script>
</clock>
