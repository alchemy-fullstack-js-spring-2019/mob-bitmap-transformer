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
      const newPixel = fn(buffcolor);
      newBuffer.writeUInt8(newPixel.r, buffcolor.offset);
      newBuffer.writeUInt8(newPixel.g, buffcolor.offset + 1);
      newBuffer.writeUInt8(newPixel.b, buffcolor.offset + 2);
    });
    
    this.buffer.writeUInt8(newBuffer, this.header.pixelOffset);
    
    pixelReader.on('end', callback);
    pixelReader.read(newBuffer);
  }
}

module.exports = {
  BitmapTransform
};
