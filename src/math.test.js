const Util = require('./math');

describe('Factorial', function () {
    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])

    ('Factorial %i equals to %i', (n, expected) => {
            expect(Util.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow();
    });

});

describe('isPrime', function () {
    test.each([
        [3, true],
        [1, false],
        [53, true],
        [4, false],
        [56, false],
        [67, true],
        [0, false]
    ])

    ('isPrime %i verify %i', (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        },
    );

    test('isPrime of negative integers throws exception', () => {
        expect(()=> {Util.isPrime(-10)}).toThrow();
    });
});

describe('sumPrime', function() {
    test.each([
        [3, 5],
        [6, 10],
        [8, 17],
        [10, 17],
        [12, 28]
    ])
    ('sumPrime %i equals to %i', (n, expected) => {
        expect(Util.sumPrime(n)).toBe(expected);
    }
    );

    test('sumPrime of negative integers throws exception', () => {
        expect(()=> {Util.sumPrime(-10)}).toThrow();
    });

});

describe('s', function() {
    test.each([
        [15, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]],
        [8, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, ]]
    ])
    ('fizzBuzz %i equals to %i', (n, expected) => {
        expect(Util.fizzBuzz(n)).toEqual(expected);
    }
    );

    test('fizzBuzz of negative integers throws exception', () => {
        expect(()=> {Util.fizzBuzz(-10)}).toThrow();
    });

});

describe('cipher', function() {
    test.each([
        ["test z", "uftu a"]
    ])
    ('cipher %i equals to %i', (n, expected) => {
        expect(Util.cipher(n)).toBe(expected);
    }
    );

});

