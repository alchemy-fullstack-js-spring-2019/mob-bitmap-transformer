const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });

    const colors = [];

    // TODO: subscribe to reader "color" event and push into `colors` array.
    // A "color" object should look like:
    // {
    //     offset: <offset from the start of buffer passed to PixelReader>,
    //     r: <red color value>,
    //     g: <green color value>,
    //     b: <blue color value>,
    // }
    reader.on('color', pixel => {
      colors.push(pixel);
    });

    reader.on('end', () => {
      // write deepEqual assertion for colors versus the
      // expected rgb color objects
      // expect().toEqual()
      // expect(colors).toEqual({});
      expect(colors).toEqual([
        {
          'colors': {
            'b': 0,
            'g': 25,
            'r': 50,
          },
          'offset': 0,
        },
        {
          'colors': {
            'b': 75,
            'g': 100,
            'r': 125,
          },
          'offset': 3,
        },
        {
          'colors': {
            'b': 150,
            'g': 175,
            'r': 200,
          },
          'offset': 6,
        },

      ]);

      // Don't forget to call done()!
      done();
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(3 * 3); // for three pixels
    // TODO: fill buffer with byte values that match your
    // expected test colors
    for(let i = 0; i < buffer.length; i++) {
      buffer.writeUInt8((25 * i), i);
    }
    // Call read method with your buffer
    reader.read(buffer);
  });

});
