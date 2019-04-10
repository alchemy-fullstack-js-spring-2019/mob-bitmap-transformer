function grayscale(colorValues) {
    const average = (colorValues.r + colorValues.g + colorValues.b) / 3;
    return {
        r: average,
        g: average,
        b: average
    };
}

module.exports = grayscale;
