export {};
let num=10;
let num2=2;

console.log(num + num2);
console.log(num * num2);

console.log(num % num2)

console.log(num ** num2);
console.log(num - num2);

console.log(num/num2);


console.log(num++);
console.log(num+5); 
console.log(++num);
console.log(num-5)
console.log(5+num)
console.log(+num)


let number =4
let number2 =3 
let result = number ==number2
let result1 = number <=number2

console.log(result);
console.log(result1); 
console.log(number!=number2);
console.log(number2 >5);
console.log(number <=4);
console.log(number=number2);

// Logical operators
let gradingsystem =(marks:number)=>{

}


let creditcal = (Balanace:number, Minimum_Balance:number, Max_Balance:number) => {

let addedcredits= Balanace + Minimum_Balance +Max_Balance;

if(addedcredits>250  &&   addedcredits<=300 ){ 
    return "A+"
}

else if (addedcredits>220 && addedcredits<=250){
    return "B"
}

else if (addedcredits>180 && addedcredits<=250){
    return "C"
}
else if ( addedcredits>180 && addedcredits<220){
    return "D"}
else ( addedcredits>0 && addedcredits<=150);{
        return "Low"
    }
}

// let result = creditcal(20,100,150);

console.log(creditcal(130,100,50))
console.log(creditcal(30,100,100))
console.log(creditcal(130,50,20))
console.log(creditcal(0,0,50))
