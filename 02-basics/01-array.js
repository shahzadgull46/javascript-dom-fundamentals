let arr = [1, 2, 3, 4, 5, 6];
// index 0,1,2,3,4,5
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5])

//   Strings are immutable mean we can not change it.But
//   Arrays are mutable
//  The type of Array is Object. we can check it by using typeof keyword.

// console.log(arr[4]=444)

//    Array methods
// 1.to string
// It is used to convert the array into the string
console.log(arr.toString());

// 2. Join mehtod
// In this type we can join array elements according to our choice like we can use anything else instead of commas
// join also changes the type -> string
// console.log(arr.join(" And "))

// 3. Pop mehtod
// It returns the popped  element mean the last one(In this case 6 is popped element)
//  And the last element will be disappear from the array elements
// console.log(arr.pop())
// console.log(arr)

// 4.Push method(imp method)
//   We can write anything in the array elements which is created
// It also returns the total length
// console.log(arr.push(666))
// console.log(arr)

// 5. Shift mehtod
//  It returns the first element & the first element will be disappear from the array elements
// console.log(arr.shift())
// console.log(arr)

// 6. Unshift method
// It adds(anything) in the beggning of the array
// console.log(arr.unshift("Blacky"))
// console.log(arr)

// Shift Brohter of Pop
// unshift brother of push

// 7. delete method
//   It is used to delete the array element
//   The deleted array element occupies the space but does not show on the screen
// delete arr[5]
// console.log(arr[5])
// It shows undefined but the memory is allocated to the deleted array element

// 8.concat method
//   It is used to link the array elements or arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 6, 4];
console.log(a1.concat(a2, a3));
// It does not change the existing method

// 9. Sort method

// 10. Splice mehtod
//   It is used to insert or eject the elements from one position
let numbers = [1, 2, 3, 4, 5];
// Index      0,1,2,3,4
//   To eject the elements from the array we will write their indexes
// console.log(numbers.splice(1,2))
// console.log(numbers)

//   WE can also add elements
console.log(numbers.splice(1, 2, 444, 666));
console.log(numbers);

// 11.Slice method
//   Slice take outs a piece from array  and makes a new array
//   const number=[4,5,6,7]
//   number.slice(2)

//   12. Reverse method
//    It reverses the array elements

// Differ between slice and splice
/*
            --> Slice:
                -> Does not change the original array
                -> Returns a new array
                -> Used to copy or extract elements
            fruits.slice(1, 3);

means:

Start at index 1 ✅ ("Banana")
Stop before index 3 ❌ ("Orange" is not included)
            
            --> Splice:
                -> Change the original array
                -> Returned the removed element
                -> used to add replace or remove the element
            
            
            
            */
