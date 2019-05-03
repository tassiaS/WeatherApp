import React from "react";

const Form = props => (<form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City.."/>
        <input type="text" name="country" placeholder="Country.."/>
        <button>Get Weather</button>
    </form>);

    // 

// const Form = props => {
//     return (
//         <form onSubmit={props.getWeather}>
//         <input type="text" name="city" placeholder="City.."/>
//         <input type="text" name="country" placeholder="Country.."/>
//         <button>Get Weather</button>
//     </form>
//     )
// }    

export default Form;

// //  functions - 2 to 3 ways

// function functionName(args, args2) {
//     return // stuff;
// }

// var someName = function (args, args) {

// }

// someName(2,3); 

// // es6+

// // const, let, var
// const someName = function(a,b) {
// }

// // lazy

// const someName = (a,b) => {

// }

// const oneArg = (props) => {}

// // 
// const oneArg = props => {
//     return 'llj'
// }

// //  one stattement

// const Add = (a,b) => (a + b);

// // or

// const Add = (a, b) => {
//     return a + b;
// }