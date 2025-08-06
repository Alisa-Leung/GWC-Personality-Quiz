/*Add your JavaScript here*/

var sweet = 0;
var savory = 0;
var spicy = 0;

var questions = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var result = document.getElementById("result");
var resultInfo = document.getElementById("resultInfo");
var restart = document.getElementById("restart");

q1a1.addEventListener("click", updateSpicy);
q1a2.addEventListener("click", updateSweet);
q1a3.addEventListener("click", updateSavory);

q2a1.addEventListener("click", updateSavory);
q2a2.addEventListener("click", updateSweet);
q2a3.addEventListener("click", updateSpicy);

q3a1.addEventListener("click", updateSpicy);
q3a2.addEventListener("click", updateSweet);
q3a3.addEventListener("click", updateSavory);

q4a1.addEventListener("click", updateSweet);
q4a2.addEventListener("click", updateSavory);
q4a3.addEventListener("click", updateSpicy);

q5a1.addEventListener("click", updateSpicy);
q5a2.addEventListener("click", updateSweet);
q5a3.addEventListener("click", updateSavory);

restart.addEventListener("click", restartQuiz);

function updateSweet(){
  sweet += 1;
  questions += 1;
  console.log("Sweet = " + sweet + " Questions = " + questions);
  if (questions == 5){
    console.log("The quiz is complete!");
    updateResult(Math.max(sweet, savory, spicy));
  }
}
function updateSavory(){
  savory += 1;
  questions += 1;
  console.log("Savory = " + savory + " Questions = " + questions);
  if (questions == 5){
    console.log("The quiz is complete!");
    updateResult(Math.max(sweet, savory, spicy));
  }
}
function updateSpicy(){
  spicy += 1;
  questions += 1;
  console.log("Spicy = " + spicy + " Questions = " + questions);
  if (questions == 5){
    console.log("The quiz is complete!");
    updateResult(Math.max(sweet, savory, spicy));
  }
}

function updateResult(num){
  if (num == sweet){
    console.log("You are a sweet supporter!");
    result.innerHTML = "Sweet Supporter!";
    resultInfo.innerHTML = "You're the person everyone gravitates toward -- comforting, warm, and kind. Like a sweet drizzle of honey or a slice of a decadent homemade cake, you bring joy to those around you through your support for others. Your empathy and thoughtfulness make you a great listener, and you make the world a sweeter place one small act of kindness at a time.";
  } else if (num == savory){
    console.log("You are a savory strategist!");
    result.innerHTML = "Savory Strategist!";
    resultInfo.innerHTML = "You're dependable, insightful and composed -- never without a plan. Like a perfectly aged cheese or a well-seasoned stew, you bring depth, balance, and wisdom to every situation you encounter. Your analytical perspectives and steady demeanor make you a trustworthy friend and a pillar of strength. You value tradition and structure, but you're always ready to adapt when the moment calls for it.";
  } else {
    console.log("You are a spicy swashbuckler!");
    result.innerHTML = "Spicy Swashbuckler!";
    resultInfo.innerHTML = "Bold, adventurous, and full of zest -- you're the life of the party and the spark that ignites excitement. Like a fiery chili or a dash of hot sauce, you add intensity and flair wherever you go through your infectiously energized personality. Your fearlessness inspires others to step out of their comfort zones and embrace the thrill of the unknown like you do. You live for the moment, and you aren't afraid to take risks in the pursuit of passion and adventure."
  }
  showRestartButton()
}
function showRestartButton(){
  restart.style.display = "inline";
}
function restartQuiz(){
  restart.style.display = "none";
  sweet = 0;
  spicy = 0;
  savory = 0;
  result.innerHTML = "";
  resultInfo.innerHTML = "";
  questions = 0;
}