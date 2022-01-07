//KEYBOARD
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//MOUSE CLICK
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    var aa=this.innerHTML;
    buttonAnimation(aa);
  });
}

//sOUND MAKING
function makeSound(kea) {
  switch (kea) {
    case "w":
      var audio1 = new Audio("sounds/sound3.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/sound4.mp3");
      audio2.play();
      break;
    case "s":
      var audio = new Audio("sounds/sound5.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/sound6.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/sound2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/sound0.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/sound1.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/sound4.mp3");
      audio.play();
      break;
  }
}
function buttonAnimation(currentkey){
  var anim= document.querySelector("."+currentkey);
anim.classList.add("pressed");
setTimeout(function(){ anim.classList.remove("pressed"); },100);

}
