getFirstname = (fullname) => {
   return fullname.split(' ')[0];
}

getFirstname = (fullname) => fullname.split(' ')[0];



//arguments object - no longer bound with arrow functions

const add = (a, b) => {
   console.log(arguments);
   return a+b;
}

console.log(add(55, 1, 1001));

//this keyword - no longer bound
const user = {
   name: 'nate',
   cities: ['phily', 'new york', 'dublin'],

   //should use in es5 syntax for defining function in object.
   printPlacesLived() {
      return this.cities.map(city => this.name + 'has lived in' + city)

      // this.cities.forEach(city => {
      //    console.log(this.name+' has lived in '+city);
      // })
   }
}

user.printPlacesLived();


const multiplier = {
   numbers: [1,2,3,4,5],
   multiplyByThree: 3,
   multiply () {
      return this.numbers.map(number => number * this.multiplyByThree);
   }
};

console.log(multiplier.multiply());