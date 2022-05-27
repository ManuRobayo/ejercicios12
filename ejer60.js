class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  isAdult() {
    return this.age > 18;
  }
}
const person = new Person('Mateo', 20);
console.log(person.isAdult());

const persons = [
  new Person('Mateo', 20),
  new Person('Manu', 29),
  new Person('Lado', 52),
];

let average = 0;
persons.forEach((x) => {
  average += x.age;
});
let total = average / persons.length;
console.log(total);