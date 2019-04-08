const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {
  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24, pixelOffset: 10 });
    const colors = [];

    reader.on('color', data => {
      colors.push(data);
    });

    reader.on('end', () => {
      expect(colors[0]).toEqual({ b: 255, g: 0, r: 0, offset: 0 });
      expect(colors[1]).toEqual({ b: 0, g: 255, r: 0, offset: 3 });
      expect(colors[2]).toEqual({ b: 0, g: 0, r: 255, offset: 6 });
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
  });
});
