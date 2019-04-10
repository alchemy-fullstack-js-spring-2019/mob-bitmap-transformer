function bluescale(colorValues) {
    let newBlue = colorValues.b * 2;
    if(newBlue > 255) newBlue = 255;
    return {
        r: colorValues.r / 2,
        g: colorValues.g / 2, 
        b: newBlue
    };
}

module.exports = bluescale;
