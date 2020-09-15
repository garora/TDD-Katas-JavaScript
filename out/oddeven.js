"use strict";
/**
 * Checks whether provided integer is even or odd number
 * @param {num}
 */
var OddEven = (function () {
    function CheckForOddEven(num) {
        return {
            isValidNumber: function () {
                return isNaN(num);
            },
            OddOrEven: function () {
                return (num % 2 == 0 ? "even" : "odd");
            }
        };
    }
    return (num) => {
        if (num !== undefined) {
            if (!isNaN(num)) {
                return CheckForOddEven(num);
            }
        }
        return CheckForOddEven(num);
    };
})();
//# sourceMappingURL=oddeven.js.map