// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number = 1234;
const aString: string = "mystring";
const aBigInt: bigint = 100n;
const anArray: Array<string> = ["a","b"]
const anUnknown: unknown = null;
const anObject: object = {name:"cemal"};
const aTuple: [number, string] = [1, "Steve"];
const anEnum: {} = {}

  
// Implement this function any type accordingly
function isEven(number:number): boolean {

    return(number % 2 == 0)

}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: "devops"
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'devops'
}

const people: [Person,Developer] =  [
   { name:"Jane"},{ role: "devops"}
]

function printPeople(people: any[]): any {
    // Print the name of person or the role in this function
    return console.log([
        {name:"Jane"},
        {role:"Jane"}
    ])
}

// Type the encrpyt function correctly
const encryptText = (plainText: any, shift: any) => {
    let cipherArr: any[] = []
    let cipherLetter: string

    plainText.split("").map((letter: any) => {
      let code = letter.charCodeAt(letter)
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })  
    return cipherArr.join("")
}


// Solve using a literal union type
let vegetable: any; // :Vegetable:
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";


// Solve the following exercise with an intersection type
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void
{
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

export {
    isEven,
    printPeople,
    encryptText
};