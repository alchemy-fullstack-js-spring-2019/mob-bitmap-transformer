const { EventEmitter } = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.pixelOffset = options.pixelOffset;
  }

  read(buffer) {
    for(let i = 0; i < buffer.length - 1; i += (this.bitsPerPixel / 8)) {
      this.emit('color', { r: buffer.readUInt8(i), g: buffer.readUInt8(i + 1), b: buffer.readUInt8(i + 2) });
    }
    this.emit('end');
    // Keep in mind that the loop will need to "step" by number
    // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
    // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
  }
}

module.exports = PixelReader;
