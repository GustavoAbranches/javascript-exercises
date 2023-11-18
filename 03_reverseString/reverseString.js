const reverseString = function(str) {
    return str.split('').reverse().join('')
};

const strInput = 'Hello'
const stringResult = reverseString(strInput)

console.log(strInput)

// Do not edit below this line
module.exports = reverseString;
