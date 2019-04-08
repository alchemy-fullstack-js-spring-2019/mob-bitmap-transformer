const PixelReader = require('../lib/pixel-reader');
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
const pixelMockHandler = jest.fn();

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        console.log('createdBuffer', buff);
        const reader = new PixelReader({ bitsPerPixel: 24 });

        reader.on('color', pixelMockHandler);
        reader.once('end', () => {
            expect(pixelMockHandler).toBeCalledTimes(3);
            done();
        });
        reader.read(buff);

    });

});
