// const PixelReader = require('../lib/pixel-reader');

// describe('Pixel Reader', () => {
//   it('reads pixel from buffer', done => {
//     const reader = new PixelReader({ bitsPerPixel: 24 });
//     const colors = [];
//     reader.on('color', color => {
//       colors.push(color);
//     });

//     reader.on('end', () => {
//       expect(colors[0].toEqual({ r: 255, g: 0, b: 0 }));
//       expect(colors[1].toEqual({ r: 0, g: 255, b: 0 }));
//       expect(colors[2].toEqual({ r: 0, g: 0, b: 255 }));
//       done();
//     });

//     const buffer = Buffer.alloc(9);
    
//     buffer.writeUInt8(0, 0);
//     buffer.writeUInt8(0, 1);
//     buffer.writeUInt8(255, 2);

//     buffer.writeUInt8(0, 3);
//     buffer.writeUInt8(255, 4);
//     buffer.writeUInt8(0, 5);

//     buffer.writeUInt8(255, 6);
//     buffer.writeUInt8(0, 7);
//     buffer.writeUInt8(0, 8);

//     reader.read(buffer);
//   });
// });
