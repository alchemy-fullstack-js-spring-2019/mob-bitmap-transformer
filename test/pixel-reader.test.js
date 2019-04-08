const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });

        // Create a buffer with known data for your colors
        const buffer = Buffer.alloc(9); // for three pixels
        // TODO: fill buffer with byte values that match your
        // expected test colors
        //#4286f4
        buffer.writeUInt8(0x42, 0);
        buffer.writeUInt8(0x86, 1);
        buffer.writeUInt8(0xf4, 2); 
        //#f442c5
        buffer.writeUInt8(0xf4, 3);
        buffer.writeUInt8(0x42, 4);
        buffer.writeUInt8(0xc5, 5);
        //#ebf441
        buffer.writeUInt8(0xeb, 6);
        buffer.writeUInt8(0xf4, 7);
        buffer.writeUInt8(0x41, 8); 
        
        const expectedArray = [
            {
                b: 244,
                r: 66,
                g: 134
            },
            {
                b: 67,
                r: 244,
                g: 196
            },
            {
                b: 65,
                r: 235,
                g: 244
            }
        ];

        
        //<Buffer 42 86 f4 f4 42 c5 eb f4 41>

        const colors = [];
        reader.on('pixelRead', object => {
            colors.push(object);
        });

        // // TODO: subscribe to reader "color" event and push into `colors` array.
        // // A "color" object should look like:
        // // {
        // //     offset: <offset from the start of buffer passed to PixelReader>,
        // //     r: <red color value>,
        // //     g: <green color value>,
        // //     b: <blue color value>,
        // // }

        reader.on('end', () => {
            expect(colors).toEqual(expectedArray);

            //     // write deepEqual assertion for colors versus the
            //     // expect().toEqual()
            //     // expected rgb color objects

            //     // Don't forget to call done()!
       
            done();
        });

        reader.read(buffer);
    
        // // Call read method with your buffer
    });

});
