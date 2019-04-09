const EventEmitter = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.pixelOffset = options.pixelOffset;
  }

  read(buffer) {
    for(let offset = 0; offset < buffer.length; offset += (this.bitsPerPixel / 8)) {
      const colors = {
        b: buffer.readUInt8(offset),
        g: buffer.readUInt8(offset + 1),
        r: buffer.readUInt8(offset + 2),
        offset: offset
      };
      this.emit('color', { colors, offset });
    }
    this.emit('end');
  }
}
module.exports = PixelReader;
