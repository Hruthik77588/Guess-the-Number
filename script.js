const qoutes = document.querySelector('.quotes')
const userInput = document.querySelector(".user-input")
const form = document.querySelector("form")
const submitBtn=document.querySelector('.submit-btn')
const RestartBtn=document.querySelector('.start-btn')
const allGuesses=document.querySelector('.allguesses')

;(function(){
    let randomNo = Math.round(Math.random() * 100)
const allGuessesArray=[]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if (userInputValue < randomNo) {
      qoutes.innerText="Too Low"
    } else if (userInputValue > randomNo) {
       qoutes.innerText="Too High"
    } else {
        qoutes.innerText="YOu got it ! Congrats"
        RestartBtn.disabled=false;
        submitBtn.disabled=true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText=`Your Guesses: ${allGuessesArray.join(', ')}`
    form.reset()

})

RestartBtn.addEventListener('click',()=>{
    qoutes.innerText='';
    allGuesses.innerText='';
    submitBtn.disabled=false;
     RestartBtn.disabled=true;
   randomNo = Math.round(Math.random() * 100)
   allGuessesArray.length=0
})
})()

