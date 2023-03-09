console.log('Society');
console.log(Array.prototype);

// Some Data
let society = [
    {fName : "John", lName : "Doe", birth : "1945", death : "2020"},
    {fName : "Ben", lName : "Daniels", birth : "1963", death : "2021"},
    {fName : "Jhonny", lName : "Shocks", birth : "1932", death : "2010"},
    {fName : "Jill", lName : "Smith", birth : "1982", death : "2014"},
    {fName : "Garry", lName : "Doe", birth : "1999", death : "2022"},
]

console.table(society)

// Map Method
// Add a fullstop(.) in names of each society member.
// Original too changes.

let updatedNames = society.map((people)=>{
    people.fName = people.fName + '.';
    people.lName = people.lName + '.';
    return people;
})

console.table(updatedNames);

// Filter Method
// Remove people from society whose last names are 'doe'
// Original remains same.

let changedSociety = society.filter((people) => people.lName !== 'Doe.');

console.table(changedSociety);

// Filter Method
// Remove people who lived more than 50 years

let fiftySociety = society.filter((people) => people.death - people.birth < 50 )

console.table(fiftySociety);

// Reduce Method - Demo
let numbers = [100,200,300,400,500];
let addedNumbers = numbers.reduce((sum, num) => sum+num , 0);
console.log(`Sum is ${addedNumbers}`);

/* 
    Syntax explanation for .reduce() 
        1. Takes two params as function and initial value/object.
        2. function takes two params : previous total value, present array value.
*/

// Reduce Method
// Sum of all people of society lived years.

let livedYearsOfPeople = society.reduce((lived, people) => lived + (people.death - people.birth), 0)

console.log(`Sum of all years of livings in society is ${livedYearsOfPeople}`);

// Sort Method - Demo
// Sort the array you like.
// Changes Original Array.

let someNums = [100, 23, 1, -34, -1000, 234, 999];
someNums.sort((a,b) => a > b ? 1 : -1);
console.table(someNums);

someNums.sort((a,b) => a < b ? 1 : -1);
console.table(someNums);

let alphs = ['a','d','p','z','c','g','i'];
alphs.sort((a,b) => {
    return a < b ? 1 : -1
});
console.table(alphs);

// Sort Method
// Sort Society People according to their birth years in desending order.

society.sort((a,b)=>{
    return a.birth > b.birth ? 1 : -1;
})
console.table(society);