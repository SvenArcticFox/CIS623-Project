import foldl from "./foldl";
import foldr from "./foldr";

// test lists (arrays)
const testArr1: number[] = [1,2,3,4,5,6,7,8,9];
const testArr2: string[] = "abcdefghijklmnopqrstuvwxyz".split('');

console.log(`Test number arry: ${testArr1}`);
console.log(`Test string (character array): ${testArr2}`);
console.log(''); // add new line

// functions
function add(i: number, j: number): number {
    return i + j;
}

function multiply(i: number, j: number): number {
    return i * j;
}

const addedNumbersFoldr = foldr<number, number>(add, testArr1, 0);
console.log(`Addition of numbers using foldr: ${addedNumbersFoldr}`);

const addedNumberFoldl = foldl<number, number>(add, testArr1, 0);
console.log(`Addition of numbers using foldl: ${addedNumberFoldl}`);

const multipliedNumbersFoldr = foldr<number, number>(multiply, testArr1, 1);
console.log(`Multiplication of numbers using foldr: ${multipliedNumbersFoldr}`);

const multipliedNumbersFoldl = foldl<number, number>(multiply, testArr1, 1);
console.log(`Multiplicaion of numbers using foldl: ${multipliedNumbersFoldl}`);

// reverse functions
const reverseFoldr = <t>(arr: Array<t>): Array<t> => {
    return foldr<t, Array<t>>((value: t, accumulator: Array<t>): Array<t> => {
        const acc = accumulator.slice();
        acc.push(value);
        return acc;
    }, arr, new Array<t>);
};

const reverseArrFoldr = reverseFoldr<number>(testArr1);
console.log(`Reverse numbers using foldr: ${reverseArrFoldr}`);

const reversArr2Foldr = reverseFoldr<string>(testArr2);
console.log(`Reverse char array (string) using foldr: ${reversArr2Foldr}`);

const reverseFoldl = <t>(arr: Array<t>): Array<t> => {
    return foldl<t, Array<t>>((value: t, accumulator: Array<t>): Array<t> => {
        const acc = accumulator.slice();
        acc.unshift(value);
        return acc;
    }, arr, new Array<t>);
};

const reversArrFoldl = reverseFoldl<number>(testArr1);
console.log(`Reverse numbers using foldl: ${reversArrFoldl}`);

const reversArr2Foldl = reverseFoldl<string>(testArr2);
console.log(`Reverse char array (string) using foldl: ${reversArr2Foldl}`);

console.log('');