//alert("app.js");

const name = "Robert";
let age = 34;
const city = "Keila";
const job = "Lennujuht";
console.log("Nimi: " + name, typeof(name));
console.log("Vanus: " + age, typeof(age));

hello();

function hello() {
    console.log("Tere");
}
// list javascript 5-s
//let html = "<ul><li>Nimi: " + name + "</li><li>Vanus: " + age + "</li><li>Linn: " + city + "</li><li>Amet: " + job + "</li></ul>";

// Template literal ES6 javascript 6
let html = `<ul><li>Nimi: ${name}</li><li>Vanus: ${age}</li><li>Linn: ${city}</li><li>Amet: ${job}</li></ul>`;
document.body.innerHTML = html;

// massiivid
const numbers1 = [1, 2, 3, 4, 5];

console.log(numbers1);
console.log(typeof(numbers1));
// lisa element
numbers1.push(6);  //lõppu
console.log(numbers1);
numbers1.unshift(0); //algusesse
console.log(numbers1);
// eemalda element
numbers1.pop(); // viimane
console.log(numbers1);
numbers1.shift(); // esimene
console.log(numbers1);
numbers1.splice(2, 1); // mingi kindel element (kui ei täpsusta mitu, eemaldab kõik peale kahe esimese)
console.log(numbers1);
// otsi kindlat väärtust
let index = numbers1.indexOf(5);
console.log(index);

let mixedArray = [22, "banana", true];
mixedArray.forEach(element => {
    console.log("Element:",element, "tüüp:", typeof(element));
})
console.log(mixedArray[1].length);
// objektid
let johnName = "John";
let johnAge = 40;

let steveName = "Steve";
let steveAge = 100;

let person1 = {
    name: johnName,
    age: johnAge
};

let person2 = {
    name: steveName,
    age: steveAge
};

let people = [person1, person2];

console.log(people);

people.forEach(element => {
    console.log(element.name, "on", element.age, "aastat vana");
});