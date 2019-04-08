const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {
  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24, pixelOffset: 10 });
    const colors = [];

    reader.on('color', data => {
      colors.push(data);
      // done();
    });

    reader.on('end', () => {
      expect(colors[0]).toEqual({ r: 255, g: 0, b: 0 });
      expect(colors[1]).toEqual({ r: 0, g: 255, b: 0 });
      expect(colors[2]).toEqual({ r: 0, g: 0, b: 255 });
      done();
    });

    const buffer = Buffer.alloc(9);
    buffer.writeUInt8(0xFF, 0);
    buffer.writeUInt8(0x00, 1);
    buffer.writeUInt8(0x00, 2);

    buffer.writeUInt8(0x00, 3);
    buffer.writeUInt8(0xFF, 4);
    buffer.writeUInt8(0x00, 5);

    buffer.writeUInt8(0x00, 6);
    buffer.writeUInt8(0x00, 7);
    buffer.writeUInt8(0xFF, 8);
    
    reader.read(buffer);

    // TODO: subscribe to reader "color" event and push into `colors` array.
    // A "color" object should look like:
    // {
    //     offset: <offset from the start of buffer passed to PixelReader>,
    //     r: <red color value>,
    //     g: <green color value>,
    //     b: <blue color value>,
    // }

    reader.on('end', () => {
      // write deepEqual assertion for colors versus the
      // expect().toEqual()
      // expected rgb color objects

      // Don't forget to call done()!
    });

    // Create a buffer with known data for your colors
    // const buffer = Buffer.alloc(24 * 3); // for three pixels
    // TODO: fill buffer with byte values that match your
    // expected test colors

    // Call read method with your buffer
    reader.read(buffer);
  });

});
