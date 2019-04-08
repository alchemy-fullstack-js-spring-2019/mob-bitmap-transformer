const { EventEmitter } = require('events');

class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.pixelOffset = options.pixelOffset;
  }

  read(buffer) {
    for(let i = 0; i < buffer.length - 1; i += (this.bitsPerPixel / 8)) {
      this.emit('color', {  
        b: buffer.readUInt8(i), 
        g: buffer.readUInt8(i + 1), 
        r: buffer.readUInt8(i + 2),
        offset: i
      });
    }
    this.emit('end');
  }
}

module.exports = PixelReader;
