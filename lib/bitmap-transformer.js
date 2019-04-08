const BitmapHeader = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransform {
    constructor(buffer) {
        this.buffer = buffer;
        this.header = new BitmapHeader(buffer);
    }

    transform(fn, callback) {
        // this is a guide to what needs to happen, not a recipe
        const loopOffset = this.header.pixelOffset;
        // you have access to the data you need:
        // this.buffer
        // this.header.pixelOffset
        // this.header.bitsPerPixel
        // this.header.fileSize (not technically needed)

        // 1. Create a PixelReader and subscribe to "color" and "end" events
        const reader = new PixelReader(this.header);
        // 2. Find the right place (offset) in the buffer from which to start your loop.
        const buffer = this.buffer.slice(loopOffset);
        //      HINT: use buffer.slice(offset) to create a "zero" based buffer you can pass to PixelReader
        // 3. On the "color" event,
        reader.on('color', color => {
            buffer[color.offset] = fn(color).b;
            buffer[color.offset + 1] = fn(color).g;
            buffer[color.offset + 2] = fn(color).r;
        });
        transform.emit('end');
        //      a. run the evented color through the supplied transform function `fn` to get the new color
        //      b. write the new color values to the buffer using the `offset` property
        //         of the color. Remember to write to the "sliced" buffer!
        // 4. On the "end" event - Call the callback to indicate the transform is complete
        // 5. Call the "read" method passing in the sliced buffer


    }
}
