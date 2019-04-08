const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const buff = Buffer.alloc(9);
        buff.writeUInt8(0xFA, 0);
        buff.writeUInt8(0x50, 1);
        buff.writeUInt8(0x8B, 2);
        buff.writeUInt8(0xFF, 3);
        buff.writeUInt8(0xB8, 4);
        buff.writeUInt8(0xEE, 5);
        buff.writeUInt8(0x4C, 6);
        buff.writeUInt8(0x32, 7);
        buff.writeUInt8(0xDD, 8);
        const reader = new PixelReader({ bitsPerPixel: 24 });

        const colors = [];


        //we need to write pixels, pass them into the PixelReader, then we can use the read method to read things

        // TODO: subscribe to reader "color" event and push into `colors` array.
        reader.on('color', color => {
            colors.push(color);
        });
        // A "color" object should look like:
        // {
        //     offset: <offset from the start of buffer passed to PixelReader>,
        //     r: <red color value>,
        //     g: <green color value>,
        //     b: <blue color value>,
        // }

        reader.once('end', () => {
            // write 
            // expect().toEqual()
            // expected rgb color objects
            expect().toEqual()

            // Don't forget to call done()!
            done();
        });

        // Create a buffer with known data for your colors
        const buffer = Buffer.alloc(24 * 3); // for three pixels
        // TODO: fill buffer with byte values that match your
        // expected test colors

        // Call read method with your buffer
        reader.read(buffer);
    });

});
