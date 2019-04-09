const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');


module.exports = class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pixelReader = new PixelReader(this.header);

    const adjustedBuffer = this.buffer.slice(this.header.pixelOffset);

    pixelReader.on('color', pixel => {
      const newPixel = fn(pixel.colors);
      adjustedBuffer.writeUInt8(newPixel.b, pixel.offset);
      adjustedBuffer.writeUInt8(newPixel.g, pixel.offset + 1);
      adjustedBuffer.writeUInt8(newPixel.r, pixel.offset + 2);
    });

    pixelReader.once('end', () => {
      callback(null);
    });

    pixelReader.read(adjustedBuffer);
  }
};
