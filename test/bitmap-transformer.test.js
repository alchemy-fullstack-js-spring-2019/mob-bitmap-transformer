const fs = require('fs');
const { readFileSync } = require('fs');
const { BitmapTransform } = require('../lib/bitmap-transformer');
const { invert } = require('../lib/invert-transformer.js');

describe.skip('bitmap file transformer', () => {

  let buffer = null;
  beforeEach(() => {
    buffer = fs.readFileSync('./test/test-bitmap.bmp');
  });

  it('test whole transform', done => {
    const bitmap = new BitmapTransform(buffer);

    bitmap.transform(invert, err => {
      if(err) return done(err);
      const expected = readFileSync('./test/inverted-expected.bmp');
      expect(bitmap.buffer).toEqual(expected);
      done();
    });

  });
});
