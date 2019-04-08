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
                b: buffer.readUInt8(i),
                g: buffer.readUInt8(i + 1),
                r: buffer.readUInt8(i + 2)
            };
            this.emit('color', bgrInHex);
        }
        this.emit('end');
    }
}

module.exports = PixelReader;
