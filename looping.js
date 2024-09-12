
function reverseYear(year) {

    let output = ""

    if ((year % 100 !== 0) && (year % 4 == 0) || (year % 400 == 0)) {
        output = year + "is a leap year !"
    } else {
        output = year + "is not leap year !"
    }
    return output
}

let leapyear = 2025
while (leapyear >= 0) {
    console.log(reverseYear(leapyear))
    leapyear--
}
//Wap in js to check a number is palindrome or not make a funcation for it
let number = samenumber = 171
let reverse = 0

let d = 0

while (number != 0) {
    d = number % 10
    reverse = reverse * 10 + d
    number = parseInt(number / 10)
}

console.log(reverse)

// let Number = samenumber = 171

// let reverse = 0

// let d = 0
// while(number != 0){
//     d = number % 10
//     reverse = reverse * 10 + d
//     number=parseInt(number / 10)
// }
// console.log(reverse)