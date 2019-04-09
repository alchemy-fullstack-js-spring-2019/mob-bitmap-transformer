const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24, pixelOffset: 10 });
    const colors = [];

    reader.on('color', color => {
      colors.push(color);
    });

    reader.on('end', () => {
      expect(colors).toHaveLength(3);
      expect(colors[0]).toEqual({
        colors: {
          r: 255,
          g: 0,
          b: 0,
          offset: 0
        },
        offset: 0
      });
      // expect(colors[1]).toEqual({
      //   colors: {
      //     r: 0,
      //     g: 255,
      //     b: 0, 
      //   },
      //   offset: 3
      // });
      // expect(colors[2]).toEqual({
      //   r: 0,
      //   g: 0,
      //   b: 255,
      //   offset: 6
      // });
      done();
    });

    const buffer = Buffer.alloc(9); 
    buffer.writeUInt8(0x00, 0);
    buffer.writeUInt8(0x00, 1);
    buffer.writeUInt8(0xFF, 2);
    buffer.writeUInt8(0xFF, 3);
    buffer.writeUInt8(0x00, 4);
    buffer.writeUInt8(0xFF, 5);
    buffer.writeUInt8(0x00, 6);
    buffer.writeUInt8(0x00, 7);
    buffer.writeUInt8(0xFF, 8);

    reader.read(buffer);
  });

});
