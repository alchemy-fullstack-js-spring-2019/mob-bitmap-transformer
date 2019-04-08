const EventEmitter = require('events');

module.exports = class PixelReader extends EventEmitter {
  constructor(options) {
    super();
    this.bitsPerPixel = options.bitsPerPixel;
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

  // Keep in mind that the loop will need to "step" by number
  // of bytes based on this.bitsPerPixel (aka i steps by something other than 1).
  // Then inside the loop you can use i, i + 1, and i + 2 to get r, g, b for example
  
};
