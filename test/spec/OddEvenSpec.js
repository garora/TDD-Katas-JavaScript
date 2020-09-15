describe("OddEvenCheck", function(){

    it("Number is odd", function () {
        expect('odd').toEqual(OddEven(1).OddOrEven());
        expect('odd').toEqual(OddEven(3).OddOrEven());
        expect('odd').toEqual(OddEven(5).OddOrEven());
    });

    it("Number is even", function () {
        expect('even').toEqual(OddEven(2).OddOrEven());
        expect('even').toEqual(OddEven(4).OddOrEven());
        expect('even').toEqual(OddEven(6).OddOrEven());
    });

});