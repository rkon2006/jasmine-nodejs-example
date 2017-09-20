const pow = require('../feature').pow;

describe('first', function () {
    it('should work', function () {
        expect(pow(3)).toBe(9);
    });

    it('should also work', function () {
        expect(pow).toThrowError();
    });
});
