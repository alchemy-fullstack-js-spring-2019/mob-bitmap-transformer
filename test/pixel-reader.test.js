const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {
  
  it('reads pixel from buffer', done => {
    const reader = new PixelReader({ bitsPerPixel: 24 });
    reader.on('color', (buffedColors) => {
      colors.push(buffedColors);
    });    
    const colors = [];

    reader.on('end', () => {
      expect(colors).toEqual([
        {
          offset: 0,
          r:  255,
          g:  255,
          b:  255
        },
        {
          offset: 3,
          r:  255,
          g:  255,
          b:  255
        },
        {
          offset: 6,
          r:  255,
          g:  255,
          b:  255
        }

      ]);
      done();
    });

    const buffer = Buffer.alloc(3 * 3); 
    const ourcolors = [0xFF, 255, 255, 255, 255, 255, 255, 255, 255];
    
    for(let i = 0; i < ourcolors.length; i++){
      buffer.writeUInt8(ourcolors[i], i);
    }
    reader.read(buffer);
  });

});
