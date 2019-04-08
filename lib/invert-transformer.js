module.exports = function invert(obj) {
  return { 
    b: 255 - obj.b,
    g: 255 - obj.g, 
    r: 255 - obj.r 
  };
};
