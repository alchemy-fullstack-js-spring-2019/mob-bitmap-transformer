const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');
// const grayscale = require('../lib/grayscale-transformer');
// const scaleRed = require('../lib/scale-red-transform');



describe('bitmap file transformer', () => {

  let buffer = null;

  beforeEach(() => {
    buffer = fs.readFileSync('./test/test-bitmap.bmp');
  });

  // "pinning" test, or "snapshot" test
  it('test whole transform', done => {
    const bitmap = new BitmapTransformer(buffer);

    // Call .transform(), which will modify the buffer.
    // With this api, you pass in a transformation function (we are testing with "invert")
    bitmap.transform(invert, err => {
      if(err) return done(err);
      const expected = fs.readFileSync('./test/inverted-expected.bmp');
      expect(bitmap.buffer).toEqual(expected);
      done();
    });
    
  });
});


      // If you don't have a standard file yet, or need to update or are adding new test,
      // you can write it out by commenting above code block, and uncomment code below
      // that writes the file and then visually inspect the file for correctness.
      // return fs.writeFileSync('./test/inverted-expected.bmp', bitmap.buffer);
