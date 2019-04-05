const constants = require('../lib/bitmap-constants');
// const buf = require('buffer');

class BitmapHeader {
  constructor(buf) {
    this.pixelOffset = buf.readUInt32LE(constants.PIXEL_OFFSET);
    this.bitsPerPixel = buf.readUInt16LE(constants.BITS_PER_PIXEL_OFFSET);
    this.fileSize = buf.readUInt16LE(constants.FILE_SIZE_OFFSET);
  }
}

module.exports = BitmapHeader;

