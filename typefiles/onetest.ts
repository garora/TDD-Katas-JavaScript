export class WisheMe {
    msg: string;
    constructor(message: string) {
        this.msg = message;
    }

    wish(): string {
        return "Hi, " + this.msg;
    }
}
var wishMe = new WisheMe("Gaurav");
console.log(wishMe.msg);