function invert(colorValues) {
    return {
        r: 255 - colorValues.r,
        g: 255 - colorValues.g,
        b: 255 - colorValues.b
    };
}
module.exports = invert;
