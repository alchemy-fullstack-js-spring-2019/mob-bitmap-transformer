const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

module.exports = class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pixReader = new PixelReader(this.header);
   
    const offsettedBuffer = this.buffer.slice(this.header.pixelOffset);

    pixReader.on('color', pixel => {
      const transformedPixel = fn(pixel.colors);
      offsettedBuffer.writeUInt8(transformedPixel.b, pixel.offset);
      offsettedBuffer.writeUInt8(transformedPixel.g, pixel.offset + 1);
      offsettedBuffer.writeUInt8(transformedPixel.r, pixel.offset + 2);
    });

    pixReader.once('end', () => {
      callback(null);
    });

    pixReader.read(offsettedBuffer);
  }
};
