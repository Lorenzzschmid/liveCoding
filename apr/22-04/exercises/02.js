// 01. 

function someGuy() {
   
    const student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12,
    }; 
    console.log(student);
    delete student.rollno; 
    console.log(student); 
}
someGuy();  
// Second version: 
console.log("---------sec.vers.---------")
const student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12,
    }; 

function someStudent(object) {
    delete student.rollno;
    return student; 
}
// 2. 
const favMovie = {
    title: "To kill a mockingbird",
    duration: 180,
    stars: ["Brian Sostek", "Tony Papenfuss", "Seth Nunrich", "Amy Matthews"]}
function print(movie){
let result = []; 
for (let i = 0; i < movie.stars.length; i++) {
    result.push += movie.stars[i]; 
    return result
    }
console.log(result); 
}
console.log(print(favMovie));