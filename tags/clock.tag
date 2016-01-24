<clock>
    <canvas name="canvas" width="{opts.radius || 200}" height="{opts.radius || 200}" style="background-color:#333"></canvas>
    <script>
        this.on('mount', function () {
            clock(this.canvas)
        })
    </script>
</clock>
