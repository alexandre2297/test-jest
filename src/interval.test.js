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

describe('includes', function() {
    test.each([
        [0, 10, 8, 12, false],
        [0, 5, -4, 3, false],
        [0, 5, 1, 3, true],
        [1, 3, 0, 5, false],
        [10, 15, 10, 15, true],
        [1, 10, -5, 15, false],
        [0, 10, 11, 12, false],
        [0, 10, -5, -1, false],
        [0, 10, 10, 15, false],
        [10, 10, 10, 10, true]
    ])
    ('[%i,%i] includes [%i,%i] verify %p', (s1,e1,s2,e2 , expected) => {
        expect(new Interval(s1,e1).includes(new Interval(s2,e2))).toBe(expected);
    }
    );

});

describe('Union', function() {
    test.each([
        [0, 10, 8, 12, [new Interval(0,12)]],
        [0, 5, -4, 3, [new Interval(-4,5)]],
        [0, 5, 1, 3, [new Interval(0,5)]],
        [1, 3, 0, 5, [new Interval(0,5)]],
        [10, 15, 10, 15, [new Interval(10,15)]],
        [1, 10, -5, 15, [new Interval(-5,15)]],
        [0, 10, 11, 12, [new Interval(11,12),new Interval(0,10)]],
        [0, 10, -5, -1, [new Interval(-5,-1), new Interval(0,10)]],
        [0, 10, 10, 15, [new Interval(0,15)]],
        [10, 10, 10, 10, [new Interval(10,10)]]
    ])
    ('Union between [%i,%i] and [%i,%i] verify %p', (s1,e1,s2,e2 , expected) => {
        expect(new Interval(s1,e1).union(new Interval(s2,e2))).toEqual(expected);
    }
    );

});