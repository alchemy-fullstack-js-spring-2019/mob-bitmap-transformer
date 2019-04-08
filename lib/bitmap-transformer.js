const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pixelReader = new PixelReader(this.header);
    let slicedBuffer = this.buffer.slice(this.header.pixelOffset);
    pixelReader.on('color', data => {
      const transformedColorObject = fn(data);
      const redData = transformedColorObject.r;
      const greenData = transformedColorObject.g;
      const blueData = transformedColorObject.b;
      const pixelOffset = data.offset;
      slicedBuffer.writeUInt8(blueData, pixelOffset);
      slicedBuffer.writeUInt8(greenData, pixelOffset + 1);
      slicedBuffer.writeUInt8(redData, pixelOffset + 2);
    });
	
    pixelReader.on('end', callback);
		
    pixelReader.read(slicedBuffer);
  }
}

module.exports = BitmapTransformer;
