function grayscale({ r, g, b }) {
  r = r * .21;
  g = g * .72;
  b = b * .07;
  return { r, g, b };
}

module.exports = grayscale;
