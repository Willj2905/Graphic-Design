var conv = 0;
var path = "";
var round = 0;
var playscore1 = 0;
var playscore2 = 0;
var playscore3 = 0;
var playscore4 = 0;
var playscore5 = 0;
var playscore6 = 0;
var playscore7 = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;
var fileName = "";
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}


const timeout = setTimeout(talk, 5000);

function talk() {
  document.getElementById("fullmouth").style.display = "none";
  document.getElementById("talkmouth").style.display = "block";
  setTimeout(() => {
    document.getElementById("fullmouth").style.display = "block";
    document.getElementById("talkmouth").style.display = "none"}, 2000);
}

function leave() {
setTimeout(() => {
  document.getElementById("dude").className = "trackstar";
  document.getElementById("smi1").style.display = "none";
  document.getElementById("smi2").style.display = "none";
  document.getElementById("mouth").style.display = "none";
  document.getElementById("frown1").style.display = "block";
  document.getElementById("frown2").style.display = "block";
  document.getElementById("frown3").style.display = "block";}, 2000);
}

function players() {
  var player = document.getElementById("myRange").value;
  if (player == 1) {
    window.location.href = "1.html";
  }
  if (player == 2) {
    window.location.href = "1.html";
  }
  if (player == 3) {
    window.location.href = "3.html";
  }
  if (player == 4) {
    window.location.href = "4.html";
  }
  if (player == 5) {
    window.location.href = "5.html";
  }
  if (player == 6) {
    window.location.href = "6.html";
  }
  if (player == 7) {
    window.location.href = "7.html";
  }
}

function play() {
  fileName = location.href.split("/").slice(-1);
  if (fileName == "3.html") {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    document.getElementById("name3").innerHTML = player3;
    document.getElementById("bet1").style.display = "block";
    document.getElementById("bet2").style.display = "block";
    document.getElementById("bet3").style.display = "block";
  } else if (fileName == "4.html") {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
    document.getElementById("player4").style.display = "none";
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    document.getElementById("name3").innerHTML = player3;
    document.getElementById("name4").innerHTML = player4;
    document.getElementById("bet1").style.display = "block";
    document.getElementById("bet2").style.display = "block";
    document.getElementById("bet3").style.display = "block";
    document.getElementById("bet4").style.display = "block";
  } else if (fileName == "5.html") {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
    document.getElementById("player4").style.display = "none";
    document.getElementById("player5").style.display = "none";
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    document.getElementById("name3").innerHTML = player3;
    document.getElementById("name4").innerHTML = player4;
    document.getElementById("name5").innerHTML = player5;
    document.getElementById("bet1").style.display = "block";
    document.getElementById("bet2").style.display = "block";
    document.getElementById("bet3").style.display = "block";
    document.getElementById("bet4").style.display = "block";
    document.getElementById("bet5").style.display = "block";
  } else if (fileName == "6.html") {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;
    var player6 = document.getElementById("player6").value;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
    document.getElementById("player4").style.display = "none";
    document.getElementById("player5").style.display = "none";
    document.getElementById("player6").style.display = "none";
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    document.getElementById("name3").innerHTML = player3;
    document.getElementById("name4").innerHTML = player4;
    document.getElementById("name5").innerHTML = player5;
    document.getElementById("name6").innerHTML = player6;
    document.getElementById("bet1").style.display = "block";
    document.getElementById("bet2").style.display = "block";
    document.getElementById("bet3").style.display = "block";
    document.getElementById("bet4").style.display = "block";
    document.getElementById("bet5").style.display = "block";
    document.getElementById("bet6").style.display = "block";
  } else if (fileName == "7.html") {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;
    var player6 = document.getElementById("player6").value;
    var player7 = document.getElementById("player7").value;
    document.getElementById("playbutton").style.display = "none";
    document.getElementById("nextbutton").style.display = "block";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("player3").style.display = "none";
    document.getElementById("player4").style.display = "none";
    document.getElementById("player5").style.display = "none";
    document.getElementById("player6").style.display = "none";
    document.getElementById("player7").style.display = "none";
    document.getElementById("name1").innerHTML = player1;
    document.getElementById("name2").innerHTML = player2;
    document.getElementById("name3").innerHTML = player3;
    document.getElementById("name4").innerHTML = player4;
    document.getElementById("name5").innerHTML = player5;
    document.getElementById("name6").innerHTML = player6;
    document.getElementById("name7").innerHTML = player7;
    document.getElementById("bet1").style.display = "block";
    document.getElementById("bet2").style.display = "block";
    document.getElementById("bet3").style.display = "block";
    document.getElementById("bet4").style.display = "block";
    document.getElementById("bet5").style.display = "block";
    document.getElementById("bet6").style.display = "block";
    document.getElementById("bet7").style.display = "block";
  }
}

function next() {
  round = round + 1;
  if (fileName == "3.html") {
    if (round == 1) {
      score1 = parseFloat(document.getElementById("bet1").value);
      score2 = parseFloat(document.getElementById("bet2").value);
      score3 = parseFloat(document.getElementById("bet3").value);
      document.getElementById("bet1").style.display = "none";
      document.getElementById("bet2").style.display = "none";
      document.getElementById("bet3").style.display = "none";
      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;
      document.getElementById("score3").innerHTML = score3;
      document.getElementById("score1").style.display = "block";
      document.getElementById("score2").style.display = "block";
      document.getElementById("score3").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet8").style.display = "block";
      document.getElementById("bet9").style.display = "block";
      document.getElementById("bet10").style.display = "block";
    } else if (round == 2) {
      score1 = parseFloat(document.getElementById("bet8").value);
      score2 = parseFloat(document.getElementById("bet9").value);
      score3 = parseFloat(document.getElementById("bet10").value);
      document.getElementById("bet8").style.display = "none";
      document.getElementById("bet9").style.display = "none";
      document.getElementById("bet10").style.display = "none";
      document.getElementById("score8").innerHTML = score1;
      document.getElementById("score9").innerHTML = score2;
      document.getElementById("score10").innerHTML = score3;
      document.getElementById("score8").style.display = "block";
      document.getElementById("score9").style.display = "block";
      document.getElementById("score10").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet15").style.display = "block";
      document.getElementById("bet16").style.display = "block";
      document.getElementById("bet17").style.display = "block";
    } else if (round == 3) {
      score1 = parseFloat(document.getElementById("bet15").value);
      score2 = parseFloat(document.getElementById("bet16").value);
      score3 = parseFloat(document.getElementById("bet17").value);
      document.getElementById("bet15").style.display = "none";
      document.getElementById("bet16").style.display = "none";
      document.getElementById("bet17").style.display = "none";
      document.getElementById("score15").innerHTML = score1;
      document.getElementById("score16").innerHTML = score2;
      document.getElementById("score17").innerHTML = score3;
      document.getElementById("score15").style.display = "block";
      document.getElementById("score16").style.display = "block";
      document.getElementById("score17").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet22").style.display = "block";
      document.getElementById("bet23").style.display = "block";
      document.getElementById("bet24").style.display = "block";
    } else if (round == 4) {
      score1 = parseFloat(document.getElementById("bet22").value);
      score2 = parseFloat(document.getElementById("bet23").value);
      score3 = parseFloat(document.getElementById("bet24").value);
      document.getElementById("bet22").style.display = "none";
      document.getElementById("bet23").style.display = "none";
      document.getElementById("bet24").style.display = "none";
      document.getElementById("score22").innerHTML = score1;
      document.getElementById("score23").innerHTML = score2;
      document.getElementById("score24").innerHTML = score3;
      document.getElementById("score22").style.display = "block";
      document.getElementById("score23").style.display = "block";
      document.getElementById("score24").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet29").style.display = "block";
      document.getElementById("bet30").style.display = "block";
      document.getElementById("bet31").style.display = "block";
    } else if (round == 5) {
      score1 = parseFloat(document.getElementById("bet29").value);
      score2 = parseFloat(document.getElementById("bet30").value);
      score3 = parseFloat(document.getElementById("bet31").value);
      document.getElementById("bet29").style.display = "none";
      document.getElementById("bet30").style.display = "none";
      document.getElementById("bet31").style.display = "none";
      document.getElementById("score29").innerHTML = score1;
      document.getElementById("score30").innerHTML = score2;
      document.getElementById("score31").innerHTML = score3;
      document.getElementById("score29").style.display = "block";
      document.getElementById("score30").style.display = "block";
      document.getElementById("score31").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet36").style.display = "block";
      document.getElementById("bet37").style.display = "block";
      document.getElementById("bet38").style.display = "block";
    } else if (round == 6) {
      score1 = parseFloat(document.getElementById("bet36").value);
      score2 = parseFloat(document.getElementById("bet37").value);
      score3 = parseFloat(document.getElementById("bet38").value);
      document.getElementById("bet36").style.display = "none";
      document.getElementById("bet37").style.display = "none";
      document.getElementById("bet38").style.display = "none";
      document.getElementById("score36").innerHTML = score1;
      document.getElementById("score37").innerHTML = score2;
      document.getElementById("score38").innerHTML = score3;
      document.getElementById("score36").style.display = "block";
      document.getElementById("score37").style.display = "block";
      document.getElementById("score38").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet43").style.display = "block";
      document.getElementById("bet44").style.display = "block";
      document.getElementById("bet45").style.display = "block";
    } else if (round == 7) {
      score1 = parseFloat(document.getElementById("bet43").value);
      score2 = parseFloat(document.getElementById("bet44").value);
      score3 = parseFloat(document.getElementById("bet45").value);
      document.getElementById("bet43").style.display = "none";
      document.getElementById("bet44").style.display = "none";
      document.getElementById("bet45").style.display = "none";
      document.getElementById("score43").innerHTML = score1;
      document.getElementById("score44").innerHTML = score2;
      document.getElementById("score45").innerHTML = score3;
      document.getElementById("score43").style.display = "block";
      document.getElementById("score44").style.display = "block";
      document.getElementById("score45").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet50").style.display = "block";
      document.getElementById("bet51").style.display = "block";
      document.getElementById("bet52").style.display = "block";
    } else if (round == 8) {
      score1 = parseFloat(document.getElementById("bet50").value);
      score2 = parseFloat(document.getElementById("bet51").value);
      score3 = parseFloat(document.getElementById("bet52").value);
      document.getElementById("bet50").style.display = "none";
      document.getElementById("bet51").style.display = "none";
      document.getElementById("bet52").style.display = "none";
      document.getElementById("score50").innerHTML = score1;
      document.getElementById("score51").innerHTML = score2;
      document.getElementById("score52").innerHTML = score3;
      document.getElementById("score50").style.display = "block";
      document.getElementById("score51").style.display = "block";
      document.getElementById("score52").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet57").style.display = "block";
      document.getElementById("bet58").style.display = "block";
      document.getElementById("bet59").style.display = "block";
    } else if (round == 9) {
      score1 = parseFloat(document.getElementById("bet57").value);
      score2 = parseFloat(document.getElementById("bet58").value);
      score3 = parseFloat(document.getElementById("bet59").value);
      document.getElementById("bet57").style.display = "none";
      document.getElementById("bet58").style.display = "none";
      document.getElementById("bet59").style.display = "none";
      document.getElementById("score57").innerHTML = score1;
      document.getElementById("score58").innerHTML = score2;
      document.getElementById("score59").innerHTML = score3;
      document.getElementById("score57").style.display = "block";
      document.getElementById("score58").style.display = "block";
      document.getElementById("score59").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet64").style.display = "block";
      document.getElementById("bet65").style.display = "block";
      document.getElementById("bet66").style.display = "block";
    } else if (round == 10) {
      score1 = parseFloat(document.getElementById("bet64").value);
      score2 = parseFloat(document.getElementById("bet65").value);
      score3 = parseFloat(document.getElementById("bet66").value);
      document.getElementById("bet64").style.display = "none";
      document.getElementById("bet65").style.display = "none";
      document.getElementById("bet66").style.display = "none";
      document.getElementById("score64").innerHTML = score1;
      document.getElementById("score65").innerHTML = score2;
      document.getElementById("score66").innerHTML = score3;
      document.getElementById("score64").style.display = "block";
      document.getElementById("score65").style.display = "block";
      document.getElementById("score66").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet71").style.display = "block";
      document.getElementById("bet72").style.display = "block";
      document.getElementById("bet73").style.display = "block";
    } else if (round == 11) {
      score1 = parseFloat(document.getElementById("bet71").value);
      score2 = parseFloat(document.getElementById("bet72").value);
      score3 = parseFloat(document.getElementById("bet73").value);
      document.getElementById("bet71").style.display = "none";
      document.getElementById("bet72").style.display = "none";
      document.getElementById("bet73").style.display = "none";
      document.getElementById("score71").innerHTML = score1;
      document.getElementById("score72").innerHTML = score2;
      document.getElementById("score73").innerHTML = score3;
      document.getElementById("score71").style.display = "block";
      document.getElementById("score72").style.display = "block";
      document.getElementById("score73").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet78").style.display = "block";
      document.getElementById("bet79").style.display = "block";
      document.getElementById("bet80").style.display = "block";
    } else if (round == 12) {
      score1 = parseFloat(document.getElementById("bet78").value);
      score2 = parseFloat(document.getElementById("bet79").value);
      score3 = parseFloat(document.getElementById("bet80").value);
      document.getElementById("bet78").style.display = "none";
      document.getElementById("bet79").style.display = "none";
      document.getElementById("bet80").style.display = "none";
      document.getElementById("score78").innerHTML = score1;
      document.getElementById("score79").innerHTML = score2;
      document.getElementById("score80").innerHTML = score3;
      document.getElementById("score78").style.display = "block";
      document.getElementById("score79").style.display = "block";
      document.getElementById("score80").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("bet85").style.display = "block";
      document.getElementById("bet86").style.display = "block";
      document.getElementById("bet87").style.display = "block";
    } else if (round == 13) {
      score1 = parseFloat(document.getElementById("bet85").value);
      score2 = parseFloat(document.getElementById("bet86").value);
      score3 = parseFloat(document.getElementById("bet87").value);
      document.getElementById("bet85").style.display = "none";
      document.getElementById("bet86").style.display = "none";
      document.getElementById("bet87").style.display = "none";
      document.getElementById("score85").innerHTML = score1;
      document.getElementById("score86").innerHTML = score2;
      document.getElementById("score87").innerHTML = score3;
      document.getElementById("score85").style.display = "block";
      document.getElementById("score86").style.display = "block";
      document.getElementById("score87").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
    }
  } else if (fileName == "4.html") {
    if (round == 1) {
      score1 = parseFloat(document.getElementById("bet1").value);
      score2 = parseFloat(document.getElementById("bet2").value);
      score3 = parseFloat(document.getElementById("bet3").value);
      score4 = parseFloat(document.getElementById("bet4").value);
      document.getElementById("bet1").style.display = "none";
      document.getElementById("bet2").style.display = "none";
      document.getElementById("bet3").style.display = "none";
      document.getElementById("bet4").style.display = "none";
      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;
      document.getElementById("score3").innerHTML = score3;
      document.getElementById("score4").innerHTML = score4;
      document.getElementById("score1").style.display = "block";
      document.getElementById("score2").style.display = "block";
      document.getElementById("score3").style.display = "block";
      document.getElementById("score4").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet8").style.display = "block";
      document.getElementById("bet9").style.display = "block";
      document.getElementById("bet10").style.display = "block";
      document.getElementById("bet11").style.display = "block";
    } else if (round == 2) {
      score1 = parseFloat(document.getElementById("bet8").value);
      score2 = parseFloat(document.getElementById("bet9").value);
      score3 = parseFloat(document.getElementById("bet10").value);
      score4 = parseFloat(document.getElementById("bet11").value);
      document.getElementById("bet8").style.display = "none";
      document.getElementById("bet9").style.display = "none";
      document.getElementById("bet10").style.display = "none";
      document.getElementById("bet11").style.display = "none";
      document.getElementById("score8").innerHTML = score1;
      document.getElementById("score9").innerHTML = score2;
      document.getElementById("score10").innerHTML = score3;
      document.getElementById("score11").innerHTML = score4;
      document.getElementById("score8").style.display = "block";
      document.getElementById("score9").style.display = "block";
      document.getElementById("score10").style.display = "block";
      document.getElementById("score11").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet15").style.display = "block";
      document.getElementById("bet16").style.display = "block";
      document.getElementById("bet17").style.display = "block";
      document.getElementById("bet18").style.display = "block";
    } else if (round == 3) {
      score1 = parseFloat(document.getElementById("bet15").value);
      score2 = parseFloat(document.getElementById("bet16").value);
      score3 = parseFloat(document.getElementById("bet17").value);
      score4 = parseFloat(document.getElementById("bet18").value);
      document.getElementById("bet15").style.display = "none";
      document.getElementById("bet16").style.display = "none";
      document.getElementById("bet17").style.display = "none";
      document.getElementById("bet18").style.display = "none";
      document.getElementById("score15").innerHTML = score1;
      document.getElementById("score16").innerHTML = score2;
      document.getElementById("score17").innerHTML = score3;
      document.getElementById("score18").innerHTML = score4;
      document.getElementById("score15").style.display = "block";
      document.getElementById("score16").style.display = "block";
      document.getElementById("score17").style.display = "block";
      document.getElementById("score18").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet22").style.display = "block";
      document.getElementById("bet23").style.display = "block";
      document.getElementById("bet24").style.display = "block";
      document.getElementById("bet25").style.display = "block";
    } else if (round == 4) {
      score1 = parseFloat(document.getElementById("bet22").value);
      score2 = parseFloat(document.getElementById("bet23").value);
      score3 = parseFloat(document.getElementById("bet24").value);
      score4 = parseFloat(document.getElementById("bet25").value);
      document.getElementById("bet22").style.display = "none";
      document.getElementById("bet23").style.display = "none";
      document.getElementById("bet24").style.display = "none";
      document.getElementById("bet25").style.display = "none";
      document.getElementById("score22").innerHTML = score1;
      document.getElementById("score23").innerHTML = score2;
      document.getElementById("score24").innerHTML = score3;
      document.getElementById("score25").innerHTML = score4;
      document.getElementById("score22").style.display = "block";
      document.getElementById("score23").style.display = "block";
      document.getElementById("score24").style.display = "block";
      document.getElementById("score25").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet29").style.display = "block";
      document.getElementById("bet30").style.display = "block";
      document.getElementById("bet31").style.display = "block";
      document.getElementById("bet32").style.display = "block";
    } else if (round == 5) {
      score1 = parseFloat(document.getElementById("bet29").value);
      score2 = parseFloat(document.getElementById("bet30").value);
      score3 = parseFloat(document.getElementById("bet31").value);
      score4 = parseFloat(document.getElementById("bet32").value);
      document.getElementById("bet29").style.display = "none";
      document.getElementById("bet30").style.display = "none";
      document.getElementById("bet31").style.display = "none";
      document.getElementById("bet32").style.display = "none";
      document.getElementById("score29").innerHTML = score1;
      document.getElementById("score30").innerHTML = score2;
      document.getElementById("score31").innerHTML = score3;
      document.getElementById("score32").innerHTML = score4;
      document.getElementById("score29").style.display = "block";
      document.getElementById("score30").style.display = "block";
      document.getElementById("score31").style.display = "block";
      document.getElementById("score32").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet36").style.display = "block";
      document.getElementById("bet37").style.display = "block";
      document.getElementById("bet38").style.display = "block";
      document.getElementById("bet39").style.display = "block";
    } else if (round == 6) {
      score1 = parseFloat(document.getElementById("bet36").value);
      score2 = parseFloat(document.getElementById("bet37").value);
      score3 = parseFloat(document.getElementById("bet38").value);
      score4 = parseFloat(document.getElementById("bet39").value);
      document.getElementById("bet36").style.display = "none";
      document.getElementById("bet37").style.display = "none";
      document.getElementById("bet38").style.display = "none";
      document.getElementById("bet39").style.display = "none";
      document.getElementById("score36").innerHTML = score1;
      document.getElementById("score37").innerHTML = score2;
      document.getElementById("score38").innerHTML = score3;
      document.getElementById("score39").innerHTML = score4;
      document.getElementById("score36").style.display = "block";
      document.getElementById("score37").style.display = "block";
      document.getElementById("score38").style.display = "block";
      document.getElementById("score39").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet43").style.display = "block";
      document.getElementById("bet44").style.display = "block";
      document.getElementById("bet45").style.display = "block";
      document.getElementById("bet46").style.display = "block";
    } else if (round == 7) {
      score1 = parseFloat(document.getElementById("bet43").value);
      score2 = parseFloat(document.getElementById("bet44").value);
      score3 = parseFloat(document.getElementById("bet45").value);
      score4 = parseFloat(document.getElementById("bet46").value);
      document.getElementById("bet43").style.display = "none";
      document.getElementById("bet44").style.display = "none";
      document.getElementById("bet45").style.display = "none";
      document.getElementById("bet46").style.display = "none";
      document.getElementById("score43").innerHTML = score1;
      document.getElementById("score44").innerHTML = score2;
      document.getElementById("score45").innerHTML = score3;
      document.getElementById("score46").innerHTML = score4;
      document.getElementById("score43").style.display = "block";
      document.getElementById("score44").style.display = "block";
      document.getElementById("score45").style.display = "block";
      document.getElementById("score46").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet50").style.display = "block";
      document.getElementById("bet51").style.display = "block";
      document.getElementById("bet52").style.display = "block";
      document.getElementById("bet53").style.display = "block";
    } else if (round == 8) {
      score1 = parseFloat(document.getElementById("bet50").value);
      score2 = parseFloat(document.getElementById("bet51").value);
      score3 = parseFloat(document.getElementById("bet52").value);
      score4 = parseFloat(document.getElementById("bet53").value);
      document.getElementById("bet50").style.display = "none";
      document.getElementById("bet51").style.display = "none";
      document.getElementById("bet52").style.display = "none";
      document.getElementById("bet53").style.display = "none";
      document.getElementById("score50").innerHTML = score1;
      document.getElementById("score51").innerHTML = score2;
      document.getElementById("score52").innerHTML = score3;
      document.getElementById("score53").innerHTML = score4;
      document.getElementById("score50").style.display = "block";
      document.getElementById("score51").style.display = "block";
      document.getElementById("score52").style.display = "block";
      document.getElementById("score53").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet57").style.display = "block";
      document.getElementById("bet58").style.display = "block";
      document.getElementById("bet59").style.display = "block";
      document.getElementById("bet60").style.display = "block";
    } else if (round == 9) {
      score1 = parseFloat(document.getElementById("bet57").value);
      score2 = parseFloat(document.getElementById("bet58").value);
      score3 = parseFloat(document.getElementById("bet59").value);
      score4 = parseFloat(document.getElementById("bet60").value);
      document.getElementById("bet57").style.display = "none";
      document.getElementById("bet58").style.display = "none";
      document.getElementById("bet59").style.display = "none";
      document.getElementById("bet60").style.display = "none";
      document.getElementById("score57").innerHTML = score1;
      document.getElementById("score58").innerHTML = score2;
      document.getElementById("score59").innerHTML = score3;
      document.getElementById("score60").innerHTML = score4;
      document.getElementById("score57").style.display = "block";
      document.getElementById("score58").style.display = "block";
      document.getElementById("score59").style.display = "block";
      document.getElementById("score60").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet64").style.display = "block";
      document.getElementById("bet65").style.display = "block";
      document.getElementById("bet66").style.display = "block";
      document.getElementById("bet67").style.display = "block";
    } else if (round == 10) {
      score1 = parseFloat(document.getElementById("bet64").value);
      score2 = parseFloat(document.getElementById("bet65").value);
      score3 = parseFloat(document.getElementById("bet66").value);
      score4 = parseFloat(document.getElementById("bet67").value);
      document.getElementById("bet64").style.display = "none";
      document.getElementById("bet65").style.display = "none";
      document.getElementById("bet66").style.display = "none";
      document.getElementById("bet67").style.display = "none";
      document.getElementById("score64").innerHTML = score1;
      document.getElementById("score65").innerHTML = score2;
      document.getElementById("score66").innerHTML = score3;
      document.getElementById("score67").innerHTML = score4;
      document.getElementById("score64").style.display = "block";
      document.getElementById("score65").style.display = "block";
      document.getElementById("score66").style.display = "block";
      document.getElementById("score67").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet71").style.display = "block";
      document.getElementById("bet72").style.display = "block";
      document.getElementById("bet73").style.display = "block";
      document.getElementById("bet74").style.display = "block";
    } else if (round == 11) {
      score1 = parseFloat(document.getElementById("bet71").value);
      score2 = parseFloat(document.getElementById("bet72").value);
      score3 = parseFloat(document.getElementById("bet73").value);
      score4 = parseFloat(document.getElementById("bet74").value);
      document.getElementById("bet71").style.display = "none";
      document.getElementById("bet72").style.display = "none";
      document.getElementById("bet73").style.display = "none";
      document.getElementById("bet74").style.display = "none";
      document.getElementById("score71").innerHTML = score1;
      document.getElementById("score72").innerHTML = score2;
      document.getElementById("score73").innerHTML = score3;
      document.getElementById("score74").innerHTML = score4;
      document.getElementById("score71").style.display = "block";
      document.getElementById("score72").style.display = "block";
      document.getElementById("score73").style.display = "block";
      document.getElementById("score74").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet78").style.display = "block";
      document.getElementById("bet79").style.display = "block";
      document.getElementById("bet80").style.display = "block";
      document.getElementById("bet81").style.display = "block";
    } else if (round == 12) {
      score1 = parseFloat(document.getElementById("bet78").value);
      score2 = parseFloat(document.getElementById("bet79").value);
      score3 = parseFloat(document.getElementById("bet80").value);
      score4 = parseFloat(document.getElementById("bet81").value);
      document.getElementById("bet78").style.display = "none";
      document.getElementById("bet79").style.display = "none";
      document.getElementById("bet80").style.display = "none";
      document.getElementById("bet81").style.display = "none";
      document.getElementById("score78").innerHTML = score1;
      document.getElementById("score79").innerHTML = score2;
      document.getElementById("score80").innerHTML = score3;
      document.getElementById("score81").innerHTML = score4;
      document.getElementById("score78").style.display = "block";
      document.getElementById("score79").style.display = "block";
      document.getElementById("score80").style.display = "block";
      document.getElementById("score81").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("bet85").style.display = "block";
      document.getElementById("bet86").style.display = "block";
      document.getElementById("bet87").style.display = "block";
      document.getElementById("bet88").style.display = "block";
    } else if (round == 13) {
      score1 = parseFloat(document.getElementById("bet85").value);
      score2 = parseFloat(document.getElementById("bet86").value);
      score3 = parseFloat(document.getElementById("bet87").value);
      score4 = parseFloat(document.getElementById("bet88").value);
      document.getElementById("bet85").style.display = "none";
      document.getElementById("bet86").style.display = "none";
      document.getElementById("bet87").style.display = "none";
      document.getElementById("bet88").style.display = "none";
      document.getElementById("score85").innerHTML = score1;
      document.getElementById("score86").innerHTML = score2;
      document.getElementById("score87").innerHTML = score3;
      document.getElementById("score88").innerHTML = score4;
      document.getElementById("score85").style.display = "block";
      document.getElementById("score86").style.display = "block";
      document.getElementById("score87").style.display = "block";
      document.getElementById("score88").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
    }
  } else if (fileName == "5.html") {
    if (round == 1) {
      score1 = parseFloat(document.getElementById("bet1").value);
      score2 = parseFloat(document.getElementById("bet2").value);
      score3 = parseFloat(document.getElementById("bet3").value);
      score4 = parseFloat(document.getElementById("bet4").value);
      score5 = parseFloat(document.getElementById("bet5").value);
      document.getElementById("bet1").style.display = "none";
      document.getElementById("bet2").style.display = "none";
      document.getElementById("bet3").style.display = "none";
      document.getElementById("bet4").style.display = "none";
      document.getElementById("bet5").style.display = "none";
      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;
      document.getElementById("score3").innerHTML = score3;
      document.getElementById("score4").innerHTML = score4;
      document.getElementById("score5").innerHTML = score5;
      document.getElementById("score1").style.display = "block";
      document.getElementById("score2").style.display = "block";
      document.getElementById("score3").style.display = "block";
      document.getElementById("score4").style.display = "block";
      document.getElementById("score5").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet8").style.display = "block";
      document.getElementById("bet9").style.display = "block";
      document.getElementById("bet10").style.display = "block";
      document.getElementById("bet11").style.display = "block";
      document.getElementById("bet12").style.display = "block";
    } else if (round == 2) {
      score1 = parseFloat(document.getElementById("bet8").value);
      score2 = parseFloat(document.getElementById("bet9").value);
      score3 = parseFloat(document.getElementById("bet10").value);
      score4 = parseFloat(document.getElementById("bet11").value);
      score5 = parseFloat(document.getElementById("bet12").value);
      document.getElementById("bet8").style.display = "none";
      document.getElementById("bet9").style.display = "none";
      document.getElementById("bet10").style.display = "none";
      document.getElementById("bet11").style.display = "none";
      document.getElementById("bet12").style.display = "none";
      document.getElementById("score8").innerHTML = score1;
      document.getElementById("score9").innerHTML = score2;
      document.getElementById("score10").innerHTML = score3;
      document.getElementById("score11").innerHTML = score4;
      document.getElementById("score12").innerHTML = score5;
      document.getElementById("score8").style.display = "block";
      document.getElementById("score9").style.display = "block";
      document.getElementById("score10").style.display = "block";
      document.getElementById("score11").style.display = "block";
      document.getElementById("score12").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet15").style.display = "block";
      document.getElementById("bet16").style.display = "block";
      document.getElementById("bet17").style.display = "block";
      document.getElementById("bet18").style.display = "block";
      document.getElementById("bet19").style.display = "block";
    } else if (round == 3) {
      score1 = parseFloat(document.getElementById("bet15").value);
      score2 = parseFloat(document.getElementById("bet16").value);
      score3 = parseFloat(document.getElementById("bet17").value);
      score4 = parseFloat(document.getElementById("bet18").value);
      score5 = parseFloat(document.getElementById("bet19").value);
      document.getElementById("bet15").style.display = "none";
      document.getElementById("bet16").style.display = "none";
      document.getElementById("bet17").style.display = "none";
      document.getElementById("bet18").style.display = "none";
      document.getElementById("bet19").style.display = "none";
      document.getElementById("score15").innerHTML = score1;
      document.getElementById("score16").innerHTML = score2;
      document.getElementById("score17").innerHTML = score3;
      document.getElementById("score18").innerHTML = score4;
      document.getElementById("score19").innerHTML = score5;
      document.getElementById("score15").style.display = "block";
      document.getElementById("score16").style.display = "block";
      document.getElementById("score17").style.display = "block";
      document.getElementById("score18").style.display = "block";
      document.getElementById("score19").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet22").style.display = "block";
      document.getElementById("bet23").style.display = "block";
      document.getElementById("bet24").style.display = "block";
      document.getElementById("bet25").style.display = "block";
      document.getElementById("bet26").style.display = "block";
    } else if (round == 4) {
      score1 = parseFloat(document.getElementById("bet22").value);
      score2 = parseFloat(document.getElementById("bet23").value);
      score3 = parseFloat(document.getElementById("bet24").value);
      score4 = parseFloat(document.getElementById("bet25").value);
      score5 = parseFloat(document.getElementById("bet26").value);
      document.getElementById("bet22").style.display = "none";
      document.getElementById("bet23").style.display = "none";
      document.getElementById("bet24").style.display = "none";
      document.getElementById("bet25").style.display = "none";
      document.getElementById("bet26").style.display = "none";
      document.getElementById("score22").innerHTML = score1;
      document.getElementById("score23").innerHTML = score2;
      document.getElementById("score24").innerHTML = score3;
      document.getElementById("score25").innerHTML = score4;
      document.getElementById("score26").innerHTML = score5;
      document.getElementById("score22").style.display = "block";
      document.getElementById("score23").style.display = "block";
      document.getElementById("score24").style.display = "block";
      document.getElementById("score25").style.display = "block";
      document.getElementById("score26").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet29").style.display = "block";
      document.getElementById("bet30").style.display = "block";
      document.getElementById("bet31").style.display = "block";
      document.getElementById("bet32").style.display = "block";
      document.getElementById("bet33").style.display = "block";
    } else if (round == 5) {
      score1 = parseFloat(document.getElementById("bet29").value);
      score2 = parseFloat(document.getElementById("bet30").value);
      score3 = parseFloat(document.getElementById("bet31").value);
      score4 = parseFloat(document.getElementById("bet32").value);
      score5 = parseFloat(document.getElementById("bet33").value);
      document.getElementById("bet29").style.display = "none";
      document.getElementById("bet30").style.display = "none";
      document.getElementById("bet31").style.display = "none";
      document.getElementById("bet32").style.display = "none";
      document.getElementById("bet33").style.display = "none";
      document.getElementById("score29").innerHTML = score1;
      document.getElementById("score30").innerHTML = score2;
      document.getElementById("score31").innerHTML = score3;
      document.getElementById("score32").innerHTML = score4;
      document.getElementById("score33").innerHTML = score5;
      document.getElementById("score29").style.display = "block";
      document.getElementById("score30").style.display = "block";
      document.getElementById("score31").style.display = "block";
      document.getElementById("score32").style.display = "block";
      document.getElementById("score33").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet36").style.display = "block";
      document.getElementById("bet37").style.display = "block";
      document.getElementById("bet38").style.display = "block";
      document.getElementById("bet39").style.display = "block";
      document.getElementById("bet40").style.display = "block";
    } else if (round == 6) {
      score1 = parseFloat(document.getElementById("bet36").value);
      score2 = parseFloat(document.getElementById("bet37").value);
      score3 = parseFloat(document.getElementById("bet38").value);
      score4 = parseFloat(document.getElementById("bet39").value);
      score5 = parseFloat(document.getElementById("bet40").value);
      document.getElementById("bet36").style.display = "none";
      document.getElementById("bet37").style.display = "none";
      document.getElementById("bet38").style.display = "none";
      document.getElementById("bet39").style.display = "none";
      document.getElementById("bet40").style.display = "none";
      document.getElementById("score36").innerHTML = score1;
      document.getElementById("score37").innerHTML = score2;
      document.getElementById("score38").innerHTML = score3;
      document.getElementById("score39").innerHTML = score4;
      document.getElementById("score40").innerHTML = score5;
      document.getElementById("score36").style.display = "block";
      document.getElementById("score37").style.display = "block";
      document.getElementById("score38").style.display = "block";
      document.getElementById("score39").style.display = "block";
      document.getElementById("score40").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet43").style.display = "block";
      document.getElementById("bet44").style.display = "block";
      document.getElementById("bet45").style.display = "block";
      document.getElementById("bet46").style.display = "block";
      document.getElementById("bet47").style.display = "block";
    } else if (round == 7) {
      score1 = parseFloat(document.getElementById("bet43").value);
      score2 = parseFloat(document.getElementById("bet44").value);
      score3 = parseFloat(document.getElementById("bet45").value);
      score4 = parseFloat(document.getElementById("bet46").value);
      score5 = parseFloat(document.getElementById("bet47").value);
      document.getElementById("bet43").style.display = "none";
      document.getElementById("bet44").style.display = "none";
      document.getElementById("bet45").style.display = "none";
      document.getElementById("bet46").style.display = "none";
      document.getElementById("bet47").style.display = "none";
      document.getElementById("score43").innerHTML = score1;
      document.getElementById("score44").innerHTML = score2;
      document.getElementById("score45").innerHTML = score3;
      document.getElementById("score46").innerHTML = score4;
      document.getElementById("score47").innerHTML = score5;
      document.getElementById("score43").style.display = "block";
      document.getElementById("score44").style.display = "block";
      document.getElementById("score45").style.display = "block";
      document.getElementById("score46").style.display = "block";
      document.getElementById("score47").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet50").style.display = "block";
      document.getElementById("bet51").style.display = "block";
      document.getElementById("bet52").style.display = "block";
      document.getElementById("bet53").style.display = "block";
      document.getElementById("bet54").style.display = "block";
    } else if (round == 8) {
      score1 = parseFloat(document.getElementById("bet50").value);
      score2 = parseFloat(document.getElementById("bet51").value);
      score3 = parseFloat(document.getElementById("bet52").value);
      score4 = parseFloat(document.getElementById("bet53").value);
      score5 = parseFloat(document.getElementById("bet54").value);
      document.getElementById("bet50").style.display = "none";
      document.getElementById("bet51").style.display = "none";
      document.getElementById("bet52").style.display = "none";
      document.getElementById("bet53").style.display = "none";
      document.getElementById("bet54").style.display = "none";
      document.getElementById("score50").innerHTML = score1;
      document.getElementById("score51").innerHTML = score2;
      document.getElementById("score52").innerHTML = score3;
      document.getElementById("score53").innerHTML = score4;
      document.getElementById("score54").innerHTML = score5;
      document.getElementById("score50").style.display = "block";
      document.getElementById("score51").style.display = "block";
      document.getElementById("score52").style.display = "block";
      document.getElementById("score53").style.display = "block";
      document.getElementById("score54").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet57").style.display = "block";
      document.getElementById("bet58").style.display = "block";
      document.getElementById("bet59").style.display = "block";
      document.getElementById("bet60").style.display = "block";
      document.getElementById("bet61").style.display = "block";
    } else if (round == 9) {
      score1 = parseFloat(document.getElementById("bet57").value);
      score2 = parseFloat(document.getElementById("bet58").value);
      score3 = parseFloat(document.getElementById("bet59").value);
      score4 = parseFloat(document.getElementById("bet60").value);
      score5 = parseFloat(document.getElementById("bet61").value);
      document.getElementById("bet57").style.display = "none";
      document.getElementById("bet58").style.display = "none";
      document.getElementById("bet59").style.display = "none";
      document.getElementById("bet60").style.display = "none";
      document.getElementById("bet61").style.display = "none";
      document.getElementById("score57").innerHTML = score1;
      document.getElementById("score58").innerHTML = score2;
      document.getElementById("score59").innerHTML = score3;
      document.getElementById("score60").innerHTML = score4;
      document.getElementById("score61").innerHTML = score5;
      document.getElementById("score57").style.display = "block";
      document.getElementById("score58").style.display = "block";
      document.getElementById("score59").style.display = "block";
      document.getElementById("score60").style.display = "block";
      document.getElementById("score61").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet64").style.display = "block";
      document.getElementById("bet65").style.display = "block";
      document.getElementById("bet66").style.display = "block";
      document.getElementById("bet67").style.display = "block";
      document.getElementById("bet68").style.display = "block";
    } else if (round == 10) {
      score1 = parseFloat(document.getElementById("bet64").value);
      score2 = parseFloat(document.getElementById("bet65").value);
      score3 = parseFloat(document.getElementById("bet66").value);
      score4 = parseFloat(document.getElementById("bet67").value);
      score5 = parseFloat(document.getElementById("bet68").value);
      document.getElementById("bet64").style.display = "none";
      document.getElementById("bet65").style.display = "none";
      document.getElementById("bet66").style.display = "none";
      document.getElementById("bet67").style.display = "none";
      document.getElementById("bet68").style.display = "none";
      document.getElementById("score64").innerHTML = score1;
      document.getElementById("score65").innerHTML = score2;
      document.getElementById("score66").innerHTML = score3;
      document.getElementById("score67").innerHTML = score4;
      document.getElementById("score68").innerHTML = score5;
      document.getElementById("score64").style.display = "block";
      document.getElementById("score65").style.display = "block";
      document.getElementById("score66").style.display = "block";
      document.getElementById("score67").style.display = "block";
      document.getElementById("score68").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet71").style.display = "block";
      document.getElementById("bet72").style.display = "block";
      document.getElementById("bet73").style.display = "block";
      document.getElementById("bet74").style.display = "block";
      document.getElementById("bet75").style.display = "block";
    } else if (round == 11) {
      score1 = parseFloat(document.getElementById("bet71").value);
      score2 = parseFloat(document.getElementById("bet72").value);
      score3 = parseFloat(document.getElementById("bet73").value);
      score4 = parseFloat(document.getElementById("bet74").value);
      score5 = parseFloat(document.getElementById("bet75").value);
      document.getElementById("bet71").style.display = "none";
      document.getElementById("bet72").style.display = "none";
      document.getElementById("bet73").style.display = "none";
      document.getElementById("bet74").style.display = "none";
      document.getElementById("bet75").style.display = "none";
      document.getElementById("score71").innerHTML = score1;
      document.getElementById("score72").innerHTML = score2;
      document.getElementById("score73").innerHTML = score3;
      document.getElementById("score74").innerHTML = score4;
      document.getElementById("score75").innerHTML = score5;
      document.getElementById("score71").style.display = "block";
      document.getElementById("score72").style.display = "block";
      document.getElementById("score73").style.display = "block";
      document.getElementById("score74").style.display = "block";
      document.getElementById("score75").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet78").style.display = "block";
      document.getElementById("bet79").style.display = "block";
      document.getElementById("bet80").style.display = "block";
      document.getElementById("bet81").style.display = "block";
      document.getElementById("bet82").style.display = "block";
    } else if (round == 12) {
      score1 = parseFloat(document.getElementById("bet78").value);
      score2 = parseFloat(document.getElementById("bet79").value);
      score3 = parseFloat(document.getElementById("bet80").value);
      score4 = parseFloat(document.getElementById("bet81").value);
      score5 = parseFloat(document.getElementById("bet82").value);
      document.getElementById("bet78").style.display = "none";
      document.getElementById("bet79").style.display = "none";
      document.getElementById("bet80").style.display = "none";
      document.getElementById("bet81").style.display = "none";
      document.getElementById("bet82").style.display = "none";
      document.getElementById("score78").innerHTML = score1;
      document.getElementById("score79").innerHTML = score2;
      document.getElementById("score80").innerHTML = score3;
      document.getElementById("score81").innerHTML = score4;
      document.getElementById("score82").innerHTML = score5;
      document.getElementById("score78").style.display = "block";
      document.getElementById("score79").style.display = "block";
      document.getElementById("score80").style.display = "block";
      document.getElementById("score81").style.display = "block";
      document.getElementById("score82").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("bet85").style.display = "block";
      document.getElementById("bet86").style.display = "block";
      document.getElementById("bet87").style.display = "block";
      document.getElementById("bet88").style.display = "block";
      document.getElementById("bet89").style.display = "block";
    } else if (round == 13) {
      score1 = parseFloat(document.getElementById("bet85").value);
      score2 = parseFloat(document.getElementById("bet86").value);
      score3 = parseFloat(document.getElementById("bet87").value);
      score4 = parseFloat(document.getElementById("bet88").value);
      score5 = parseFloat(document.getElementById("bet89").value);
      document.getElementById("bet85").style.display = "none";
      document.getElementById("bet86").style.display = "none";
      document.getElementById("bet87").style.display = "none";
      document.getElementById("bet88").style.display = "none";
      document.getElementById("bet89").style.display = "none";
      document.getElementById("score85").innerHTML = score1;
      document.getElementById("score86").innerHTML = score2;
      document.getElementById("score87").innerHTML = score3;
      document.getElementById("score88").innerHTML = score4;
      document.getElementById("score89").innerHTML = score5;
      document.getElementById("score85").style.display = "block";
      document.getElementById("score86").style.display = "block";
      document.getElementById("score87").style.display = "block";
      document.getElementById("score88").style.display = "block";
      document.getElementById("score89").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
    }
  } else if (fileName == "6.html") {
    if (round == 1) {
      score1 = parseFloat(document.getElementById("bet1").value);
      score2 = parseFloat(document.getElementById("bet2").value);
      score3 = parseFloat(document.getElementById("bet3").value);
      score4 = parseFloat(document.getElementById("bet4").value);
      score5 = parseFloat(document.getElementById("bet5").value);
      score6 = parseFloat(document.getElementById("bet6").value);
      document.getElementById("bet1").style.display = "none";
      document.getElementById("bet2").style.display = "none";
      document.getElementById("bet3").style.display = "none";
      document.getElementById("bet4").style.display = "none";
      document.getElementById("bet5").style.display = "none";
      document.getElementById("bet6").style.display = "none";
      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;
      document.getElementById("score3").innerHTML = score3;
      document.getElementById("score4").innerHTML = score4;
      document.getElementById("score5").innerHTML = score5;
      document.getElementById("score6").innerHTML = score6;
      document.getElementById("score1").style.display = "block";
      document.getElementById("score2").style.display = "block";
      document.getElementById("score3").style.display = "block";
      document.getElementById("score4").style.display = "block";
      document.getElementById("score5").style.display = "block";
      document.getElementById("score6").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet8").style.display = "block";
      document.getElementById("bet9").style.display = "block";
      document.getElementById("bet10").style.display = "block";
      document.getElementById("bet11").style.display = "block";
      document.getElementById("bet12").style.display = "block";
      document.getElementById("bet13").style.display = "block";
    } else if (round == 2) {
      score1 = parseFloat(document.getElementById("bet8").value);
      score2 = parseFloat(document.getElementById("bet9").value);
      score3 = parseFloat(document.getElementById("bet10").value);
      score4 = parseFloat(document.getElementById("bet11").value);
      score5 = parseFloat(document.getElementById("bet12").value);
      score6 = parseFloat(document.getElementById("bet13").value);
      document.getElementById("bet8").style.display = "none";
      document.getElementById("bet9").style.display = "none";
      document.getElementById("bet10").style.display = "none";
      document.getElementById("bet11").style.display = "none";
      document.getElementById("bet12").style.display = "none";
      document.getElementById("bet13").style.display = "none";
      document.getElementById("score8").innerHTML = score1;
      document.getElementById("score9").innerHTML = score2;
      document.getElementById("score10").innerHTML = score3;
      document.getElementById("score11").innerHTML = score4;
      document.getElementById("score12").innerHTML = score5;
      document.getElementById("score13").innerHTML = score6;
      document.getElementById("score8").style.display = "block";
      document.getElementById("score9").style.display = "block";
      document.getElementById("score10").style.display = "block";
      document.getElementById("score11").style.display = "block";
      document.getElementById("score12").style.display = "block";
      document.getElementById("score13").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet15").style.display = "block";
      document.getElementById("bet16").style.display = "block";
      document.getElementById("bet17").style.display = "block";
      document.getElementById("bet18").style.display = "block";
      document.getElementById("bet19").style.display = "block";
      document.getElementById("bet20").style.display = "block";
    } else if (round == 3) {
      score1 = parseFloat(document.getElementById("bet15").value);
      score2 = parseFloat(document.getElementById("bet16").value);
      score3 = parseFloat(document.getElementById("bet17").value);
      score4 = parseFloat(document.getElementById("bet18").value);
      score5 = parseFloat(document.getElementById("bet19").value);
      score6 = parseFloat(document.getElementById("bet20").value);
      document.getElementById("bet15").style.display = "none";
      document.getElementById("bet16").style.display = "none";
      document.getElementById("bet17").style.display = "none";
      document.getElementById("bet18").style.display = "none";
      document.getElementById("bet19").style.display = "none";
      document.getElementById("bet20").style.display = "none";
      document.getElementById("score15").innerHTML = score1;
      document.getElementById("score16").innerHTML = score2;
      document.getElementById("score17").innerHTML = score3;
      document.getElementById("score18").innerHTML = score4;
      document.getElementById("score19").innerHTML = score5;
      document.getElementById("score20").innerHTML = score6;
      document.getElementById("score15").style.display = "block";
      document.getElementById("score16").style.display = "block";
      document.getElementById("score17").style.display = "block";
      document.getElementById("score18").style.display = "block";
      document.getElementById("score19").style.display = "block";
      document.getElementById("score20").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet22").style.display = "block";
      document.getElementById("bet23").style.display = "block";
      document.getElementById("bet24").style.display = "block";
      document.getElementById("bet25").style.display = "block";
      document.getElementById("bet26").style.display = "block";
      document.getElementById("bet27").style.display = "block";
    } else if (round == 4) {
      score1 = parseFloat(document.getElementById("bet22").value);
      score2 = parseFloat(document.getElementById("bet23").value);
      score3 = parseFloat(document.getElementById("bet24").value);
      score4 = parseFloat(document.getElementById("bet25").value);
      score5 = parseFloat(document.getElementById("bet26").value);
      score6 = parseFloat(document.getElementById("bet27").value);
      document.getElementById("bet22").style.display = "none";
      document.getElementById("bet23").style.display = "none";
      document.getElementById("bet24").style.display = "none";
      document.getElementById("bet25").style.display = "none";
      document.getElementById("bet26").style.display = "none";
      document.getElementById("bet27").style.display = "none";
      document.getElementById("score22").innerHTML = score1;
      document.getElementById("score23").innerHTML = score2;
      document.getElementById("score24").innerHTML = score3;
      document.getElementById("score25").innerHTML = score4;
      document.getElementById("score26").innerHTML = score5;
      document.getElementById("score27").innerHTML = score6;
      document.getElementById("score22").style.display = "block";
      document.getElementById("score23").style.display = "block";
      document.getElementById("score24").style.display = "block";
      document.getElementById("score25").style.display = "block";
      document.getElementById("score26").style.display = "block";
      document.getElementById("score27").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet29").style.display = "block";
      document.getElementById("bet30").style.display = "block";
      document.getElementById("bet31").style.display = "block";
      document.getElementById("bet32").style.display = "block";
      document.getElementById("bet33").style.display = "block";
      document.getElementById("bet34").style.display = "block";
    } else if (round == 5) {
      score1 = parseFloat(document.getElementById("bet29").value);
      score2 = parseFloat(document.getElementById("bet30").value);
      score3 = parseFloat(document.getElementById("bet31").value);
      score4 = parseFloat(document.getElementById("bet32").value);
      score5 = parseFloat(document.getElementById("bet33").value);
      score6 = parseFloat(document.getElementById("bet34").value);
      document.getElementById("bet29").style.display = "none";
      document.getElementById("bet30").style.display = "none";
      document.getElementById("bet31").style.display = "none";
      document.getElementById("bet32").style.display = "none";
      document.getElementById("bet33").style.display = "none";
      document.getElementById("bet34").style.display = "none";
      document.getElementById("score29").innerHTML = score1;
      document.getElementById("score30").innerHTML = score2;
      document.getElementById("score31").innerHTML = score3;
      document.getElementById("score32").innerHTML = score4;
      document.getElementById("score33").innerHTML = score5;
      document.getElementById("score34").innerHTML = score6;
      document.getElementById("score29").style.display = "block";
      document.getElementById("score30").style.display = "block";
      document.getElementById("score31").style.display = "block";
      document.getElementById("score32").style.display = "block";
      document.getElementById("score33").style.display = "block";
      document.getElementById("score34").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet36").style.display = "block";
      document.getElementById("bet37").style.display = "block";
      document.getElementById("bet38").style.display = "block";
      document.getElementById("bet39").style.display = "block";
      document.getElementById("bet40").style.display = "block";
      document.getElementById("bet41").style.display = "block";
    } else if (round == 6) {
      score1 = parseFloat(document.getElementById("bet36").value);
      score2 = parseFloat(document.getElementById("bet37").value);
      score3 = parseFloat(document.getElementById("bet38").value);
      score4 = parseFloat(document.getElementById("bet39").value);
      score5 = parseFloat(document.getElementById("bet40").value);
      score6 = parseFloat(document.getElementById("bet41").value);
      document.getElementById("bet36").style.display = "none";
      document.getElementById("bet37").style.display = "none";
      document.getElementById("bet38").style.display = "none";
      document.getElementById("bet39").style.display = "none";
      document.getElementById("bet40").style.display = "none";
      document.getElementById("bet41").style.display = "none";
      document.getElementById("score36").innerHTML = score1;
      document.getElementById("score37").innerHTML = score2;
      document.getElementById("score38").innerHTML = score3;
      document.getElementById("score39").innerHTML = score4;
      document.getElementById("score40").innerHTML = score5;
      document.getElementById("score41").innerHTML = score6;
      document.getElementById("score36").style.display = "block";
      document.getElementById("score37").style.display = "block";
      document.getElementById("score38").style.display = "block";
      document.getElementById("score39").style.display = "block";
      document.getElementById("score40").style.display = "block";
      document.getElementById("score41").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet43").style.display = "block";
      document.getElementById("bet44").style.display = "block";
      document.getElementById("bet45").style.display = "block";
      document.getElementById("bet46").style.display = "block";
      document.getElementById("bet47").style.display = "block";
      document.getElementById("bet48").style.display = "block";
    } else if (round == 7) {
      score1 = parseFloat(document.getElementById("bet43").value);
      score2 = parseFloat(document.getElementById("bet44").value);
      score3 = parseFloat(document.getElementById("bet45").value);
      score4 = parseFloat(document.getElementById("bet46").value);
      score5 = parseFloat(document.getElementById("bet47").value);
      score6 = parseFloat(document.getElementById("bet48").value);
      document.getElementById("bet43").style.display = "none";
      document.getElementById("bet44").style.display = "none";
      document.getElementById("bet45").style.display = "none";
      document.getElementById("bet46").style.display = "none";
      document.getElementById("bet47").style.display = "none";
      document.getElementById("bet48").style.display = "none";
      document.getElementById("score43").innerHTML = score1;
      document.getElementById("score44").innerHTML = score2;
      document.getElementById("score45").innerHTML = score3;
      document.getElementById("score46").innerHTML = score4;
      document.getElementById("score47").innerHTML = score5;
      document.getElementById("score48").innerHTML = score6;
      document.getElementById("score43").style.display = "block";
      document.getElementById("score44").style.display = "block";
      document.getElementById("score45").style.display = "block";
      document.getElementById("score46").style.display = "block";
      document.getElementById("score47").style.display = "block";
      document.getElementById("score48").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet50").style.display = "block";
      document.getElementById("bet51").style.display = "block";
      document.getElementById("bet52").style.display = "block";
      document.getElementById("bet53").style.display = "block";
      document.getElementById("bet54").style.display = "block";
      document.getElementById("bet55").style.display = "block";
    } else if (round == 8) {
      score1 = parseFloat(document.getElementById("bet50").value);
      score2 = parseFloat(document.getElementById("bet51").value);
      score3 = parseFloat(document.getElementById("bet52").value);
      score4 = parseFloat(document.getElementById("bet53").value);
      score5 = parseFloat(document.getElementById("bet54").value);
      score6 = parseFloat(document.getElementById("bet55").value);
      document.getElementById("bet50").style.display = "none";
      document.getElementById("bet51").style.display = "none";
      document.getElementById("bet52").style.display = "none";
      document.getElementById("bet53").style.display = "none";
      document.getElementById("bet54").style.display = "none";
      document.getElementById("bet55").style.display = "none";
      document.getElementById("score50").innerHTML = score1;
      document.getElementById("score51").innerHTML = score2;
      document.getElementById("score52").innerHTML = score3;
      document.getElementById("score53").innerHTML = score4;
      document.getElementById("score54").innerHTML = score5;
      document.getElementById("score55").innerHTML = score6;
      document.getElementById("score50").style.display = "block";
      document.getElementById("score51").style.display = "block";
      document.getElementById("score52").style.display = "block";
      document.getElementById("score53").style.display = "block";
      document.getElementById("score54").style.display = "block";
      document.getElementById("score55").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet57").style.display = "block";
      document.getElementById("bet58").style.display = "block";
      document.getElementById("bet59").style.display = "block";
      document.getElementById("bet60").style.display = "block";
      document.getElementById("bet61").style.display = "block";
      document.getElementById("bet62").style.display = "block";
    } else if (round == 9) {
      score1 = parseFloat(document.getElementById("bet57").value);
      score2 = parseFloat(document.getElementById("bet58").value);
      score3 = parseFloat(document.getElementById("bet59").value);
      score4 = parseFloat(document.getElementById("bet60").value);
      score5 = parseFloat(document.getElementById("bet61").value);
      score6 = parseFloat(document.getElementById("bet62").value);
      document.getElementById("bet57").style.display = "none";
      document.getElementById("bet58").style.display = "none";
      document.getElementById("bet59").style.display = "none";
      document.getElementById("bet60").style.display = "none";
      document.getElementById("bet61").style.display = "none";
      document.getElementById("bet62").style.display = "none";
      document.getElementById("score57").innerHTML = score1;
      document.getElementById("score58").innerHTML = score2;
      document.getElementById("score59").innerHTML = score3;
      document.getElementById("score60").innerHTML = score4;
      document.getElementById("score61").innerHTML = score5;
      document.getElementById("score62").innerHTML = score6;
      document.getElementById("score57").style.display = "block";
      document.getElementById("score58").style.display = "block";
      document.getElementById("score59").style.display = "block";
      document.getElementById("score60").style.display = "block";
      document.getElementById("score61").style.display = "block";
      document.getElementById("score62").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet64").style.display = "block";
      document.getElementById("bet65").style.display = "block";
      document.getElementById("bet66").style.display = "block";
      document.getElementById("bet67").style.display = "block";
      document.getElementById("bet68").style.display = "block";
      document.getElementById("bet69").style.display = "block";
    } else if (round == 10) {
      score1 = parseFloat(document.getElementById("bet64").value);
      score2 = parseFloat(document.getElementById("bet65").value);
      score3 = parseFloat(document.getElementById("bet66").value);
      score4 = parseFloat(document.getElementById("bet67").value);
      score5 = parseFloat(document.getElementById("bet68").value);
      score6 = parseFloat(document.getElementById("bet69").value);
      document.getElementById("bet64").style.display = "none";
      document.getElementById("bet65").style.display = "none";
      document.getElementById("bet66").style.display = "none";
      document.getElementById("bet67").style.display = "none";
      document.getElementById("bet68").style.display = "none";
      document.getElementById("bet69").style.display = "none";
      document.getElementById("score64").innerHTML = score1;
      document.getElementById("score65").innerHTML = score2;
      document.getElementById("score66").innerHTML = score3;
      document.getElementById("score67").innerHTML = score4;
      document.getElementById("score68").innerHTML = score5;
      document.getElementById("score69").innerHTML = score6;
      document.getElementById("score64").style.display = "block";
      document.getElementById("score65").style.display = "block";
      document.getElementById("score66").style.display = "block";
      document.getElementById("score67").style.display = "block";
      document.getElementById("score68").style.display = "block";
      document.getElementById("score69").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet71").style.display = "block";
      document.getElementById("bet72").style.display = "block";
      document.getElementById("bet73").style.display = "block";
      document.getElementById("bet74").style.display = "block";
      document.getElementById("bet75").style.display = "block";
      document.getElementById("bet76").style.display = "block";
    } else if (round == 11) {
      score1 = parseFloat(document.getElementById("bet71").value);
      score2 = parseFloat(document.getElementById("bet72").value);
      score3 = parseFloat(document.getElementById("bet73").value);
      score4 = parseFloat(document.getElementById("bet74").value);
      score5 = parseFloat(document.getElementById("bet75").value);
      score6 = parseFloat(document.getElementById("bet76").value);
      document.getElementById("bet71").style.display = "none";
      document.getElementById("bet72").style.display = "none";
      document.getElementById("bet73").style.display = "none";
      document.getElementById("bet74").style.display = "none";
      document.getElementById("bet75").style.display = "none";
      document.getElementById("bet76").style.display = "none";
      document.getElementById("score71").innerHTML = score1;
      document.getElementById("score72").innerHTML = score2;
      document.getElementById("score73").innerHTML = score3;
      document.getElementById("score74").innerHTML = score4;
      document.getElementById("score75").innerHTML = score5;
      document.getElementById("score76").innerHTML = score6;
      document.getElementById("score71").style.display = "block";
      document.getElementById("score72").style.display = "block";
      document.getElementById("score73").style.display = "block";
      document.getElementById("score74").style.display = "block";
      document.getElementById("score75").style.display = "block";
      document.getElementById("score76").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet78").style.display = "block";
      document.getElementById("bet79").style.display = "block";
      document.getElementById("bet80").style.display = "block";
      document.getElementById("bet81").style.display = "block";
      document.getElementById("bet82").style.display = "block";
      document.getElementById("bet83").style.display = "block";
    } else if (round == 12) {
      score1 = parseFloat(document.getElementById("bet78").value);
      score2 = parseFloat(document.getElementById("bet79").value);
      score3 = parseFloat(document.getElementById("bet80").value);
      score4 = parseFloat(document.getElementById("bet81").value);
      score5 = parseFloat(document.getElementById("bet82").value);
      score6 = parseFloat(document.getElementById("bet83").value);
      document.getElementById("bet78").style.display = "none";
      document.getElementById("bet79").style.display = "none";
      document.getElementById("bet80").style.display = "none";
      document.getElementById("bet81").style.display = "none";
      document.getElementById("bet82").style.display = "none";
      document.getElementById("bet83").style.display = "none";
      document.getElementById("score78").innerHTML = score1;
      document.getElementById("score79").innerHTML = score2;
      document.getElementById("score80").innerHTML = score3;
      document.getElementById("score81").innerHTML = score4;
      document.getElementById("score82").innerHTML = score5;
      document.getElementById("score83").innerHTML = score6;
      document.getElementById("score78").style.display = "block";
      document.getElementById("score79").style.display = "block";
      document.getElementById("score80").style.display = "block";
      document.getElementById("score81").style.display = "block";
      document.getElementById("score82").style.display = "block";
      document.getElementById("score83").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("bet85").style.display = "block";
      document.getElementById("bet86").style.display = "block";
      document.getElementById("bet87").style.display = "block";
      document.getElementById("bet88").style.display = "block";
      document.getElementById("bet89").style.display = "block";
      document.getElementById("bet90").style.display = "block";
    } else if (round == 13) {
      score1 = parseFloat(document.getElementById("bet85").value);
      score2 = parseFloat(document.getElementById("bet86").value);
      score3 = parseFloat(document.getElementById("bet87").value);
      score4 = parseFloat(document.getElementById("bet88").value);
      score5 = parseFloat(document.getElementById("bet89").value);
      score6 = parseFloat(document.getElementById("bet90").value);
      document.getElementById("bet85").style.display = "none";
      document.getElementById("bet86").style.display = "none";
      document.getElementById("bet87").style.display = "none";
      document.getElementById("bet88").style.display = "none";
      document.getElementById("bet89").style.display = "none";
      document.getElementById("bet90").style.display = "none";
      document.getElementById("score85").innerHTML = score1;
      document.getElementById("score86").innerHTML = score2;
      document.getElementById("score87").innerHTML = score3;
      document.getElementById("score88").innerHTML = score4;
      document.getElementById("score89").innerHTML = score5;
      document.getElementById("score90").innerHTML = score6;
      document.getElementById("score85").style.display = "block";
      document.getElementById("score86").style.display = "block";
      document.getElementById("score87").style.display = "block";
      document.getElementById("score88").style.display = "block";
      document.getElementById("score89").style.display = "block";
      document.getElementById("score90").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
    }
  } else if (fileName == "7.html") {
    if (round == 1) {
      score1 = parseFloat(document.getElementById("bet1").value);
      score2 = parseFloat(document.getElementById("bet2").value);
      score3 = parseFloat(document.getElementById("bet3").value);
      score4 = parseFloat(document.getElementById("bet4").value);
      score5 = parseFloat(document.getElementById("bet5").value);
      score6 = parseFloat(document.getElementById("bet6").value);
      score7 = parseFloat(document.getElementById("bet7").value);
      document.getElementById("bet1").style.display = "none";
      document.getElementById("bet2").style.display = "none";
      document.getElementById("bet3").style.display = "none";
      document.getElementById("bet4").style.display = "none";
      document.getElementById("bet5").style.display = "none";
      document.getElementById("bet6").style.display = "none";
      document.getElementById("bet7").style.display = "none";
      document.getElementById("score1").innerHTML = score1;
      document.getElementById("score2").innerHTML = score2;
      document.getElementById("score3").innerHTML = score3;
      document.getElementById("score4").innerHTML = score4;
      document.getElementById("score5").innerHTML = score5;
      document.getElementById("score6").innerHTML = score6;
      document.getElementById("score7").innerHTML = score7;
      document.getElementById("score1").style.display = "block";
      document.getElementById("score2").style.display = "block";
      document.getElementById("score3").style.display = "block";
      document.getElementById("score4").style.display = "block";
      document.getElementById("score5").style.display = "block";
      document.getElementById("score6").style.display = "block";
      document.getElementById("score7").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet8").style.display = "block";
      document.getElementById("bet9").style.display = "block";
      document.getElementById("bet10").style.display = "block";
      document.getElementById("bet11").style.display = "block";
      document.getElementById("bet12").style.display = "block";
      document.getElementById("bet13").style.display = "block";
      document.getElementById("bet14").style.display = "block";
    } else if (round == 2) {
      score1 = parseFloat(document.getElementById("bet8").value);
      score2 = parseFloat(document.getElementById("bet9").value);
      score3 = parseFloat(document.getElementById("bet10").value);
      score4 = parseFloat(document.getElementById("bet11").value);
      score5 = parseFloat(document.getElementById("bet12").value);
      score6 = parseFloat(document.getElementById("bet13").value);
      score7 = parseFloat(document.getElementById("bet14").value);
      document.getElementById("bet8").style.display = "none";
      document.getElementById("bet9").style.display = "none";
      document.getElementById("bet10").style.display = "none";
      document.getElementById("bet11").style.display = "none";
      document.getElementById("bet12").style.display = "none";
      document.getElementById("bet13").style.display = "none";
      document.getElementById("bet14").style.display = "none";
      document.getElementById("score8").innerHTML = score1;
      document.getElementById("score9").innerHTML = score2;
      document.getElementById("score10").innerHTML = score3;
      document.getElementById("score11").innerHTML = score4;
      document.getElementById("score12").innerHTML = score5;
      document.getElementById("score13").innerHTML = score6;
      document.getElementById("score14").innerHTML = score7;
      document.getElementById("score8").style.display = "block";
      document.getElementById("score9").style.display = "block";
      document.getElementById("score10").style.display = "block";
      document.getElementById("score11").style.display = "block";
      document.getElementById("score12").style.display = "block";
      document.getElementById("score13").style.display = "block";
      document.getElementById("score14").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet15").style.display = "block";
      document.getElementById("bet16").style.display = "block";
      document.getElementById("bet17").style.display = "block";
      document.getElementById("bet18").style.display = "block";
      document.getElementById("bet19").style.display = "block";
      document.getElementById("bet20").style.display = "block";
      document.getElementById("bet21").style.display = "block";
    } else if (round == 3) {
      score1 = parseFloat(document.getElementById("bet15").value);
      score2 = parseFloat(document.getElementById("bet16").value);
      score3 = parseFloat(document.getElementById("bet17").value);
      score4 = parseFloat(document.getElementById("bet18").value);
      score5 = parseFloat(document.getElementById("bet19").value);
      score6 = parseFloat(document.getElementById("bet20").value);
      score7 = parseFloat(document.getElementById("bet21").value);
      document.getElementById("bet15").style.display = "none";
      document.getElementById("bet16").style.display = "none";
      document.getElementById("bet17").style.display = "none";
      document.getElementById("bet18").style.display = "none";
      document.getElementById("bet19").style.display = "none";
      document.getElementById("bet20").style.display = "none";
      document.getElementById("bet21").style.display = "none";
      document.getElementById("score15").innerHTML = score1;
      document.getElementById("score16").innerHTML = score2;
      document.getElementById("score17").innerHTML = score3;
      document.getElementById("score18").innerHTML = score4;
      document.getElementById("score19").innerHTML = score5;
      document.getElementById("score20").innerHTML = score6;
      document.getElementById("score21").innerHTML = score7;
      document.getElementById("score15").style.display = "block";
      document.getElementById("score16").style.display = "block";
      document.getElementById("score17").style.display = "block";
      document.getElementById("score18").style.display = "block";
      document.getElementById("score19").style.display = "block";
      document.getElementById("score20").style.display = "block";
      document.getElementById("score21").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet22").style.display = "block";
      document.getElementById("bet23").style.display = "block";
      document.getElementById("bet24").style.display = "block";
      document.getElementById("bet25").style.display = "block";
      document.getElementById("bet26").style.display = "block";
      document.getElementById("bet27").style.display = "block";
      document.getElementById("bet28").style.display = "block";
    } else if (round == 4) {
      score1 = parseFloat(document.getElementById("bet22").value);
      score2 = parseFloat(document.getElementById("bet23").value);
      score3 = parseFloat(document.getElementById("bet24").value);
      score4 = parseFloat(document.getElementById("bet25").value);
      score5 = parseFloat(document.getElementById("bet26").value);
      score6 = parseFloat(document.getElementById("bet27").value);
      score7 = parseFloat(document.getElementById("bet28").value);
      document.getElementById("bet22").style.display = "none";
      document.getElementById("bet23").style.display = "none";
      document.getElementById("bet24").style.display = "none";
      document.getElementById("bet25").style.display = "none";
      document.getElementById("bet26").style.display = "none";
      document.getElementById("bet27").style.display = "none";
      document.getElementById("bet28").style.display = "none";
      document.getElementById("score22").innerHTML = score1;
      document.getElementById("score23").innerHTML = score2;
      document.getElementById("score24").innerHTML = score3;
      document.getElementById("score25").innerHTML = score4;
      document.getElementById("score26").innerHTML = score5;
      document.getElementById("score27").innerHTML = score6;
      document.getElementById("score28").innerHTML = score7;
      document.getElementById("score22").style.display = "block";
      document.getElementById("score23").style.display = "block";
      document.getElementById("score24").style.display = "block";
      document.getElementById("score25").style.display = "block";
      document.getElementById("score26").style.display = "block";
      document.getElementById("score27").style.display = "block";
      document.getElementById("score28").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet29").style.display = "block";
      document.getElementById("bet30").style.display = "block";
      document.getElementById("bet31").style.display = "block";
      document.getElementById("bet32").style.display = "block";
      document.getElementById("bet33").style.display = "block";
      document.getElementById("bet34").style.display = "block";
      document.getElementById("bet35").style.display = "block";
    } else if (round == 5) {
      score1 = parseFloat(document.getElementById("bet29").value);
      score2 = parseFloat(document.getElementById("bet30").value);
      score3 = parseFloat(document.getElementById("bet31").value);
      score4 = parseFloat(document.getElementById("bet32").value);
      score5 = parseFloat(document.getElementById("bet33").value);
      score6 = parseFloat(document.getElementById("bet34").value);
      score7 = parseFloat(document.getElementById("bet35").value);
      document.getElementById("bet29").style.display = "none";
      document.getElementById("bet30").style.display = "none";
      document.getElementById("bet31").style.display = "none";
      document.getElementById("bet32").style.display = "none";
      document.getElementById("bet33").style.display = "none";
      document.getElementById("bet34").style.display = "none";
      document.getElementById("bet35").style.display = "none";
      document.getElementById("score29").innerHTML = score1;
      document.getElementById("score30").innerHTML = score2;
      document.getElementById("score31").innerHTML = score3;
      document.getElementById("score32").innerHTML = score4;
      document.getElementById("score33").innerHTML = score5;
      document.getElementById("score34").innerHTML = score6;
      document.getElementById("score35").innerHTML = score7;
      document.getElementById("score29").style.display = "block";
      document.getElementById("score30").style.display = "block";
      document.getElementById("score31").style.display = "block";
      document.getElementById("score32").style.display = "block";
      document.getElementById("score33").style.display = "block";
      document.getElementById("score34").style.display = "block";
      document.getElementById("score35").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet36").style.display = "block";
      document.getElementById("bet37").style.display = "block";
      document.getElementById("bet38").style.display = "block";
      document.getElementById("bet39").style.display = "block";
      document.getElementById("bet40").style.display = "block";
      document.getElementById("bet41").style.display = "block";
      document.getElementById("bet42").style.display = "block";
    } else if (round == 6) {
      score1 = parseFloat(document.getElementById("bet36").value);
      score2 = parseFloat(document.getElementById("bet37").value);
      score3 = parseFloat(document.getElementById("bet38").value);
      score4 = parseFloat(document.getElementById("bet39").value);
      score5 = parseFloat(document.getElementById("bet40").value);
      score6 = parseFloat(document.getElementById("bet41").value);
      score7 = parseFloat(document.getElementById("bet42").value);
      document.getElementById("bet36").style.display = "none";
      document.getElementById("bet37").style.display = "none";
      document.getElementById("bet38").style.display = "none";
      document.getElementById("bet39").style.display = "none";
      document.getElementById("bet40").style.display = "none";
      document.getElementById("bet41").style.display = "none";
      document.getElementById("bet42").style.display = "none";
      document.getElementById("score36").innerHTML = score1;
      document.getElementById("score37").innerHTML = score2;
      document.getElementById("score38").innerHTML = score3;
      document.getElementById("score39").innerHTML = score4;
      document.getElementById("score40").innerHTML = score5;
      document.getElementById("score41").innerHTML = score6;
      document.getElementById("score42").innerHTML = score7;
      document.getElementById("score36").style.display = "block";
      document.getElementById("score37").style.display = "block";
      document.getElementById("score38").style.display = "block";
      document.getElementById("score39").style.display = "block";
      document.getElementById("score40").style.display = "block";
      document.getElementById("score41").style.display = "block";
      document.getElementById("score42").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet43").style.display = "block";
      document.getElementById("bet44").style.display = "block";
      document.getElementById("bet45").style.display = "block";
      document.getElementById("bet46").style.display = "block";
      document.getElementById("bet47").style.display = "block";
      document.getElementById("bet48").style.display = "block";
      document.getElementById("bet49").style.display = "block";
    } else if (round == 7) {
      score1 = parseFloat(document.getElementById("bet43").value);
      score2 = parseFloat(document.getElementById("bet44").value);
      score3 = parseFloat(document.getElementById("bet45").value);
      score4 = parseFloat(document.getElementById("bet46").value);
      score5 = parseFloat(document.getElementById("bet47").value);
      score6 = parseFloat(document.getElementById("bet48").value);
      score7 = parseFloat(document.getElementById("bet49").value);
      document.getElementById("bet43").style.display = "none";
      document.getElementById("bet44").style.display = "none";
      document.getElementById("bet45").style.display = "none";
      document.getElementById("bet46").style.display = "none";
      document.getElementById("bet47").style.display = "none";
      document.getElementById("bet48").style.display = "none";
      document.getElementById("bet49").style.display = "none";
      document.getElementById("score43").innerHTML = score1;
      document.getElementById("score44").innerHTML = score2;
      document.getElementById("score45").innerHTML = score3;
      document.getElementById("score46").innerHTML = score4;
      document.getElementById("score47").innerHTML = score5;
      document.getElementById("score48").innerHTML = score6;
      document.getElementById("score49").innerHTML = score7;
      document.getElementById("score43").style.display = "block";
      document.getElementById("score44").style.display = "block";
      document.getElementById("score45").style.display = "block";
      document.getElementById("score46").style.display = "block";
      document.getElementById("score47").style.display = "block";
      document.getElementById("score48").style.display = "block";
      document.getElementById("score49").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet50").style.display = "block";
      document.getElementById("bet51").style.display = "block";
      document.getElementById("bet52").style.display = "block";
      document.getElementById("bet53").style.display = "block";
      document.getElementById("bet54").style.display = "block";
      document.getElementById("bet55").style.display = "block";
      document.getElementById("bet56").style.display = "block";
    } else if (round == 8) {
      score1 = parseFloat(document.getElementById("bet50").value);
      score2 = parseFloat(document.getElementById("bet51").value);
      score3 = parseFloat(document.getElementById("bet52").value);
      score4 = parseFloat(document.getElementById("bet53").value);
      score5 = parseFloat(document.getElementById("bet54").value);
      score6 = parseFloat(document.getElementById("bet55").value);
      score7 = parseFloat(document.getElementById("bet56").value);
      document.getElementById("bet50").style.display = "none";
      document.getElementById("bet51").style.display = "none";
      document.getElementById("bet52").style.display = "none";
      document.getElementById("bet53").style.display = "none";
      document.getElementById("bet54").style.display = "none";
      document.getElementById("bet55").style.display = "none";
      document.getElementById("bet56").style.display = "none";
      document.getElementById("score50").innerHTML = score1;
      document.getElementById("score51").innerHTML = score2;
      document.getElementById("score52").innerHTML = score3;
      document.getElementById("score53").innerHTML = score4;
      document.getElementById("score54").innerHTML = score5;
      document.getElementById("score55").innerHTML = score6;
      document.getElementById("score56").innerHTML = score7;
      document.getElementById("score50").style.display = "block";
      document.getElementById("score51").style.display = "block";
      document.getElementById("score52").style.display = "block";
      document.getElementById("score53").style.display = "block";
      document.getElementById("score54").style.display = "block";
      document.getElementById("score55").style.display = "block";
      document.getElementById("score56").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet57").style.display = "block";
      document.getElementById("bet58").style.display = "block";
      document.getElementById("bet59").style.display = "block";
      document.getElementById("bet60").style.display = "block";
      document.getElementById("bet61").style.display = "block";
      document.getElementById("bet62").style.display = "block";
      document.getElementById("bet63").style.display = "block";
    } else if (round == 9) {
      score1 = parseFloat(document.getElementById("bet57").value);
      score2 = parseFloat(document.getElementById("bet58").value);
      score3 = parseFloat(document.getElementById("bet59").value);
      score4 = parseFloat(document.getElementById("bet60").value);
      score5 = parseFloat(document.getElementById("bet61").value);
      score6 = parseFloat(document.getElementById("bet62").value);
      score7 = parseFloat(document.getElementById("bet63").value);
      document.getElementById("bet57").style.display = "none";
      document.getElementById("bet58").style.display = "none";
      document.getElementById("bet59").style.display = "none";
      document.getElementById("bet60").style.display = "none";
      document.getElementById("bet61").style.display = "none";
      document.getElementById("bet62").style.display = "none";
      document.getElementById("bet63").style.display = "none";
      document.getElementById("score57").innerHTML = score1;
      document.getElementById("score58").innerHTML = score2;
      document.getElementById("score59").innerHTML = score3;
      document.getElementById("score60").innerHTML = score4;
      document.getElementById("score61").innerHTML = score5;
      document.getElementById("score62").innerHTML = score6;
      document.getElementById("score63").innerHTML = score7;
      document.getElementById("score57").style.display = "block";
      document.getElementById("score58").style.display = "block";
      document.getElementById("score59").style.display = "block";
      document.getElementById("score60").style.display = "block";
      document.getElementById("score61").style.display = "block";
      document.getElementById("score62").style.display = "block";
      document.getElementById("score63").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet64").style.display = "block";
      document.getElementById("bet65").style.display = "block";
      document.getElementById("bet66").style.display = "block";
      document.getElementById("bet67").style.display = "block";
      document.getElementById("bet68").style.display = "block";
      document.getElementById("bet69").style.display = "block";
      document.getElementById("bet70").style.display = "block";
    } else if (round == 10) {
      score1 = parseFloat(document.getElementById("bet64").value);
      score2 = parseFloat(document.getElementById("bet65").value);
      score3 = parseFloat(document.getElementById("bet66").value);
      score4 = parseFloat(document.getElementById("bet67").value);
      score5 = parseFloat(document.getElementById("bet68").value);
      score6 = parseFloat(document.getElementById("bet69").value);
      score7 = parseFloat(document.getElementById("bet70").value);
      document.getElementById("bet64").style.display = "none";
      document.getElementById("bet65").style.display = "none";
      document.getElementById("bet66").style.display = "none";
      document.getElementById("bet67").style.display = "none";
      document.getElementById("bet68").style.display = "none";
      document.getElementById("bet69").style.display = "none";
      document.getElementById("bet70").style.display = "none";
      document.getElementById("score64").innerHTML = score1;
      document.getElementById("score65").innerHTML = score2;
      document.getElementById("score66").innerHTML = score3;
      document.getElementById("score67").innerHTML = score4;
      document.getElementById("score68").innerHTML = score5;
      document.getElementById("score69").innerHTML = score6;
      document.getElementById("score70").innerHTML = score7;
      document.getElementById("score64").style.display = "block";
      document.getElementById("score65").style.display = "block";
      document.getElementById("score66").style.display = "block";
      document.getElementById("score67").style.display = "block";
      document.getElementById("score68").style.display = "block";
      document.getElementById("score69").style.display = "block";
      document.getElementById("score70").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet71").style.display = "block";
      document.getElementById("bet72").style.display = "block";
      document.getElementById("bet73").style.display = "block";
      document.getElementById("bet74").style.display = "block";
      document.getElementById("bet75").style.display = "block";
      document.getElementById("bet76").style.display = "block";
      document.getElementById("bet77").style.display = "block";
    } else if (round == 11) {
      score1 = parseFloat(document.getElementById("bet71").value);
      score2 = parseFloat(document.getElementById("bet72").value);
      score3 = parseFloat(document.getElementById("bet73").value);
      score4 = parseFloat(document.getElementById("bet74").value);
      score5 = parseFloat(document.getElementById("bet75").value);
      score6 = parseFloat(document.getElementById("bet76").value);
      score7 = parseFloat(document.getElementById("bet77").value);
      document.getElementById("bet71").style.display = "none";
      document.getElementById("bet72").style.display = "none";
      document.getElementById("bet73").style.display = "none";
      document.getElementById("bet74").style.display = "none";
      document.getElementById("bet75").style.display = "none";
      document.getElementById("bet76").style.display = "none";
      document.getElementById("bet77").style.display = "none";
      document.getElementById("score71").innerHTML = score1;
      document.getElementById("score72").innerHTML = score2;
      document.getElementById("score73").innerHTML = score3;
      document.getElementById("score74").innerHTML = score4;
      document.getElementById("score75").innerHTML = score5;
      document.getElementById("score76").innerHTML = score6;
      document.getElementById("score77").innerHTML = score7;
      document.getElementById("score71").style.display = "block";
      document.getElementById("score72").style.display = "block";
      document.getElementById("score73").style.display = "block";
      document.getElementById("score74").style.display = "block";
      document.getElementById("score75").style.display = "block";
      document.getElementById("score76").style.display = "block";
      document.getElementById("score77").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet78").style.display = "block";
      document.getElementById("bet79").style.display = "block";
      document.getElementById("bet80").style.display = "block";
      document.getElementById("bet81").style.display = "block";
      document.getElementById("bet82").style.display = "block";
      document.getElementById("bet83").style.display = "block";
      document.getElementById("bet84").style.display = "block";
    } else if (round == 12) {
      score1 = parseFloat(document.getElementById("bet78").value);
      score2 = parseFloat(document.getElementById("bet79").value);
      score3 = parseFloat(document.getElementById("bet80").value);
      score4 = parseFloat(document.getElementById("bet81").value);
      score5 = parseFloat(document.getElementById("bet82").value);
      score6 = parseFloat(document.getElementById("bet83").value);
      score7 = parseFloat(document.getElementById("bet84").value);
      document.getElementById("bet78").style.display = "none";
      document.getElementById("bet79").style.display = "none";
      document.getElementById("bet80").style.display = "none";
      document.getElementById("bet81").style.display = "none";
      document.getElementById("bet82").style.display = "none";
      document.getElementById("bet83").style.display = "none";
      document.getElementById("bet84").style.display = "none";
      document.getElementById("score78").innerHTML = score1;
      document.getElementById("score79").innerHTML = score2;
      document.getElementById("score80").innerHTML = score3;
      document.getElementById("score81").innerHTML = score4;
      document.getElementById("score82").innerHTML = score5;
      document.getElementById("score83").innerHTML = score6;
      document.getElementById("score84").innerHTML = score7;
      document.getElementById("score78").style.display = "block";
      document.getElementById("score79").style.display = "block";
      document.getElementById("score80").style.display = "block";
      document.getElementById("score81").style.display = "block";
      document.getElementById("score82").style.display = "block";
      document.getElementById("score83").style.display = "block";
      document.getElementById("score84").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
      document.getElementById("bet85").style.display = "block";
      document.getElementById("bet86").style.display = "block";
      document.getElementById("bet87").style.display = "block";
      document.getElementById("bet88").style.display = "block";
      document.getElementById("bet89").style.display = "block";
      document.getElementById("bet90").style.display = "block";
      document.getElementById("bet91").style.display = "block";
    } else if (round == 13) {
      score1 = parseFloat(document.getElementById("bet85").value);
      score2 = parseFloat(document.getElementById("bet86").value);
      score3 = parseFloat(document.getElementById("bet87").value);
      score4 = parseFloat(document.getElementById("bet88").value);
      score5 = parseFloat(document.getElementById("bet89").value);
      score6 = parseFloat(document.getElementById("bet90").value);
      score7 = parseFloat(document.getElementById("bet91").value);
      document.getElementById("bet85").style.display = "none";
      document.getElementById("bet86").style.display = "none";
      document.getElementById("bet87").style.display = "none";
      document.getElementById("bet88").style.display = "none";
      document.getElementById("bet89").style.display = "none";
      document.getElementById("bet90").style.display = "none";
      document.getElementById("bet91").style.display = "none";
      document.getElementById("score85").innerHTML = score1;
      document.getElementById("score86").innerHTML = score2;
      document.getElementById("score87").innerHTML = score3;
      document.getElementById("score88").innerHTML = score4;
      document.getElementById("score89").innerHTML = score5;
      document.getElementById("score90").innerHTML = score6;
      document.getElementById("score91").innerHTML = score7;
      document.getElementById("score85").style.display = "block";
      document.getElementById("score86").style.display = "block";
      document.getElementById("score87").style.display = "block";
      document.getElementById("score88").style.display = "block";
      document.getElementById("score89").style.display = "block";
      document.getElementById("score90").style.display = "block";
      document.getElementById("score91").style.display = "block";
      document.getElementById("x1").style.display = "block";
      document.getElementById("check1").style.display = "block";
      document.getElementById("x2").style.display = "block";
      document.getElementById("check2").style.display = "block";
      document.getElementById("x3").style.display = "block";
      document.getElementById("check3").style.display = "block";
      document.getElementById("x4").style.display = "block";
      document.getElementById("check4").style.display = "block";
      document.getElementById("x5").style.display = "block";
      document.getElementById("check5").style.display = "block";
      document.getElementById("x6").style.display = "block";
      document.getElementById("check6").style.display = "block";
      document.getElementById("x7").style.display = "block";
      document.getElementById("check7").style.display = "block";
    }
  }
}

function yes1() {
  playscore1 = playscore1 + score1;
  playscore1 = (playscore1 + 1);
  document.getElementById("x1").style.display = "none";
  document.getElementById("check1").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore1").innerHTML = playscore1;
    document.getElementById("playscore1").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore8").innerHTML = playscore1;
    document.getElementById("playscore8").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore15").innerHTML = playscore1;
    document.getElementById("playscore15").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore22").innerHTML = playscore1;
    document.getElementById("playscore22").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore29").innerHTML = playscore1;
    document.getElementById("playscore29").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore36").innerHTML = playscore1;
    document.getElementById("playscore36").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore43").innerHTML = playscore1;
    document.getElementById("playscore43").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore50").innerHTML = playscore1;
    document.getElementById("playscore50").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore57").innerHTML = playscore1;
    document.getElementById("playscore57").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore64").innerHTML = playscore1;
    document.getElementById("playscore64").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore71").innerHTML = playscore1;
    document.getElementById("playscore71").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore78").innerHTML = playscore1;
    document.getElementById("playscore78").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore85").innerHTML = playscore1;
    document.getElementById("playscore85").style.display = "block";
  }
}

function no1() {
  playscore1 = playscore1 - score1;
  playscore1 = (playscore1 - 1);
  document.getElementById("x1").style.display = "none";
  document.getElementById("check1").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore1").innerHTML = playscore1;
    document.getElementById("playscore1").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore8").innerHTML = playscore1;
    document.getElementById("playscore8").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore15").innerHTML = playscore1;
    document.getElementById("playscore15").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore22").innerHTML = playscore1;
    document.getElementById("playscore22").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore29").innerHTML = playscore1;
    document.getElementById("playscore29").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore36").innerHTML = playscore1;
    document.getElementById("playscore36").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore43").innerHTML = playscore1;
    document.getElementById("playscore43").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore50").innerHTML = playscore1;
    document.getElementById("playscore50").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore57").innerHTML = playscore1;
    document.getElementById("playscore57").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore64").innerHTML = playscore1;
    document.getElementById("playscore64").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore71").innerHTML = playscore1;
    document.getElementById("playscore71").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore78").innerHTML = playscore1;
    document.getElementById("playscore78").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore85").innerHTML = playscore1;
    document.getElementById("playscore85").style.display = "block";
  }
}

function yes2() {
  playscore2 = playscore2 + score2;
  playscore2 = (playscore2 + 1);
  document.getElementById("x2").style.display = "none";
  document.getElementById("check2").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore2").innerHTML = playscore2;
    document.getElementById("playscore2").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore9").innerHTML = playscore2;
    document.getElementById("playscore9").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore16").innerHTML = playscore2;
    document.getElementById("playscore16").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore23").innerHTML = playscore2;
    document.getElementById("playscore23").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore30").innerHTML = playscore2;
    document.getElementById("playscore30").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore37").innerHTML = playscore2;
    document.getElementById("playscore37").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore44").innerHTML = playscore2;
    document.getElementById("playscore44").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore51").innerHTML = playscore2;
    document.getElementById("playscore51").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore58").innerHTML = playscore2;
    document.getElementById("playscore58").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore65").innerHTML = playscore2;
    document.getElementById("playscore65").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore72").innerHTML = playscore2;
    document.getElementById("playscore72").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore79").innerHTML = playscore2;
    document.getElementById("playscore79").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore86").innerHTML = playscore2;
    document.getElementById("playscore86").style.display = "block";
  }
}

function no2() {
  playscore2 = playscore2 - score2;
  playscore2 = (playscore2 - 1);
  document.getElementById("x2").style.display = "none";
  document.getElementById("check2").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore2").innerHTML = playscore2;
    document.getElementById("playscore2").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore9").innerHTML = playscore2;
    document.getElementById("playscore9").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore16").innerHTML = playscore2;
    document.getElementById("playscore16").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore23").innerHTML = playscore2;
    document.getElementById("playscore23").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore30").innerHTML = playscore2;
    document.getElementById("playscore30").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore37").innerHTML = playscore2;
    document.getElementById("playscore37").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore44").innerHTML = playscore2;
    document.getElementById("playscore44").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore51").innerHTML = playscore2;
    document.getElementById("playscore51").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore58").innerHTML = playscore2;
    document.getElementById("playscore58").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore65").innerHTML = playscore2;
    document.getElementById("playscore65").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore72").innerHTML = playscore2;
    document.getElementById("playscore72").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore79").innerHTML = playscore2;
    document.getElementById("playscore79").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore86").innerHTML = playscore2;
    document.getElementById("playscore86").style.display = "block";
  }
}

function yes3() {
  playscore3 = playscore3 + score3;
  playscore3 = (playscore3 + 1);
  document.getElementById("x3").style.display = "none";
  document.getElementById("check3").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore3").innerHTML = playscore3;
    document.getElementById("playscore3").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore10").innerHTML = playscore3;
    document.getElementById("playscore10").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore17").innerHTML = playscore3;
    document.getElementById("playscore17").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore24").innerHTML = playscore3;
    document.getElementById("playscore24").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore31").innerHTML = playscore3;
    document.getElementById("playscore31").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore38").innerHTML = playscore3;
    document.getElementById("playscore38").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore45").innerHTML = playscore3;
    document.getElementById("playscore45").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore52").innerHTML = playscore3;
    document.getElementById("playscore52").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore59").innerHTML = playscore3;
    document.getElementById("playscore59").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore66").innerHTML = playscore3;
    document.getElementById("playscore66").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore73").innerHTML = playscore3;
    document.getElementById("playscore73").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore80").innerHTML = playscore3;
    document.getElementById("playscore80").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore87").innerHTML = playscore3;
    document.getElementById("playscore87").style.display = "block";
  }
}

function no3() {
  playscore3 = playscore3 - score3;
  playscore3 = (playscore3 - 1);
  document.getElementById("x3").style.display = "none";
  document.getElementById("check3").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore3").innerHTML = playscore3;
    document.getElementById("playscore3").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore10").innerHTML = playscore3;
    document.getElementById("playscore10").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore17").innerHTML = playscore3;
    document.getElementById("playscore17").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore24").innerHTML = playscore3;
    document.getElementById("playscore24").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore31").innerHTML = playscore3;
    document.getElementById("playscore31").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore38").innerHTML = playscore3;
    document.getElementById("playscore38").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore45").innerHTML = playscore3;
    document.getElementById("playscore45").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore52").innerHTML = playscore3;
    document.getElementById("playscore52").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore59").innerHTML = playscore3;
    document.getElementById("playscore59").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore66").innerHTML = playscore3;
    document.getElementById("playscore66").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore73").innerHTML = playscore3;
    document.getElementById("playscore73").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore80").innerHTML = playscore3;
    document.getElementById("playscore80").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore87").innerHTML = playscore3;
    document.getElementById("playscore87").style.display = "block";
  }
}

function yes4() {
  playscore4 = playscore4 + score4;
  playscore4 = (playscore4 + 1);
  document.getElementById("x4").style.display = "none";
  document.getElementById("check4").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore4").innerHTML = playscore4;
    document.getElementById("playscore4").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore11").innerHTML = playscore4;
    document.getElementById("playscore11").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore18").innerHTML = playscore4;
    document.getElementById("playscore18").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore25").innerHTML = playscore4;
    document.getElementById("playscore25").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore32").innerHTML = playscore4;
    document.getElementById("playscore32").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore39").innerHTML = playscore4;
    document.getElementById("playscore39").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore46").innerHTML = playscore4;
    document.getElementById("playscore46").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore53").innerHTML = playscore4;
    document.getElementById("playscore53").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore60").innerHTML = playscore4;
    document.getElementById("playscore60").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore67").innerHTML = playscore4;
    document.getElementById("playscore67").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore74").innerHTML = playscore4;
    document.getElementById("playscore74").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore81").innerHTML = playscore4;
    document.getElementById("playscore81").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore88").innerHTML = playscore4;
    document.getElementById("playscore88").style.display = "block";
  }
}

function no4() {
  playscore4 = playscore4 - score4;
  playscore4 = (playscore4 - 1);
  document.getElementById("x4").style.display = "none";
  document.getElementById("check4").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore4").innerHTML = playscore4;
    document.getElementById("playscore4").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore11").innerHTML = playscore4;
    document.getElementById("playscore11").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore18").innerHTML = playscore4;
    document.getElementById("playscore18").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore25").innerHTML = playscore4;
    document.getElementById("playscore25").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore32").innerHTML = playscore4;
    document.getElementById("playscore32").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore39").innerHTML = playscore4;
    document.getElementById("playscore39").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore46").innerHTML = playscore4;
    document.getElementById("playscore46").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore53").innerHTML = playscore4;
    document.getElementById("playscore53").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore60").innerHTML = playscore4;
    document.getElementById("playscore60").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore67").innerHTML = playscore4;
    document.getElementById("playscore67").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore74").innerHTML = playscore4;
    document.getElementById("playscore74").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore81").innerHTML = playscore4;
    document.getElementById("playscore81").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore88").innerHTML = playscore4;
    document.getElementById("playscore88").style.display = "block";
  }
}

function yes5() {
  playscore5 = playscore5 + score5;
  playscore5 = (playscore5 + 1);
  document.getElementById("x5").style.display = "none";
  document.getElementById("check5").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore5").innerHTML = playscore5;
    document.getElementById("playscore5").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore12").innerHTML = playscore5;
    document.getElementById("playscore12").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore19").innerHTML = playscore5;
    document.getElementById("playscore19").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore26").innerHTML = playscore5;
    document.getElementById("playscore26").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore33").innerHTML = playscore5;
    document.getElementById("playscore33").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore40").innerHTML = playscore5;
    document.getElementById("playscore40").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore47").innerHTML = playscore5;
    document.getElementById("playscore47").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore54").innerHTML = playscore5;
    document.getElementById("playscore54").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore61").innerHTML = playscore5;
    document.getElementById("playscore61").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore68").innerHTML = playscore5;
    document.getElementById("playscore68").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore75").innerHTML = playscore5;
    document.getElementById("playscore75").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore82").innerHTML = playscore5;
    document.getElementById("playscore82").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore89").innerHTML = playscore5;
    document.getElementById("playscore89").style.display = "block";
  }
}

function no5() {
  playscore5 = playscore5 - score5;
  playscore5 = (playscore5 - 1);
  document.getElementById("x5").style.display = "none";
  document.getElementById("check5").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore5").innerHTML = playscore5;
    document.getElementById("playscore5").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore12").innerHTML = playscore5;
    document.getElementById("playscore12").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore19").innerHTML = playscore5;
    document.getElementById("playscore19").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore26").innerHTML = playscore5;
    document.getElementById("playscore26").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore33").innerHTML = playscore5;
    document.getElementById("playscore33").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore40").innerHTML = playscore5;
    document.getElementById("playscore40").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore47").innerHTML = playscore5;
    document.getElementById("playscore47").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore54").innerHTML = playscore5;
    document.getElementById("playscore54").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore61").innerHTML = playscore5;
    document.getElementById("playscore61").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore68").innerHTML = playscore5;
    document.getElementById("playscore68").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore75").innerHTML = playscore5;
    document.getElementById("playscore75").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore82").innerHTML = playscore5;
    document.getElementById("playscore82").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore89").innerHTML = playscore5;
    document.getElementById("playscore89").style.display = "block";
  }
}

function yes6() {
  playscore6 = playscore6 + score6;
  playscore6 = (playscore6 + 1);
  document.getElementById("x6").style.display = "none";
  document.getElementById("check6").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore6").innerHTML = playscore6;
    document.getElementById("playscore6").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore13").innerHTML = playscore6;
    document.getElementById("playscore13").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore20").innerHTML = playscore6;
    document.getElementById("playscore20").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore27").innerHTML = playscore6;
    document.getElementById("playscore27").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore34").innerHTML = playscore6;
    document.getElementById("playscore34").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore41").innerHTML = playscore6;
    document.getElementById("playscore41").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore48").innerHTML = playscore6;
    document.getElementById("playscore48").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore55").innerHTML = playscore6;
    document.getElementById("playscore55").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore62").innerHTML = playscore6;
    document.getElementById("playscore62").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore69").innerHTML = playscore6;
    document.getElementById("playscore69").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore76").innerHTML = playscore6;
    document.getElementById("playscore76").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore83").innerHTML = playscore6;
    document.getElementById("playscore83").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore90").innerHTML = playscore6;
    document.getElementById("playscore90").style.display = "block";
  }
}

function no6() {
  playscore6 = playscore6 - score6;
  playscore6 = (playscore6 - 1);
  document.getElementById("x6").style.display = "none";
  document.getElementById("check6").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore6").innerHTML = playscore6;
    document.getElementById("playscore6").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore13").innerHTML = playscore6;
    document.getElementById("playscore13").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore20").innerHTML = playscore6;
    document.getElementById("playscore20").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore27").innerHTML = playscore6;
    document.getElementById("playscore27").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore34").innerHTML = playscore6;
    document.getElementById("playscore34").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore41").innerHTML = playscore6;
    document.getElementById("playscore41").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore48").innerHTML = playscore6;
    document.getElementById("playscore48").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore55").innerHTML = playscore6;
    document.getElementById("playscore55").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore62").innerHTML = playscore6;
    document.getElementById("playscore62").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore69").innerHTML = playscore6;
    document.getElementById("playscore69").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore76").innerHTML = playscore6;
    document.getElementById("playscore76").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore83").innerHTML = playscore6;
    document.getElementById("playscore83").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore90").innerHTML = playscore6;
    document.getElementById("playscore90").style.display = "block";
  }
}

function yes7() {
  playscore7 = playscore7 + score7;
  playscore7 = (playscore7 + 1);
  document.getElementById("x7").style.display = "none";
  document.getElementById("check7").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore7").innerHTML = playscore7;
    document.getElementById("playscore7").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore14").innerHTML = playscore7;
    document.getElementById("playscore14").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore21").innerHTML = playscore7;
    document.getElementById("playscore21").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore28").innerHTML = playscore7;
    document.getElementById("playscore28").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore35").innerHTML = playscore7;
    document.getElementById("playscore35").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore42").innerHTML = playscore7;
    document.getElementById("playscore42").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore49").innerHTML = playscore7;
    document.getElementById("playscore49").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore56").innerHTML = playscore7;
    document.getElementById("playscore56").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore63").innerHTML = playscore7;
    document.getElementById("playscore63").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore70").innerHTML = playscore7;
    document.getElementById("playscore70").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore77").innerHTML = playscore7;
    document.getElementById("playscore77").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore84").innerHTML = playscore7;
    document.getElementById("playscore84").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore91").innerHTML = playscore7;
    document.getElementById("playscore91").style.display = "block";
  }
}

function no7() {
  playscore7 = playscore7 - score7;
  playscore7 = (playscore7 - 1);
  document.getElementById("x7").style.display = "none";
  document.getElementById("check7").style.display = "none";
  if (round == 1) {
    document.getElementById("playscore7").innerHTML = playscore7;
    document.getElementById("playscore7").style.display = "block";
  } else if (round == 2) {
    document.getElementById("playscore14").innerHTML = playscore7;
    document.getElementById("playscore14").style.display = "block";
  } else if (round == 3) {
    document.getElementById("playscore21").innerHTML = playscore7;
    document.getElementById("playscore21").style.display = "block";
  } else if (round == 4) {
    document.getElementById("playscore28").innerHTML = playscore7;
    document.getElementById("playscore28").style.display = "block";
  } else if (round == 5) {
    document.getElementById("playscore35").innerHTML = playscore7;
    document.getElementById("playscore35").style.display = "block";
  } else if (round == 6) {
    document.getElementById("playscore42").innerHTML = playscore7;
    document.getElementById("playscore42").style.display = "block";
  } else if (round == 7) {
    document.getElementById("playscore49").innerHTML = playscore7;
    document.getElementById("playscore49").style.display = "block";
  } else if (round == 8) {
    document.getElementById("playscore56").innerHTML = playscore7;
    document.getElementById("playscore56").style.display = "block";
  } else if (round == 9) {
    document.getElementById("playscore63").innerHTML = playscore7;
    document.getElementById("playscore63").style.display = "block";
  } else if (round == 10) {
    document.getElementById("playscore70").innerHTML = playscore7;
    document.getElementById("playscore70").style.display = "block";
  } else if (round == 11) {
    document.getElementById("playscore77").innerHTML = playscore7;
    document.getElementById("playscore77").style.display = "block";
  } else if (round == 12) {
    document.getElementById("playscore84").innerHTML = playscore7;
    document.getElementById("playscore84").style.display = "block";
  } else if (round == 13) {
    document.getElementById("playscore91").innerHTML = playscore7;
    document.getElementById("playscore91").style.display = "block";
  }
}

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, "<br />");
}

function writeit(from, e) {
  e = e || window.event;
  var w = $("writer");
  var tw = from.value;
  w.innerHTML = nl2br(tw);
}

function writeit2(from, e) {
  e = e || window.event;
  var w = $("writer");
  var tw = from.value;
  w.innerHTML = nl2br(tw);
  if (conv == 0) {
    if (tw == "1") {
      talk();
      conv = conv + 1;
      path = path + "1";
      document.getElementById("a1-1").style.display = "none";
      document.getElementById("a1-2").style.display = "none";
      document.getElementById("a1-3").style.display = "none";
      document.getElementById("resp1").style.display = "block";
      document.getElementById("a2-1").style.display = "block";
      document.getElementById("a2-2").style.display = "block";
      document.getElementById("a2-3").style.display = "block";
      document.getElementById("r1-1").style.display = "block";
    } else if (tw == "2") {
      talk();
      conv = conv + 1;
      path = path + "2";
      document.getElementById("a1-1").style.display = "none";
      document.getElementById("a1-2").style.display = "none";
      document.getElementById("a1-3").style.display = "none";
      document.getElementById("resp2").style.display = "block";
      document.getElementById("a3-1").style.display = "block";
      document.getElementById("a3-2").style.display = "block";
      document.getElementById("a3-3").style.display = "block";
      document.getElementById("r1-2").style.display = "block";
    } else if (tw == "3") {
      talk();
      conv = conv + 1;
      path = path + "3";
      document.getElementById("a1-1").style.display = "none";
      document.getElementById("a1-2").style.display = "none";
      document.getElementById("a1-3").style.display = "none";
      document.getElementById("resp3").style.display = "block";
      document.getElementById("a4-1").style.display = "block";
      document.getElementById("a4-2").style.display = "block";
      document.getElementById("a4-3").style.display = "block";
      document.getElementById("r1-3").style.display = "block";
    }
  } else if (conv == 1) {
    if (path == "1") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a2-1").style.display = "none";
        document.getElementById("a2-2").style.display = "none";
        document.getElementById("a2-3").style.display = "none";
        document.getElementById("r2-1").style.display = "block";
        document.getElementById("resp11").style.display = "block";
        document.getElementById("a5-1").style.display = "block";
        document.getElementById("a5-2").style.display = "block";
        document.getElementById("a5-3").style.display = "block";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a2-1").style.display = "none";
        document.getElementById("a2-2").style.display = "none";
        document.getElementById("a2-3").style.display = "none";
        document.getElementById("resp12").style.display = "block";
        document.getElementById("a6-1").style.display = "block";
        document.getElementById("a6-2").style.display = "block";
        document.getElementById("a6-3").style.display = "block";
        document.getElementById("r2-2").style.display = "block";
      } else if (tw == "3") {
        conv = conv + 1;
        path = path + "3";
        document.getElementById("a2-1").style.display = "none";
        document.getElementById("a2-2").style.display = "none";
        document.getElementById("a2-3").style.display = "none";
        document.getElementById("resp13").style.display = "block";
        document.getElementById("a9-1").style.display = "block";
        document.getElementById("a9-2").style.display = "block";
        document.getElementById("a9-3").style.display = "block";
        document.getElementById("r2-3").style.display = "block";
      }
    }
    if (path == "2") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a3-1").style.display = "none";
        document.getElementById("a3-2").style.display = "none";
        document.getElementById("a3-3").style.display = "none";
        document.getElementById("r3-1").style.display = "block";
        document.getElementById("resp21").style.display = "block";
        leave();
        setTimeout(() => {
          document.getElementById("tear").style.display = "block"}, 2000);
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = "11";
        document.getElementById("a3-1").style.display = "none";
        document.getElementById("a3-2").style.display = "none";
        document.getElementById("a3-3").style.display = "none";
        document.getElementById("r3-2").style.display = "block";
        document.getElementById("resp11").style.display = "block";
        document.getElementById("a5-1").style.display = "block";
        document.getElementById("a5-2").style.display = "block";
        document.getElementById("a5-3").style.display = "block";
      } else if (tw == "3") {
        talk();
        conv = conv + 1;
        path = path + "3";
        document.getElementById("a3-1").style.display = "none";
        document.getElementById("a3-2").style.display = "none";
        document.getElementById("a3-3").style.display = "none";
        document.getElementById("r3-3").style.display = "block";
        document.getElementById("resp23").style.display = "block";
        document.getElementById("a10-1").style.display = "block";
        document.getElementById("a10-2").style.display = "block";
      }
    }
    if (path == "3") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a4-1").style.display = "none";
        document.getElementById("a4-2").style.display = "none";
        document.getElementById("a4-3").style.display = "none";
        document.getElementById("r4-1").style.display = "block";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a4-1").style.display = "none";
        document.getElementById("a4-2").style.display = "none";
        document.getElementById("a4-3").style.display = "none";
        document.getElementById("r4-2").style.display = "block";
      } else if (tw == "3") {
        talk();
        conv = conv + 1;
        path = path + "3";
        document.getElementById("a4-1").style.display = "none";
        document.getElementById("a4-2").style.display = "none";
        document.getElementById("a4-3").style.display = "none";
        document.getElementById("r4-3").style.display = "block";
      }
    }
  } else if (conv == 2) {
    if (path == "11") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a5-1").style.display = "none";
        document.getElementById("a5-2").style.display = "none";
        document.getElementById("resp111").style.display = "block";
        document.getElementById("r5-1").style.display = "block";
        document.getElementById("a7-1").style.display = "block";
        document.getElementById("a7-2").style.display = "block";
        document.getElementById("a7-3").style.display = "block";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a5-1").style.display = "none";
        document.getElementById("a5-2").style.display = "none";
        document.getElementById("resp112").style.display = "block";
        document.getElementById("r5-2").style.display = "block";
        leave();
      }
    } else if (path == "12") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a6-1").style.display = "none";
        document.getElementById("a6-2").style.display = "none";
        document.getElementById("a6-3").style.display = "none";
        document.getElementById("resp121").style.display = "block";
        document.getElementById("r6-1").style.display = "block";
        document.getElementById("a8-1").style.display = "block";
        document.getElementById("a8-2").style.display = "block";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a6-1").style.display = "none";
        document.getElementById("a6-2").style.display = "none";
        document.getElementById("a6-3").style.display = "none";
        document.getElementById("resp122").style.display = "block";
        document.getElementById("r6-2").style.display = "block";
        leave();
      } else if (tw == "3") {
        talk();
        conv = conv + 1;
        path = path + "3";
        document.getElementById("a6-1").style.display = "none";
        document.getElementById("a6-2").style.display = "none";
        document.getElementById("a6-3").style.display = "none";
        document.getElementById("resp123").style.display = "block";
        document.getElementById("r6-3").style.display = "block";
        setTimeout(() => {
        document.getElementById("dude").className = "trackstar"}, 2000);

      }
    } else if (path == "13") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a9-1").style.display = "none";
        document.getElementById("a9-2").style.display = "none";
        document.getElementById("a9-3").style.display = "none";
        document.getElementById("resp131").style.display = "block";
        document.getElementById("r9-1").style.display = "block";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a9-1").style.display = "none";
        document.getElementById("a9-2").style.display = "none";
        document.getElementById("a9-3").style.display = "none";
        document.getElementById("resp132").style.display = "block";
        document.getElementById("r9-2").style.display = "block";
      } else if (tw == "3") {
        talk();
        conv = conv + 1;
        path = path + "3";
        document.getElementById("a9-1").style.display = "none";
        document.getElementById("a9-2").style.display = "none";
        document.getElementById("a9-3").style.display = "none";
        document.getElementById("r9-3").style.display = "block";
        window.location.href = "https://www.youtube.com/watch?v=dBrRBZy8OTs";
      }
    } else if (path == "23") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a10-1").style.display = "none";
        document.getElementById("a10-2").style.display = "none";
        document.getElementById("r10-1").style.display = "block";
        window.location.href = "https://www.expedia.com/Flights-Search?flight-type=on&mode=search&trip=oneway&leg1=from%3ARoanoke+Regional+Airport+%28ROA%29%2Cto%3ABarcelona+%28BCN+-+All+Airports%29%2Cdeparture%3A3%2F16%2F2022TANYT&options=cabinclass%3Aeconomy&passengers=children%3A0%2Cadults%3A1%2Cseniors%3A0%2Cinfantinlap%3AY&fromDate=3%2F16%2F2022&d1=2022-03-16";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a10-1").style.display = "none";
        document.getElementById("a10-2").style.display = "none";
        document.getElementById("resp232").style.display = "block";
        document.getElementById("r10-2").style.display = "block";
      }
    }
  } else if (conv == 3) {
    if (path == "111") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a7-1").style.display = "none";
        document.getElementById("a7-2").style.display = "none";
        document.getElementById("a7-3").style.display = "none";
        window.location.href = "https://classicreload.com/zork-i.html";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a7-1").style.display = "none";
        document.getElementById("a7-2").style.display = "none";
        document.getElementById("a7-3").style.display = "none";
        window.location.href = "https://pacman.live/play.html";
      } else if (tw == "3") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a7-1").style.display = "none";
        document.getElementById("a7-2").style.display = "none";
        document.getElementById("a7-3").style.display = "none";
        window.location.href = "https://www.retrogames.cc/arcade-games/dig-dug-rev-2.html";
      }
    } else if (path == "121") {
      if (tw == "1") {
        talk();
        conv = conv + 1;
        path = path + "1";
        document.getElementById("a8-1").style.display = "none";
        document.getElementById("a8-2").style.display = "none";
        document.getElementById("r8-1").style.display = "block";
        window.location.href = "https://www.google.com/search?q=restaurants+near+me&oq=resta&aqs=chrome.0.0i457i512j69i57j0i402l2j0i433i512j0i512l3j0i433i512j0i512.1808j0j7&sourceid=chrome&ie=UTF-8";
      } else if (tw == "2") {
        talk();
        conv = conv + 1;
        path = path + "2";
        document.getElementById("a8-1").style.display = "none";
        document.getElementById("a8-2").style.display = "none";
        document.getElementById("resp1212").style.display = "block";
        document.getElementById("r8-2").style.display = "block";
      }
    }
  }
}

function alert(txt) {
  console.log(txt);
}
