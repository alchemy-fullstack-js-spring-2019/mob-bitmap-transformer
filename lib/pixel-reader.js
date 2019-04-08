const EventEmitter = require('events');

module.exports = class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
  }

  read(buffer) {
    for(let offset = 0; offset < buffer.length; offset += (this.bitsPerPixel / 8)) {
      const colors = {
        b: buffer.readUInt8(offset),
        g: buffer.readUInt8(offset + 1),
        r: buffer.readUInt8(offset + 2),
      };
      this.emit('color', { colors, offset });
    }
    this.emit('end');
  }
};
