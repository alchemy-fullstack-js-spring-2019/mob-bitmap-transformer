const { readFileSync } = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('bitmap file transformer', () => {
  let buffer = null;
  beforeEach(() => {
    buffer = readFileSync('./test/test-bitmap.bmp');
  });

  it('test whole transform', done => {
    const bitmap = new BitmapTransformer(buffer);

    bitmap.transform(invert, err => {
      if(err) return done(err);
      const expected = readFileSync('./test/inverted-expected.bmp');
      expect(bitmap.buffer).toEqual(expected);
      done();
    });
  });
});
