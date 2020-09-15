"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WisheMe = void 0;
class WisheMe {
    constructor(message) {
        this.msg = message;
    }
    wish() {
        return "Hi, " + this.msg;
    }
}
exports.WisheMe = WisheMe;
var wishMe = new WisheMe("Gaurav");
console.log(wishMe.msg);
//# sourceMappingURL=onetest.js.map