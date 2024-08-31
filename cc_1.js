//Task 1: Variables and Data Types

let employeeName= "Charles Darwin";
const employeeID= "7";
var isActive = true;
console.log(employeeName,typeof (employeeName));
console.log(employeeID,typeof(employeeID));
console.log(isActive,typeof(isActive));


//Task 2: Compound Data Types

let product = ["dog-collar","food","treats"];
const productDetails={
    names: product,
    inStock:10,
    price:30.00,
}
console.log(product,productDetails);



//Task 3: Assignment Operators

let accountBalance = 5000;

let deposit=400;
accountBalance+=deposit
console.log(accountBalance);
//5400
let withdraw= 200;
accountBalance-=withdraw
console.log(accountBalance);
//5200
let intrest= 1.05
accountBalance*=intrest
console.log(accountBalance)
//5460
let budget= 2
accountBalance/=budget
console.log(accountBalance)
//2730
let percent=1.5
accountBalance%=percent
console.log(accountBalance)
//40.95


