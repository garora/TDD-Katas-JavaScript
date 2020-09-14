/**
 * Check if supplied integer is Even or Odd number
 * @param {Number} num 
 * @return {String}
 */
function oddEven(num) {
    if (isNaN(num))
        return 'Not a valid number.'

    return (number % 2 == 0) ? "even" : "odd";
}
module.oddEven = {oddEven};