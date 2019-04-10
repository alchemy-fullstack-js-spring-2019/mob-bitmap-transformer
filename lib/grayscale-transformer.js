function greyScale(object) {
    const average = (object.r + object.g + object.b) / 3;
    object.r = average;
    object.g = average;
    object.b = average;
    return object;
}

module.exports = greyScale;
