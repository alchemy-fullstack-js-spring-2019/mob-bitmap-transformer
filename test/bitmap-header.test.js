const constants = require('../lib/bitmap-constants');
const BitmapHeader = require('../lib/bitmap-header');
const fs = require('fs');

describe('bitmap header', () => {

  let buffer = null;
  beforeEach(done => {
    // TODO: file read './test/test-bitmap.bmp' and put the promise return into buffer variable
    fs.readFile('./test/test-bitmap.bmp', (err, data) => {
      buffer = data;
      done();
    });
  });

  it('has correct specs', () => {
    expect(constants.PIXEL_OFFSET).toBeDefined();
    expect(constants.BITS_PER_PIXEL_OFFSET).toBeDefined();
    expect(constants.FILE_SIZE_OFFSET).toBeDefined();
  });

  it('parses header data', () => {
    // TODO: use the constants to populate the following properties
    // on the BitmapHeader in its constructor.
    // These test values are correct for the supplied test-bitmap.bmp
    const header = new BitmapHeader(buffer);
    expect(header.pixelOffset).toEqual(54);
    expect(header.bitsPerPixel).toEqual(24);
    expect(header.fileSize).toEqual(30054);
  });
});
