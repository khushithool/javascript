//let answer =Number(prompt("enter number 1")) + Number(prompt("enter number2"))
//console.log(answer)
//let a=Number(prompt("enter a"))
//let b=Number(prompt("enter b"))
//let c=a-b
//console.log("the sub" + a + "and" +b + "is" +c)
//let a=Number(prompt("enter a"))
//let b=Number(prompt("enter b"))
//let c=a+b
//console.log("the sum" + a + "and" +b + "is" +c)
//let a=Number(prompt("enter a"))
//let b=Number(prompt("enter b"))
//let c=a*b
//console.log("the mul" + a + "and" +b + "is" +c)
//let a=Number(prompt("eneter a"))
//let b=Number(prompt("eneter b"))
//let c=a/b
//console.log("the div" + a + "and"  +b + "is" +c)
//let a=Number(prompt("enter a"))
//let b=Number(prompt("enetr b"))
//let c=a%b
//console.log("the mod" + a + "and" +b + "is" +c)

//without propmt//
//addtidional//
//let a=10;
//let b=30;
//console.log(a+b)

//substraction//
//let a=30;
//let b=20;
//console.log(a-b)

//multipication//
//let a=30;
//let b=20;
//console.log(a*b)

//concatenation//
//let fname="khushi";
//let lname="thool";
//let name =fname+lname;
//console.log(name)

//let number1="20"
//let number2="20"
//let number=number1+number2;
//console.log(number)

//type casting
//1) number -> String
//let data =12345
//console.log("data type after"+typeof(data))

//data = string(data)
//data = data.toString()
//console.log("data type before"+typeof(data))

//let data=12345
//console.log(" data type before "+typeof(data))

//data = Boolean(data)
//console.log(data)

//if value if greater than 5 then true else false

//console.log(" data type after "+typeof(data))

//next day//
//function//
//no arg no return//
//function something(){
//console.log ("this is function")
//console.log("this is no argument no return")
//}
//something()

//arg no return//
//function addtidional(num1,num2,num3){
//console.log(num1+num2+num3)
//}
//addtidional(10,30,50)

//arg and return//
//function dosomething(a,b){
//let c = a*b;
//return c
//}
//console.log(dosomething(20,30))

//no arg and return//
//let n1=100
//let n2=70
//let n3=n1-n2
//function sub(){
//return n3
//}
// console.log(sub(n3))

//2 Array function//

//no argument and no return//
//let data=()=>{
//console.log("this  is a empty arrow function")
//}
//data()

//arg and  no return//
//let addtidional=(num1,num2,num3)=>{
//console.log(num1/num2/num3)
//}
//addtidional(300,500,700)

// arg and return//
// let dosomething=(a,b)=>{
//let c =a*b
//return c
//}
//console.log(dosomething(40000,50000))

//no argument and return//
//let n1=60
//let n2=50
//let n3=n1*n2
//let sub=()=>{
//return n3
//}
//console.log(sub(n3))


//next day//

//string//
//(length)

//let data =("come home")
//console.log(data.length)

//upercase and lowecase

//console.log(data.toUpperCase())
//console.log(data.toLowerCase())

//Trim//

let input = "some here"
//input = input.trim(
//console.log(input.length)

//index charcter show//
//s[0],p[9],t[9],l[10]
//console.log(input.charAt(0))

//string number show//

//console.log(input.indexOf("m"))
//console.log(input.lastIndexOf("e"))

//string match function boolean return//

//console.log(input.match("here"))
//console.log(input.localeCompare(" some here "))


//String replace of chacter

//input = input.replace("e","r")
//input = input.replaceAll("e","r")
//console.log(input)

//string divide slice/substring//

// (slice)

// let value = input.slice(0,5)
// console.log(input)
// console.log(value)

// (substring)
// let value = input.substring(0,5)
// console.log(input)
// console.log(value)


//next day//
//05/09/2024//

// let a=100
// let b=40
// let c=180
//  let d=150

// if(a<b){
//     console.log("b is greater!")
// }
// else{
//    console.log("b is greater")
// }

// if (a>b) {
//     if (a>c) {
//         console.log("a is greater")
//     }
// }

// else {
//     console.log("a is greater")
// }

//  if (a>b){
//     if(a>c){
//         console.log("a is greater")
//      }
//      else{
//         console.log("c is greater")
//      }
//  }
// else if(b>c)
// {
//     console.log("b is greater")
// }
// else{
//    console.log("c is greater")
// }

// if(a>b){
//     if(a>c){
//         if(a>d){
//             console.log("a is greater")
//         }else{
//             console.log("d is greater")
//         }
//     }else{
//         console.log("c is greater")
//     }
// }else if(b>c){
//     if(b>d){
//         console.log("b is greater")
//     }else{
//         console.log("d is greater")
//     }
// }else if(c>d){
//     console.log("c is greater")
// }else{
//     console.log("d is greater")
// }


//next day//
//09/09/20214//
//conditional statement and example//

// let a=2
// let b=3
// let c=15
// let d=6

// if(a<b){
//     if(a<c){
//         if(a<d){
//             console.log("a is smallest a1")
//         }else{
//             console.log("d is smallest d1")
//         }
//     } else if(c <d){
//                 console.log("C is smallest c1")
//             }else{
//                 console.log("D is smallest d2")
//             }
//         }else if(b < c){
//             if(b < d){
//                 console.log("B is samllest b1")
//             }else{
//                 console.log("D is smallest d3")
//             }
//         }else if(c < d){
//             console.log("C is smallest c2")
//         }else{
//             console.log("D is smallest d4")
//         }

//switch case//
// let choice = "a"
//  switch(choice){
// case 'a' : console.log("you vowel case a !")
//     break;
//     case 'e' : console.log("you vowel case e !")
//     break;
//     case 'i' : console.log("you vowel case i !")
//     break;
//     case 'o' : console.log("you vowel case o !")
//     break;
//     case 'u' : console.log("you vowel case u!")
//     break;
   
//     default : console.log("invalid consolants plese select between a to u")
//  }

// let age=Number(prompt("enter the age"))
// if(age>=18){
//     console.log("driver is valid")
// }else{
//     console.log("driver is not valid")
// }

// let age = Number(prompt("enter the age"))

//  age % 2 == 0 ? console.log(age + " is valid number !") : console.log(age + " is invalid number !")  
