const EventEmitter = require('events');

module.exports = class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
  }

  read(buffer) {

    // Keep in mind that the loop will need to "step" by number
    // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
    // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
    for(let offset = 0; offset + this.bitsPerPixel < buffer.length; offset += this.bitsPerPixel) {
      const colors = {
        b: buffer.readUInt8(offset),
        g: buffer.readUInt8(offset + 8),
        r: buffer.readUInt8(offset + 16),
      };
      this.emit('color', { colors, offset });
    }
    this.emit('end');
  }
};
