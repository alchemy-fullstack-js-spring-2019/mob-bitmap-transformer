module.exports = function grayscale(colors) {
  const sum = Object.values(colors).reduce((acc, cur) => acc + cur);
  const gray = Math.round(sum / 3);
  return {
    b: gray,
    g: gray,
    r: gray
  };
};
