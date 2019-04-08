const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });

    const colors = [];

    reader.on('color', (color) => {
      colors.push(color);
    });
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
      expect(colors).toHaveLength(3);
      expect(colors[0]).toEqual({
        r: 255,
        g: 255,
        b: 255,
        offset: 0
      });
      expect(colors[1]).toEqual({
        r: 0,
        g: 0,
        b: 0, 
        offset: 3
      });
      expect(colors[2]).toEqual({
        r: 0x50,
        g: 0x50,
        b: 0x50,
        offset: 6
      });
      done();
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(9); 
    //pixel 1
    buffer.writeUInt8(0xFF, 0);
    buffer.writeUInt8(0xFF, 1);
    buffer.writeUInt8(0xFF, 2);
    //pixel 2
    buffer.writeUInt8(0x00, 3);
    buffer.writeUInt8(0x00, 4);
    buffer.writeUInt8(0x00, 5);
    //pixel 3
    buffer.writeUInt8(0x50, 6);
    buffer.writeUInt8(0x50, 7);
    buffer.writeUInt8(0x50, 8);
    // for three pixels
    // TODO: fill buffer with byte values that match your
    // expected test colors

    // Call read method with your buffer
    reader.read(buffer);
  });

});
