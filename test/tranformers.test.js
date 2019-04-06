const { invert } = require('../lib/invert-transformer');
const { grayscale } = require('../lib/grayscale-transformer');
const { paintitblack } = require('../lib/death-transformer');

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
      r: 113,
      g: 113,
      b: 113
    });
  });

  it('PAINTITBLACK', () => {
    // HINT: grayscale assigns the average of all three colors
    // as the new value for each color
    const transformed = paintitblack({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 0,
      g: 0,
      b: 0
    });
  });

  // TODO: add a third transformer (you'll need to add the module and require!) and test
});
