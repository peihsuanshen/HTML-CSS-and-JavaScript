var timer_counter = 5;
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
//var counter = document.getElementById("timer");
var counter ;
if (confirm("Ready?") == true){
  generateFaces();
} else {
  alert("Bye!");
  //resetTimer();
}

  function countDown(secs){
    counter = setInterval(timer, 1);
    var expires = new Date();
    expires.setSeconds(expires.getSeconds() + secs); // set timer to # seconds
    //var counter = setInterval(timer, 1);
    //timer();
    function timer() {
      var timeDiff = expires - new Date();
      var seconds = new Date(timeDiff).getSeconds();
      var milliSeconds = (new Date(timeDiff).getMilliseconds() / 10).toFixed(0);
      var seconds = seconds < 10 ? "0" + seconds : seconds;
      var milliSeconds = milliSeconds < 10 ? "0" + milliSeconds : milliSeconds;

      if (timeDiff <= 0) {
        clearInterval(counter);
        seconds = "00";
        milliSeconds = "00";

        alert("Game Over!");
      }
      document.getElementById("timer").innerHTML = "<h1>"+seconds + ":" + milliSeconds+"</h1>"; // watch for spelling
    }
  }
  /*
  function resetTimer(){
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "<h1>00:00</h1>";
  }
  */
  /*function restartGame(){
    if (confirm("Play again?") == true){
      numberOfFaces = 5;
      generateFaces();
    } else {
      alert("Bye!");
    }
  }
*/
function generateFaces(){
  clearInterval(counter);
  countDown(10);
  while(theLeftSide.firstChild){
      theLeftSide.removeChild(theLeftSide.firstChild);
      continue;
  }
  while(theRightSide.firstChild){
      theRightSide.removeChild(theRightSide.firstChild);
      continue;
  }

  for (i = 0; i < numberOfFaces; ++ i) {
    smile_img = document.createElement("img");
    smile_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
    smile_img.style.top = Math.floor(Math.random() * 400) + "px";
    smile_img.style.left = Math.floor(Math.random() * 400) + "px";
    theLeftSide.appendChild(smile_img);
  }
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.onclick = function check_click(click){
    click.stopPropagation();
    numberOfFaces += 5;
    generateFaces();
  };

  theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    if (confirm("Play again?") == true){
      numberOfFaces = 5;
      generateFaces();
    } else {
      alert("Bye!");
      clearInterval(counter);
      document.getElementById("timer").innerHTML = "<h1>00:00</h1>";
    }
    } ;
}
