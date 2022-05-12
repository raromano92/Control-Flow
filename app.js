// Log numbers 1 thru 20

for (let i = 1; i < 21; i++) {
    console.log(i);
}

// Log even numbers 0 - 200

for (var i = 0; i < 202; i += 2) {
    console.log(i)
}

// Excited kitten

const kitty = ["Love me, pet me! HSSSSSS!", 
               "...human...why you taking pictures of me?...", 
               "...the catnip made me do it...",
               "...why does the red dot always get away..."]

for (i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(kitty[0])
} else if (i % 2 == 0)
Math.floor(Math.random() * 20); 
  console.log(kitty[1, 2, 3])
}

// Getting to know you

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".

kenny[0] = "Gameboy"
console.log(kenny);

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = "Gotham City"
console.log(ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop();
reuben.push("Chicago");
console.log(reuben);

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code]

jimHaff.pop();
jimHaff.push("Miami, NYC, Seattle");
console.log(jimHaff);

kenny[0] = "Gameboy"
console.log(kenny);

// ## Yell at the Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

  for (let i = 0; i < ninjaTurtles.length; i++) {
  console.log(ninjaTurtles[i].toUpperCase());
  }

