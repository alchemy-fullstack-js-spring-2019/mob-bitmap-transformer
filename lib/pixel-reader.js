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
  }
}

module.exports = PixelReader;
