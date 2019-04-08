const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    // this.offset = options.offset;
    // this.r = options.r;
    // this.g = options.g;
    // this.b = options.b;
  }

  read(buffer) {
    for(let i = 0; i < buffer.length; i += (this.bitsPerPixel / 8)) {
      let b = buffer.readUInt8(i);
      let g = buffer.readUInt8(i + 1);
      let r = buffer.readUInt8(i + 2);
      this.emit('color', { r, g, b, offset: i });
    }
    this.emit('end');
    // Keep in mind that the loop will need to "step" by number
    // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
    // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
  }
}
module.exports = PixelReader;
