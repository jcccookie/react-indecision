console.log('utils running');

const square = (x) => {
   return x * x;
}

const add = (a, b) => {
   return a + b;
}

const subtract = (a, b) => a - b;

export { square, add, subtract as default};

//export default subtract;