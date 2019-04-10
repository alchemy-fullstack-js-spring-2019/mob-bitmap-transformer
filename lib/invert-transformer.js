function invert(obj){
  const invertedObj = {
    r: 255 - obj.r,
    g: 255 - obj.g,
    b: 255 - obj.b
  };
  return invertedObj;
}
module.exports = invert;
