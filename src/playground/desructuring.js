// const person = {
//   name: 'JJ',
//   age: '20',
//   location: {
//     city: 'Seoul',
//     tempeture: 10
//   }
// }

// // const name = person.name
// // const age = person.age

// // The name default value is 'Anonymous'
// const {name: firstname = 'Anonymous', age, location} = person

// console.log(`${firstname} is ${age}.`)

// // tempeture has a new property name temp, rename
// const {tempeture: temp, city}= person.location
// if(temp && city) {
//   console.log(`${temp}`)
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}
const {name:publisherName = 'Self-published'} = book.publisher

console.log(publisherName)