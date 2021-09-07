function calculate(nr1, nr2, operation) {
    const result = operation(nr1, nr2);
    return result;
}

// variant 1: concrete function
function operateSum(a, b) {
    return a + b;
}

const result1 = calculate(
    1,
    3,
    operateSum
);
console.log(result1);

const result2 = calculate(
    1,
    3,
    operateSum
);
console.log(result2);