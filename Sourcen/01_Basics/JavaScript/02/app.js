// concepts: arrow function, callback

function calculate(nr1, nr2, operation, callback) {
    const result = operation(nr1, nr2);
    if (callback) {
        callback(result);
    }
    else {
        return result;
    }
}

// variant 1: concrete function
function operateSum(a, b) {
    return a + b;
}

function showResult(res) {
    console.log("Ergebnis : " + res);
}

calculate(
    1,
    3,
    operateSum,
    showResult
);

// variant 2: anonymous function
calculate(
    1,
    3,
    function(a, b) {
        return a + b;
    },
    function(res) {
        console.log("Ergebnis : " + res);
    }
);

// variant 3: arrow function
calculate(
    1,
    3,
    (a, b) => a + b,
    res => console.log("Ergebnis : " + res)
);

// const add = (x, y, z) => x + y + z;
// console.log(add(1, 2, 3));