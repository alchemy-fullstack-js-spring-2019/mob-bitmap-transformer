const PixelReader = require('../lib/pixel-reader');
// const fs = require('fs');

describe('Pixel Reader', () => {
  
  it('reads pixel from buffer', () => {
    const reader = new PixelReader({ bitsPerPixel: 24 });
    // fs.readFile('./test/test-bitmap.bmp', (err, data) => {
    //   if(err) throw err;
    //   let buffer = data;
    //   done();
    // });
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
      // write deepEqual assertion for colors versus the
      // expect().toEqual()
      // expected rgb color objects

      // Don't forget to call done()!
    });

    // Create a buffer with known data for your colors
    const buffer = Buffer.alloc(3 * 3); 
    const ourcolors = [0xFF, 255, 255, 255, 255, 255, 255, 255, 255];
    
    for(let i = 0; i < ourcolors.length; i++){
      buffer.writeUInt8(ourcolors[i], i);
    }
    console.log(buffer);
    reader.read(buffer);
  });

});
