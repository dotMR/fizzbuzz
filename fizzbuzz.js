'use strict'

var ask = require('ask');
var userPrompt = 'How high would you like to count?';

function parseBase10(s) {
    return parseInt(s, 10);
}

function countTo(num) {
    var end = parseBase10(num);

    if (!end) {
        console.log('Please provide a valid integer to count to');
        promptUser();
        return;
    }

    for (var n=1;n<end;n++) {
        var divByThree = (n % 3 == 0);
        var divByFive = (n % 5 == 0);

        var result = '';
        if (divByThree) {
            result = result.concat('Fizz');
        }
        if (divByFive) {
            result = result.concat('Buzz');
        }
        if (!result) {
            result = n;
        }
        console.log(result);
    }
}

function promptUser() {
    ask(userPrompt, countTo);
}

promptUser();