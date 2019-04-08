function invert({ r, g, b }) {
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return { r, g, b };
}

module.exports = invert;




