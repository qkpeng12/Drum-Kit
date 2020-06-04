var numOfDrums = document.querySelectorAll(".drum").length;

// Mouse click detection
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      evenResponse(buttonInnerHTML);    // create a sound
      buttonAnimation(buttonInnerHTML); // generate animation on button
    } // end of "function () {""
  ) // end of ()"click"
} // end of for loop

// Keypress detection
document.addEventListener('keypress', function(event) {
  evenResponse(event.key);    // create a sound
  buttonAnimation(event.key); // generate animation on button
});

function evenResponse(eventDetected) {
  switch (eventDetected) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log(eventDetected);
  } // end of switch

} // enf of function evenResponse

// Function that shows which key is pressed on web screen
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");  // <== add the clicked button to show shadow on web page
  setTimeout(function(){
  	activeButton.classList.remove("pressed"); // <== This is the action we want to run after 300 ms delay
  }, 300);
}
