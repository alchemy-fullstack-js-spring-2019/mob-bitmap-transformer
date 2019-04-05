const { PIXEL_OFFSET, BITS_PER_PIXEL_OFFSET, FILE_SIZE_OFFSET } = require('./bitmap-constants');

class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readInt32LE(PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readInt16LE(BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
    }
}

module.exports = BitmapHeader;
