let Util = {};
Util.factorial = (n) => {
    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }
    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }
    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }
    if (0 === n) {
        return 1;
    }
    return n * Util.factorial(n - 1);

};
Util.isPrime = function(n) {
    if (n < 0) {
        throw 'Unable to compute isPrime for n < 0'
    }
    for(var i = 2; i <= (n/2); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return n > 1;
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    if (n < 0) {
        throw 'Unable to compute sumPrime for n < 0'
    }
    var sum = 0;
    for(var i = 2; i <= n; i++) {
        if(Util.isPrime(i)) {
            sum = sum + i;
        }
    }
    return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    if (n < 0) {
        throw 'Unable to compute fizzBuzz for n < 0'
    }
    var res = [];    
    for(var i = 1; i<=n ; i++) {
        var lastElem = "";
        if( i%3 == 0 ) {
            lastElem+="Fizz";            
        } 
        if( i%5 == 0) {
            lastElem+="Buzz";
        }
        if(lastElem == "") {
            lastElem=i;
        }
        res.push(lastElem);
    }
    return res;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    var sentence = "";
    for(var i =0; i < phrase.length; i++) {
        var letter = phrase.charAt(i);
        if(letter.search(/[Z,z]/) !== -1) {
            sentence += String.fromCharCode((phrase.charCodeAt(i)-25));
        }
        else if (letter.search(/[a-zA-Z]/) !== -1) {
            sentence += String.fromCharCode((phrase.charCodeAt(i)+1));
        } else {
            sentence += letter;
        }
    }    
    return sentence;

};


module.exports = Util;

