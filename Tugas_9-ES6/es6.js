// Mengubah fungsi menjadi fungsi arrow
golden = () => {console.log('This is golden!')}
golden()


//Sederhanakan menjadi Object literal di ES6
const newFunction = (firstName,lastName) => {
	return {
	firstName: firstName,
	lastName : lastName,
    fullName : function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
  
newFunction("William", "Imoh").fullName() 

// Destructuring
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName,lastName,destination,occupation,spell} = newObject;

console.log(firstName, lastName, destination, occupation)


//Array Spreading
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

console.log(combined)

// Template Literals
const planet = "earth"
const view = "glass"
var before = 'Lorem $view dolor sit amet,consectetur adipiscing elit,$planet' + 
'do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+ 
'Ut enim ad minim veniam' 
// Driver Code
console.log(before) 
