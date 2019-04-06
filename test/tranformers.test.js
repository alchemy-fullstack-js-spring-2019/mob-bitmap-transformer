const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-luminosity-transformer');

describe('transformers', () => {

  it('invert', () => {
    // HINT: invert subtracts each value from 255
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
    // HINT: grayscale assigns the average of all three colors
    // as the new value for each color
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

  // TODO: add a third transformer (you'll need to add the module and require!) and test
});
