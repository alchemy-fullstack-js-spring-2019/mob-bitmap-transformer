const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });

    const colors = [];

    reader.on('color', pixel => {
      colors.push(pixel);
    });

    reader.on('end', () => {
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
      done();
    });

    const buffer = Buffer.alloc(3 * 3);
  
    for(let i = 0; i < buffer.length; i++) {
      buffer.writeUInt8((25 * i), i);
    }
  
    reader.read(buffer);
  });
});
