function bluescale({ r, g, b }) {
  let newR = r * 0.5;
  let newG = g * 0.5;
  let newB = b;
  return { newR, newG, newB };
}

module.exports = bluescale;
