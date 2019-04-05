const constants = require('./bitmap-constants');

class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readUInt32LE(constants.PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readUInt32LE(constants.BITS_PER_PIXEL);
        this.fileSize = buffer.readUInt32LE(constants.FILE_SIZE_OFFSET);
    }

}

module.exports = BitmapHeader;
