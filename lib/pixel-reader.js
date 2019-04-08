const { EventEmitter } = require('events');

class PixelReader extends EventEmitter {
    constructor(options) {
        super();
        this.bitsPerPixel = options.bitsPerPixel;
    }

    read(buffer) {

        for(let i = 0; i < buffer.length; i += 3) {
            let object = {};
            object.offset = i;
            object.r = buffer.readUInt8(i);
            object.g = buffer.readUInt8(i + 1);
            object.b = buffer.readUInt8(i + 2);
            this.emit('pixelRead', object);
        }
        this.emit('end');

        // Keep in mind that the loop will need to "step" by number
        // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
        // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
    }
}

module.exports = PixelReader;



