const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
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
            expect(colors).toEqual(buffer?)

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
