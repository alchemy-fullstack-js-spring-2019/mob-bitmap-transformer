const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

module.exports = class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    // this is a guide to what needs to happen, not a recipe
    // you have access to the data you need:
    // this.buffer
    // this.header.pixelOffset
    // this.header.bitsPerPixel
    // this.header.fileSize (not technically needed)
    
    // 1. Create a PixelReader and subscribe to "color" and "end" events
    const pixReader = new PixelReader(this.header);
   
    // 2. Find the right place (offset) in the buffer from which to start your loop.
    //      HINT: use buffer.slice(offset) to create a "zero" based buffer you can pass to PixelReader
    const offsettedBuffer = this.buffer.slice(this.header.pixelOffset);

    // 3. On the "color" event,
    pixReader.on('color', pixel => {
    //      a. run the evented color through the supplied transform function `fn` to get the new color
    //      b. write the new color values to the buffer using the `offset` property
    //         of the color. Remember to write to the "sliced" buffer!
      const transformedPixel = fn(pixel.colors);
      offsettedBuffer.writeUInt8(transformedPixel.b, pixel.offset);
      offsettedBuffer.writeUInt8(transformedPixel.g, pixel.offset + 1);
      offsettedBuffer.writeUInt8(transformedPixel.r, pixel.offset + 2);
    });

    // 4. On the "end" event - Call the callback to indicate the transform is complete
    pixReader.once('end', () => {
      callback(null);
    });
    // 5. Call the "read" method passing in the sliced buffer
    pixReader.read(offsettedBuffer);


  }
};
