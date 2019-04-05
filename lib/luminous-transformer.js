function luminous(object) {
    const lum = (0.21 * object.r) + (0.72 * object.g) + (0.07 * object.b);
    object.r = lum;
    object.g = lum;
    object.b = lum;
    return object;
}

module.exports = luminous;
