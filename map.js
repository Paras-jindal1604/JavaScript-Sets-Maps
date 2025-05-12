
//? Map - A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys. (keys should be unique)


//? You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()



const map1 = new Map();

map1.set(3,90);
map1.set(20,1);
map1.set("key", 99);
map1.set(5, "value");

// if we try to insert duplicate key, then it will update the value of original key.
map1.set(3,123);

console.log(map1);


// some common methods of map

//* to delete enter key inside -  .delete(key)

map1.delete(20);
console.log(map1);


//* .has(key) - returns true if a key is present in map

console.log(map1.has("key"));
console.log(map1.has(9));

//* .size - returns the size of map

console.log(map1.size);

//* .clear()  - clear all the values in map

map1.clear();
console.log(map1);






// method 2 - creating a map using new Map() method

//? The new Map() Method- You can create a Map by passing an 2D-Array to the new Map() constructor:


const map2 = new Map([
    ["apple",5],
    [3,90],
    ["batman","gotham"],
    [9,21]
]);

console.log(map2);

// how to iterate over a map - use for-of loop

for(let i of map2){
    console.log(i);
}
// it takes every element of 2D array and pushes it into i 

// to get key, value  differently then - 

for(let [key,value] of map2){
    console.log(key, value);
}

// destructure the array into for-of loop to get key and values seperately