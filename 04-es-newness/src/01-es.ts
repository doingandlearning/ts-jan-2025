// ECMAScript - ES2024

// 1. Default parameters
function areaOfRect(length = 1, width = length) {
  return length * width;
}

const rect1 = areaOfRect(3, 4);
console.log(rect1);

const rect2 = areaOfRect(3);
console.log(rect2);

const rect3 = areaOfRect(); // 1 x 1
console.log(rect3);

// 2. Template literals
{
  const name = "Dan";
  const location = "Glasgow";
  const string1 = "My name is " + name + " and I live in \n\n\n\n\n" + location;
  console.log(string1);
  const string2 = `My name is ${name} and I live in ${location}.
	
	
	This is still in string2`;
  console.log(string2);

  type Greeting = "Hello" | "Goodbye" | "Yo";
  type Target = "World" | "Planet" | "England" | "US";
  type GreetOptions = `${Greeting}, ${Target}!`;
  // const newGreet: GreetOptions = ""

  type Area = "news" | "sport" | "iplayer";
  type ValidUrl = `https://${Area}.bbc.co.uk`;
  type NewValidUrl = `https://bbc.co.uk/${Area}`;
  type AllValid = ValidUrl | NewValidUrl;
}

// 3. Object literals

const drink = "Tea";
const phone = "iPhone";

const object1 = {
  drink: drink,
  phone: phone,
};
const object2 = {
  drink,
  phone,
};
// console.assert(object1 === object2);

// 4. Arrow functions
perimeterOfRect(1, 2);

function perimeterOfRect(length: number, width: number) {
  return 2 * (length + width);
}

type BinaryOperation = (a: number, b: number) => number;

let perimeterOfRect2: BinaryOperation = (length, width) => {
  // do more work!
  return 2 * (length + width);
};

let perimeterOfRect3 = new Function(
  "length",
  "width",
  "return 2* (length+width)"
);

console.log(perimeterOfRect3(1, 2));

// 5. var/let/const
function simulateDom() {
  let pseudoDom = {
    // 1
    button1: {},
    button2: {},
    button3: {},
  };

  for (let i = 1; i <= 3; i++) {
    //2
    let element = pseudoDom[`button${i}`]; // 3
    element.click = function () {
      return `Item ${i} is clicked.`;
    };
  }
  console.log(pseudoDom.button1.click()); // 4,4,4
  console.log(pseudoDom.button2.click()); // does it know i?
  console.log(pseudoDom.button3.click()); // 1, 2, 3 / undefined, undefined, undefined / error - method doesn't exist
}
simulateDom();
