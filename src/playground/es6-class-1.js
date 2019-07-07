// Car 
// make
// model
// vin
// getDescription

class Person {
   constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
   }
   getGreeting() {
      return `Hi, I am ${this.age} year(s) old.`;
   }
   getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
   }
}

class Student extends Person {
   constructor(name, age, major) {
      super(name, age);
      this.major = major;
   }
   hasMajor() {
      return !!this.major;
   }
   getDescription() {
      let description = super.getDescription();
      
      if (this.hasMajor()) {
         description += ` Their major is ${this.major}`;
      }

      return description;
   }
}

class Traveler extends Person {
   constructor(name, age, location) {
      super(name, age);
      this.location = location;
   }
   
   getGreeting() {
      let description = super.getDescription();

      if (this.location) {
         description += `I'm visiting from ${this.location}`;
      }
      return description;
   }
}

const me = new Student('Nate', 28, 'CS');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());


const traveler = new Traveler('Nate', 30);
console.log(traveler.getGreeting());
