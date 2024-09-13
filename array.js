// let Array = [1,2,3,4,5,6,"khushi",{},]
// Array[1] = "khushi"
// console.log(Array[1])

let numbers = [1,2,3,4,5,6,7,8,9,10,11]
console.log(numbers.length)
 let index = 0
 while (index < numbers.length){
    console.log(numbers[index])
    index++
 }
 // to insert elements into array we have push and unshift method
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)
// array.unshift(element) add a new element in array from leading side
numbers.unshift(1234)
numbers.unshift(1234)

console.log(numbers)

// array.pop() removes the element from trailing side of array 
numbers.pop()
numbers.pop()
numbers.pop()

// array.shift() removes the element from leading side of an array
numbers.shift()
console.log(numbers)

