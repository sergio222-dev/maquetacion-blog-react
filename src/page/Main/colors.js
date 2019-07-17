const tinycolors = require('tinycolor2');

const extraColorString = "rgba(255,255,255,0.5)";

const primary = "rgb(85,209,85)";
const primaryLighten = "rgb(224,243,224)";
const primaryDark = tinycolors(primary).darken().toRgbString();
const primaryGrey = tinycolors(primary).greyscale().toRgbString();

const extraColor = tinycolors(extraColorString).toRgbString();

module.exports = {
    primary,
    primaryDark,
    primaryGrey,
    primaryLighten,

    extraColor,

};
