// find the length of tweet
let tweet = prompt("Compose your tweet:");
let lengthOfTweet = tweet.length;
alert(
  "You have written " +
    lengthOfTweet +
    " characters. You have " +
    (180 - lengthOfTweet) +
    " characters left"
);

// write the first letter in uppercase
let user = prompt("Write your name:");
let firstLetter = user.toUpperCase().slice(0, 1);
alert("Hello " + firstLetter + user.slice(1, user.length) + "!");

// determine Dog's age
let dogAge = prompt("Write your dog's age:");
let humanAge = (dogAge - 2) * 4 + 21;
alert(humanAge);

//  life in weeks
function lifeInWeeks(age) {
  let divide = 90 - age;
  console.log(
    "You have " +
      divide * 365 +
      " days, " +
      divide * 52 +
      " weeks, and " +
      divide * 12 +
      " months left."
  );
}

lifeInWeeks(89);

