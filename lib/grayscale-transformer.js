function grayscale(obj) {
  const objAverage = (obj.r + obj.g + obj.b) / 3;
  const grayscaleObj = {
    r: objAverage,
    g: objAverage,
    b: objAverage
  };
  return grayscaleObj;
}

module.exports = grayscale;
