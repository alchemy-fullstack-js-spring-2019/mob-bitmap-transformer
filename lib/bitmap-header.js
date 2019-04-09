const constants = require('./bitmap-constants');

class BitmapHeader {
  constructor(buffer) {
    this.pixelOffset = buffer.readUIntLE(constants.PIXEL_OFFSET, 4);
    this.bitsPerPixel = buffer.readUIntLE(constants.BITS_PER_PIXEL_OFFSET, 2); 
    this.fileSize = buffer.readUIntLE(constants.FILE_SIZE_OFFSET, 4);

  }

}

module.exports = {
  BitmapHeader
};
