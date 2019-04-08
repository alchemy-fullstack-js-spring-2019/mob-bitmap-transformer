module.exports = function scaleRed(obj) {
  const avg = (obj.r + obj.g + obj.b) / 3;
  
  return {
    r: avg,
    g: obj.g,
    b: obj.b
  };
};
