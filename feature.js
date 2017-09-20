const pow = function (number) {
    if (!number) throw new Error('Custom error happened');

    return number * number;
};

exports.pow = pow;