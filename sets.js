
//? Set - A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.


//?  How to Create a Set

// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values


// method1

const set1 = new Set([10,20,30,40,30,20]);
console.log(set1);
// only unique values will be considered.

console.log(typeof set1);
// the typeof set is object as it created using new keyword.


// method2

const set2 = new Set();
set2.add(55);
set2.add(20);
set2.add(9);
set2.add("batman");
set2.add(55);

console.log(set2);
console.log(set2.size);
// .size returns the number of unique elements present in set.



//--------------------------------------------------------------------

//^ How to convert an array into set?

const aRr = [10,20,30,20,40,50,10];
const setA = new Set(aRr);

console.log(setA);
// simply pass that array into new Set(array)  because it expects an array to convert it into set.



//^ How to convert a set into array ?

const setB = new Set([11,22,55,44,33]);

let arR = [...setB];
console.log(arR);

// use spread operator with set name inside square bracket of array to convert set into array.



//^ How to create union of two sets ?

const setP = new Set([11,20,40,10,5]);
const setQ = new Set([20,80,11,90,1]);

const setU = new Set([...setP,...setQ]);
console.log(setU);
// spread operator takes out all elements from both sets and add them to union set.



//^ How to create intersection of two sets ?

const result = new Set([...setP].filter(num=>setQ.has(num)));

console.log(result);

// Approach
// 1. spread operator convert setP into array because filter applies on array
// 2. filter takes out each number from setP 
// 3. .has(number) check value taken out present in setQ
// 4. if value is present in setQ then it returns that value to result.



//^ To iterate over a set, use for-of loop and forEach

const setL = new Set([1,2,3,4,5,6]);

for(let i of setL){
    console.log(i);
}

setL.forEach(val => console.log(val));



