const EventEmitter = require('events');

module.exports = class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
    this.pixelOffset = options.pixelOffset;
  }
  
  read(buffer) {
    for(let i = 0; i < buffer.length; i += this.bitsPerPixel / 8) {
      this.emit('color', {
        offset: i,
        r:  buffer[i],
        g:  buffer[i + 1],
        b:  buffer[i + 2]
      });
    }
    this.emit('end', console.log('did it'));
  }
};
