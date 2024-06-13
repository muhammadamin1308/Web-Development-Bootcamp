// $("h1").css("color", "red");

// // adding eventlistener to all buttons in js
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[1].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// // adding eventlistener to all buttons in jQuery
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// detecting key from input tag
$("h1").addClass("big-title");

$(document).keydown(function (event) {
  $("h1").text(event.key);
  console.log(event.key);
});

// $("h1").click(function() {
//     $("h1").css("color", "purple")
//    });



// can write every eventListener on the "ON" element
$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

// after, before, append and prepend,, remove
$("h1").before("<button>New</button>");
$("h1").remove();
