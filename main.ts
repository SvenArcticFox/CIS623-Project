import foldl from "./foldl";
import foldr from "./foldr";

// test lists (arrays)
const testArr1: number[] = [1,2,3,4,5,6,7,8,9];
const testArr2: string = "abcdefgh";

console.log(`Test number arry: ${testArr1}`);
console.log(`Test string (character array): ${testArr2}`);
console.log(''); // add new line

// functions
function add(i: number, j: number): number {
    return i + j;
}

function multiply(i: number, j: number): number {
    return i + j;
}

const addedNumbersFoldr = foldr(add, testArr1, 0);
console.log(`Addition of added numbers using foldr: ${addedNumbersFoldr}`);

const addedNumberFoldl = foldl(add, testArr1, 0);
console.log(`Addition of added numbers using foldl: ${addedNumberFoldl}`);