// // console.log(thing);
// // let thing = "words";


// // function doStuff(){

// // };


// // const person = { 
// //     firstName: 'Bob', 
// //     lastName: 'Marley', 
// //     email: 'bob@marley.com', 
// //     password: 'sekureP@ssw0rd9', 
// //     username: 'barley', 
// //     createdAt: 1543945177623,
// //     address: {
// //         city: "Fairfield"
// //     }
// // };

// // const {lastName: Name, password: unhashedPassword} = person;
// // console.log(Name, unhashedPassword);

// // let doThings = ({password: unhashedPassword}) => {
    
// // }


// // var example = [1, () => {}];

// // var [data, updateData] = example;


// let colors = ["blue", "red", "orange", {key: "value"}];
// let colors2 = [...colors];

// colors.push("white");
// let [,,,data] = colors;
// data.newValue = "data";

// console.log(colors);
// console.log(colors2);

// // stand alone
// function example1(){};

// let example2 = function() {
//    return 10;
// };

// let example3 = (arg) =>  arg + 10;
// example3(15);


let numberChecker = (num1, num2) => {
    if(num1 === num2){
        return "yes";
    }else{
        return "no";
    }
}

let betterChecker = (num1, num2) => num1 === num2 ? "yes" : "no";

console.log(numberChecker(15, 15));
console.log(betterChecker(15, 13));