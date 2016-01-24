riot.tag2('clock', '<canvas name="canvas" width="{opts.radius || 200}" height="{opts.radius || 200}" style="background-color:#333"></canvas>', '', '', function(opts) {
        this.on('mount', function () {
            clock(this.canvas)
        })
}, '{ }');
