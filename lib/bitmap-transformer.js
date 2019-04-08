const fs = require('fs');
const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransformer {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    // you have access to the data you need:
    // this.buffer
    // this.header.pixelOffset
    // this.header.bitsPerPixel
    // this.header.fileSize (not technically needed)

    // 1. Create a PixelReader and subscribe to "color" and "end" events
    const pixelReader = new PixelReader(this.header);
    // 2. Find the right place (offset) in the buffer from which to start your loop.
    //      HINT: use buffer.slice(offset) to create a "zero" based buffer you can pass to PixelReader
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
    // 3. On the "color" event,
    //      a. run the evented color through the supplied transform function `fn` to get the new color
    //      b. write the new color values to the buffer using the `offset` property
    //         of the color. Remember to write to the "sliced" buffer!
    // 4. On the "end" event - Call the callback to indicate the transform is complete
		pixelReader.on('end', callback);
		
		pixelReader.read(slicedBuffer);
    // 5. Call the "read" method passing in the sliced buffer

  }
}

module.exports = BitmapTransformer;
