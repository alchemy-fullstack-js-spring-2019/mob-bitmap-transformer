const { BitmapHeader } = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pixelReader = new PixelReader({ bitsPerPixel: this.header.bitsPerPixel });
    const newBuffer = this.buffer.slice(this.header.pixelOffset);
    
    pixelReader.on('color', (buffcolor) => {
      newBuffer.writeUInt8(fn(buffcolor), buffcolor.offset);
      //this replaces as it loops;
    });
    
    this.buffer.writeUInt8(newBuffer, this.header.pixelOffset);
    
    pixelReader.on('end', callback);
    pixelReader.read(newBuffer);


  }
}

module.exports = {
  BitmapTransform
};
