"use strict";
var OddEven = (
    function () {
        function CheckForOddEven(num) {
            return {
                OddOrEven: function () {
                    return (num % 2 == 0 ? 'even' : 'odd');
                }
            };
        }
        return function (num) {
            if (num !== undefined) {
                if (num instanceof Number) {
                    return CheckForOddEven(num);
                }
            }
            return CheckForOddEven(num);
        };

    })();