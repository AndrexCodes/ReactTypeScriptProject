// import React from 'react';
// const Greeting = ({ name }) => {
//     return <div>Hello, {name}!</div>;
// };
// export default Greeting;


// Prop Interface for Greeting Component
interface GreetingProps{
    name: string;
}

// Actual Component with Object Prop
const Greeting = ({ name }: GreetingProps) => {
    return <div>Hello, {name}!</div>;
};
export default Greeting;