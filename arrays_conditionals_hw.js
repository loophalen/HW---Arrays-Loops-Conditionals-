//Easy Going
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
//"Commit 1 -Easy Going answered"

//Get Even
for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}
//"Commit 2 - Get Even answered"

//Excited Kitten
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (i = 0; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
};

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random. //Hint: You will need to use Math.random()
var catArray = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', 'why does the red dot always get away...']
for (i = 0; i < 20; i++) {
    var rand = catArray[Math.floor(Math.random() * catArray.length)];
        console.log(rand);
}
//var rThree = catArray(Math.floor((Math.random() * 3) + 1));
//if human === 1 {}  console.log('...human...why you taking pictures of me?...');


//"COMMIT 3 - Excited Kittens answered"
//Fizz Buzz


var fuzz=[];
for (var i = 1; i <= 100; i++) {
    console.log(i);
    if (3===0);
    console.log("fizz");
    if (5===0);
    console.log("Buzz");
    if (3===0 && 5===0);
    console.log("FizzBuzz");
  }

// "COMMIT 4 - Fizz Buzz answered"


const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]
//Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
thom.splice(0, 1, 'Gameboy');
console.log(thom);
// Karolin just had her birthday; change Karolin's array to reflect her being a year older.
karolin.splice(1,1,'17');
console.log(karolin);
//Change Matt H's hometown from Philadelphia to "Gotham City".
matt.splice(2,1,"gotham city");
console.log(matt);
//Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
kristyn.pop();
kristyn.push("Brooklyn");
console.log(kristyn);

//"COMMIT 5 - Getting to Know You answered"

//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
var ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
console.log(ninja);

//Use a for loop to call toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninja.length; i++) {
    console.log(ninja[i].toUpperCase());
}

//"COMMIT 6 - Yell at the Ninja Turtles answered"

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
kristynsShoe = kristynsCloset[0];
console.log(kristynsCloset[0]);

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);


//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
for (let i = 0; i <= 2; i++) {

kristynOutfit = Math.floor((Math.random() * (kristynsCloset.length)));
console.log("Kristyn's outfits are: " + kristynsCloset[kristynOutfit] + " " + "and" + " " + kristynsCloset[kristynOutfit]);
}

//"COMMIT 7 - Kristyn and Thom have their outfits ready for class - array practice"

//Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

for (let i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now Washing " + kristynsCloset[i]);
}

//Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);


// "COMMIT 8 - I loops through their closets".

//Multiples of 3 and 5

//Find the sum of all the multiples of 3 or 5 below 1000.
let multiples = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0) {
  console.log(multiples[i]);
}
  if (i % 5 === 0) {
    console.log(multiples[i]);
  }
}

/*
👏 You just solved Project Euler problem 1! 👏

🔴 The commit message should read:
"Commit 9 - Project Euler Problem 1 answered"
HTML & CSS
Watch the following videos as a refresher on HTML and CSS. We recommend that you watch them once in the evening and again in the morning before class. You will be working on practicing HTML in your Morning Exercise.

HTML Video 1

HTML Video 2

*/
