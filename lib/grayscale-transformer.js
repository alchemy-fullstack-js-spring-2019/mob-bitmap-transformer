function grayscale(object) {

  let average = ((
    object.r + object.b + object.g 
  ) / 3);

  const transformed = {
    r: average,
    g: average,
    b: average, 
  };
  return transformed;
}

module.exports = {
  grayscale
};
