function grayscale(obj) {
  const objAverage = (obj.r + obj.g + obj.b) / 3;
  const grayscaleObj = {
    r: objAverage,
    g: objAverage,
    b: objAverage
  };
  return grayscaleObj;
}

function redscale(obj) {
  const redObj = (255 - obj.r) + obj.r;
  const redscaleObj = {
    r: redObj,
    g: obj.g,
    b: obj.b
  };
  return redscaleObj; 
}

module.exports = { grayscale, redscale };
