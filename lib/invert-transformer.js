function invert(object) {

  const transformed = {
    r: (255 - object.r),
    g: (255 - object.g),
    b: (255 - object.b),
  };
  return transformed;
}

module.exports = {
  invert
};
