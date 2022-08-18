"use strict";

function summarize(...numbers) {
    let validNumbers = numbers.filter((elem) => Number.isInteger(elem));
    validNumbers = validNumbers.map((x) => BigInt(x));
    let result = validNumbers.reduce((a, b) => a + b);

    return result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER
        ? result
        : Number(result);
}

export default summarize;




// export default summarize;

