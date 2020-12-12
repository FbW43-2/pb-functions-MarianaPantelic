'use strict';

//1. Multiply

let x = 5;
let y = 7;

function multiply(num1, num2){
    return num1 * num2;
}

let result = multiply(x, y);
console.log(result);

let arrFunction = (x, y) => x * y;
console.log(arrFunction(x, y));
//Result: 35



//2. Exponent

function exponent(base, exp){
    let result = 1;
    for(let index = 1; index <= exp; index++){
        result *= base;
    }
return result;
}
result = exponent(x, y);
console.log(result);
//Result: 78125

/* function exponent(base, exp){
    let result;
    result = base ** exp;
    return result;
}
*/



//3. Add Up

function addUp(integer){
    let sum = 0;
    for(let Index = 1; Index < integer; Index++){
        sum += Index;
    }
    return sum + integer;
}
result = addUp(10);
console.log(result);
//Result: 55



//4. Cubed

function sumOfCubes(...x){
    let sum = 0;
    let cube = x => exponent(x, 3);
    for(let Index = 0; Index < x.length; Index++){
        sum += cube(x[Index]);
    }
    return sum;
}

result = sumOfCubes(1, 5, 9);
console.log(result);
//Result: 855



//5. String Check

function isStrStartOfWord(substr, word){
    return word.startsWith(substr, 0);
}

console.log(isStrStartOfWord("de", "development"));
//Result: true



//6. Less than or equal to Zero?

function isLEQZero(number){
    return number <= 0;
}
console.log(isLEQZero(-59));
//Result: true



//7. Count Occurrences

function countOccurrences(string, letter){
    let sum = 0;
    for(let Index = 0; Index < string.length; Index++){
        if(string.charAt(Index) === letter){
            sum += 1;
        }
    }
    return sum;
}
console.log(countOccurrences("this is a string" , "i"));
//Result: 3
