//1. 04/20/2024 13:45:30

console.log('Problem No : 1 "04/20/2024 13:45:30"')
const date1=`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
console.log(date1);

//2. Thu 20/4/2024 13.45

console.log('Problem No : 2 " Thu 20/4/2024 13.45 "')
let day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const date2 = `${day[new Date().getDay()]}  ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  ${new Date().getHours()}.${new Date().getMinutes()}`
console.log(date2)

//3. 2024-04-20 3:45 Thursday

console.log('Problem No : 3 " 2024-04-20 3:45 Thursday "')
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const date3=`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}  ${days[new Date().getDay()]}`
console.log(date3)

//4. April 20th, 2024 01.45.30 PM

console.log('Problem No : 4 " April 20th, 2024 01.45.30 PM"')
let months=["January","Febuary","March","April","May","June","July","August","September","October","Novemeber","Decemeber"]
const date4=`${months[new Date().getMonth()]}  ${new Date().getDate()}st, ${new Date().getFullYear()} ${new Date().getHours()}.${new Date().getMinutes()}.${new Date().getSeconds()}`
console.log(date4);

//5. 20 April 2024 at 01:45 PM

console.log('Problem No : 5 " 20 April 2024 at 01:45 PM "')
const date5 = `${new Date().getDate()}  ${months[new Date().getMonth()]}  ${new Date().getFullYear()} at ${new Date().getHours()} : ${new Date().getMinutes()}`
console.log(date5)