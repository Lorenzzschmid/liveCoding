/**
 * ternary operator:
 *
 * condition ? true expression : false expression
 */
let day = "Tuesday";

// if (day === "Monday") {
//   console.log("ugh, Monday");
// } else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
//   console.log("let's go through it");
// } else if (day === "Friday") {
//   console.log("almost there");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("weekend!");
// } else {
//   console.log("that's not a real day");
// }

/**
 * switch statement
 */

day = "Sunday";

switch (day) {
  case "Monday":
    console.log("ugh, Monday");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("let's go through it");
    break;
  case "Friday":
    console.log("almost there");
    break;
  case "Saturday":
  case "Sunday":
    console.log("weekend");
    break;
  default:
    console.log("that's not a real day");
}

let animals = "Lenica"; 
switch(animals) {
  case 'Frog': 
  case 'Zebra':
  case 'Fox': 
  case 'Orangutan': 
  case 'Crocodile': 
  console.log(`The ${animals} will go to the arc.`)
  break;
  case 'Human':
  console.log(`This creature: ${animals} will not go to the arc!`)
  break;
  default: 
  console.log('No way, this animal will not be on the arc!'); 

}

