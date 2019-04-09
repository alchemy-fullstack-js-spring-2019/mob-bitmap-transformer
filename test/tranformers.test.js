const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-luminosity-transformer');
const bluescale = require('../lib/bluescale');

describe('transformers', () => {

  it('invert', () => {
    const transformed = invert({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 221,
      g: 155,
      b: 50
    });
  });

  it('grayscale', () => {
    const transformed = grayscale({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 7.14,
      g: 72,
      b: 14.350000000000001
    });
  });

  it('bluescale', () => {
    const transformed = bluescale({
      r: 34,
      g: 100,
      b: 205
    });
    expect(transformed).toEqual({
      newR: 17,
      newG: 50,
      newB: 205
    });
  });
});
