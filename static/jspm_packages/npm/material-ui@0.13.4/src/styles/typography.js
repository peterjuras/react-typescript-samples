/* */ 
let Colors = require('./colors');
class Typography {
  constructor() {
    this.textFullBlack = Colors.fullBlack;
    this.textDarkBlack = Colors.darkBlack;
    this.textLightBlack = Colors.lightBlack;
    this.textMinBlack = Colors.minBlack;
    this.textFullWhite = Colors.fullWhite;
    this.textDarkWhite = Colors.darkWhite;
    this.textLightWhite = Colors.lightWhite;
    this.fontWeightLight = 300;
    this.fontWeightNormal = 400;
    this.fontWeightMedium = 500;
    this.fontStyleButtonFontSize = 14;
  }
}
module.exports = new Typography();
