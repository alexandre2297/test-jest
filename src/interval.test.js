const Interval = require('./interval');

describe('overlaps', function() {
    test.each([
        [0, 10, 8, 12, true],
        [0, 5, -4, 3, true],
        [0, 5, 1, 3, true],
        [1, 3, 0, 5, true],
        [10, 15, 10, 15, true],
        [1, 10, -5, 15, true],
        [0, 10, 11, 12, false],
        [0, 10, -5, -1, false],
        [0, 10, 10, 15, false],
        [10, 10, 10, 10, false]
    ])
    ('overlaps between [s1,e1] [s2,e2] verify %i', (s1,e1,s2,e2 , expected) => {
        expect(new Interval(s1,e1).overlaps(new Interval(s2,e2))).toBe(expected);
    }
    );

});