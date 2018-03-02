
function getAnswer() {
  document.getElementById("ball").style.animation = "shake 1s"
  document.getElementById("questionButton").style.display = "none"
  setTimeout(function(){
    
    document.getElementById("answer").innerHTML = randomAnswer()
    
    setTimeout(function() {
      document.getElementById("answer").innerHTML = "Ask me a Question" 
      document.getElementById("ball").style.animation = ""
      document.getElementById("questionButton").style.display = ""
    }
              , 5000)
    
  } , 2000)
}

function randomAnswer() {
  
  var answers = ["It is certain" , "It is decidedly so" , "Without a doubt" , "Yes definitely" , "You may rely on it" , "As I see it, yes" , "Most likely" , "Outlook good" , "Yep" , "Signs point to yes" , "Reply hazy try again" , "Ask again later" , "Better not tell you now" , "Cannot predict now" , "Concentrate and ask again" , "Don't count on it" , "My reply is no" , "My sources say no" , "Outlook not so good" , "Very doubtful"]
  
  var choice = Math.floor(Math.random()*answers.length)
  
  return answers[choice]

}


