// concepts: let, const, object literal, template string, multi-line string

function calculate(nr1, nr2) {
    let sum = nr1 + nr2;
    return {
        sum,    // short for "sum: sum"
        avg: sum / 2
    };
}

const result = calculate(1, 3);
console.log(
`Summe: ${result.sum}
Durchschnitt: ${result.avg}`
);