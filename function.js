var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function change() {
  output.innerHTML = this.value;
}
function players() {
var player = document.getElementById("myRange").value;
    if (player == 1) {
       window.location.href = "1.html"
     }
     if (player == 2) {
       window.location.href = "1.html"
     }
     if (player == 3) {
       window.location.href = "3.html"
     }
     if (player == 4) {
       window.location.href = "4.html"
     }
     if (player == 5) {
       window.location.href = "5.html"
     }
     if (player == 6) {
       window.location.href = "6.html"
     }
     if (player == 7) {
       window.location.href = "7.html"
     }
}

function play() {
  var player = document.getElementById("myRange").value;
      if (player == 1) {
         window.location.href = "1.html"
       }
       if (player == 2) {
         window.location.href = "1.html"
       }
       if (player == 3) {
         window.location.href = "3game.html"
       }
       if (player == 4) {
         window.location.href = "4game.html"
       }
       if (player == 5) {
         window.location.href = "5game.html"
       }
       if (player == 6) {
         window.location.href = "6game.html"
       }
       if (player == 7) {
         window.location.href = "7game.html"
       }
}
