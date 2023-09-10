var buttonColours=["green","red","yellow","blue"]
var gamePattern=[]
var userClickedPattern=[]
var level=0,start=0

$(".btn").click(function(){
  if(start){
  var userChosenColour=$(this).attr("id")
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
checkAnswer(userClickedPattern.length-1)}
})
function checkAnswer(currentLevel)
{
   if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
   {
    console.log("sucess")
    if(gamePattern.length===userClickedPattern.length)
    setTimeout(function(){nextSequence()},1000)
   }
   else{start=0;
    level=0
    gamePattern=[]
    $("h1").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over")
    playSound("wrong")
    setTimeout(function(){ $("body").removeClass("game-over")},200)
  
 }
}
$(document).on("keydown",function(){if(!start){start=1
  nextSequence()}})
function nextSequence()
{level++;
  userClickedPattern=[]
  $("h1").text("LEVEL "+level)
    var randomNumber=Math.floor(Math.random()*4)
    var randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
 playSound(randomChosenColour)
}
function playSound(randomChosenColour)
{ animatePress(randomChosenColour)
  $(`.${randomChosenColour}`).fadeOut(100).fadeIn(100);
  var beat=new Audio(`sounds/${randomChosenColour}.mp3`)
  beat.play()
}
function animatePress(color)
{
  $(`.${color}`).addClass("pressed")
  setTimeout( function (){$(`.${color}`).removeClass("pressed")},100)
}


