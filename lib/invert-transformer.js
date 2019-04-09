module.exports = function invert(colors) {
  return {
    b: 255 - colors.b,
    g: 255 - colors.g,
    r: 255 - colors.r
  };
};




