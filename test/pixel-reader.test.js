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

    it('reads correct number of pixels from buffer', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });
        reader.on('color', pixelMockHandler);
        reader.once('end', () => {
            expect(pixelMockHandler).toBeCalledTimes(3);
            done();
        });
        reader.read(buff);
    });

    it('matches rgb values in buffer and read', done => {
        const reader = new PixelReader({ bitsPerPixel: 24 });
        const colors = [];
        reader.on('color', (color) => colors.push(color));
        reader.once('end', () => {
            const bufferColors = [];
            for(let i = 0; i + 3 <= buff.length; i += 3) {
                const bgrInHex = {
                    offset: i,
                    b: buff.readUInt8(i),
                    g: buff.readUInt8(i + 1),
                    r: buff.readUInt8(i + 2)
                };
                bufferColors.push(bgrInHex);
            }
            expect(colors).toEqual(bufferColors);
            done();
        });
        reader.read(buff);
    });

});
