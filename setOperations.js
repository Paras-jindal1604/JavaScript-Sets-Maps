
//*  .delete(value)  - deletes that value form set.

const set3 = new Set([1,2,3,4,5]);

set3.delete(5);
console.log(set3, set3.size);
// after deleting one element, the size of set is now 4.



//* The has() Method - returns true if a specified value exists in a set.

const set4 = new Set([1,9,11,22,"batman"]);

console.log(set4.has(9));
console.log(set4.has(123));
console.log(set4.has("batman"));



// ---------------------- Q-> check if a new user can use insta_id from a set.

const ig_id = new Set(["rohit.9","mohit_11","sonal_123","mohan-55"]);

let new_user = "rohit.9";

if(ig_id.has(new_user)){
    console.log("username already exist");
}else{
    console.log("you can use that username");
}




//*  .clear()  -  it clears all the elements from set.


const set5 = new Set([1,2,3]);
console.log(set5);

set5.clear();
console.log(set5);
// it returns an empty set




