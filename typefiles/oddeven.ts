"use strict";
/**
 * Checks whether provided integer is even or odd number
 * @param {num}
 */
var OddEven = (
    function () {

        function CheckForOddEven(num: number) {
            return {
                isValidNumber: function (): boolean {
                    return isNaN(num);
                },
                OddOrEven: function (): string {
                    return (num % 2 == 0 ? "even" : "odd");
                }
            };
        }
        return (num: number) => {
            if (num !== undefined) {
                if (! isNaN(num)) {
                    return CheckForOddEven(num);
                }

            }
            return CheckForOddEven(num);
        };

    })();