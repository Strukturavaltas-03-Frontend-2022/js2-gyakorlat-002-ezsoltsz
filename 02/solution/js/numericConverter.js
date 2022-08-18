"use strict";


function numericConverter(num) {
    const result = {
        binary: num.toString(2),
        octal: num.toString(8),
        hexa: num.toString(16),
    };
    return result;
}

export default numericConverter;
