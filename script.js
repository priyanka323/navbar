let items = {
  food: 1000,
  drinks: 2000
};
let cart = 0;


function addCartvalue(item) {
  return cart + item;
}

function addToCart(item) {
  cart = addCartvalue(item);
}

addToCart(items.food);
console.log("cart value: ",cart);


const OurProject = {
  name: "This Keyword",
  getThis: function () {
    console.log(this);
  }
};

OurProject.getThis();

// arrays
let myArray = [1,2,3,4,5,6,7,8]
console.log(myArray);

myArray.push(9);
console.log(myArray);

myArray.pop(8);
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

myArray.shift(0);
console.log(myArray);


//default features
function hello(name = "world") {
  console.log("hello", + name);

}

hello("Priyanka");



//template literal

console.log("apple\nbanana\npeaches\noranges");

console.log(`
  npeaches
  grapes
  nbanana
  apple

  `);


  var num1 = 1234;
  var num2 = 1234;
  var num3 = 1234;
  console.log(`
    ${num1}
    ${num2}
    ${num3}
    `);



  fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => console.log(data));


  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


  //Async await syntatically improved way of prev. version

  const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data);

  };
getData();

///

const getData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);

  }
};
getData();
