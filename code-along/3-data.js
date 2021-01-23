// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
// let profile = {
//   name: 'Brian',
//   location: { city: 'Chicago', state: 'Illinois' },
//   timeline: [
//     { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
//     { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
//     { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
//   ]
// }

let alec = {
  name: 'Alec',
  location: 'Chicago',
  status: 'Learning how to code!'
}
let jake = {
  name: 'Jake',
  location: 'Chicago',
  status: 'NOT learning how to code!'
}

// console.log(profile.status)

let shoppinglist = ['eggs','orange juice','ice cream'] 
shoppinglist.push = 'lottery ticket'
console.log(shoppinglist)

let lotterticket = [4, 8, 15, 16, 23, 42]
console.log(lotterticket[0])

let students = [alec,jake]
console.log(students[0])

//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

// template literals support HTML too!
output = `
  <div class="text-4xl">${alec.status} Sweet</div>
`
/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output