const EventEmitter = require('events');

class PixelReader extends EventEmitter {
    constructor(options) {
        super();
        this.bitsPerPixel = options.bitsPerPixel;
    }

    read(buffer) {
        const counterOffset = this.bitsPerPixel / 8;
        for(let i = 0; i + counterOffset <= buffer.length; i += counterOffset) {
            const bgrInHex = {
                offset: i,
                b: buffer[i],
                g: buffer[i + 1],
                r: buffer[i + 2]
            };
            this.emit('color', bgrInHex);
        }
        this.emit('end');
        // Keep in mind that the loop will need to "step" by number
        // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
        // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
    }
}

module.exports = PixelReader;
