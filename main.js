const dynamicContent = document.getElementById("dyanamic-text");
console.log(dynamicContent);

const phrases = ["Software Engineer...", "Mentor...", "Human Being..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const earisingSpeed = 75;

function printletters(phrase){
    for(let index = 0; index<phrase.length; index++){
        console.log(phrase.charAt(index));
    }
    if(letterIndex == phrase.length){
        // clear the letters which have been typed
        clearLetters();
    }
    else if(letterIndex<phrase.length ){

        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        
        setTimeout(function(){ 
            printletters(phrase);
        },typingSpeed)
    }
}

function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrase.length;
        letterIndex = 0;
        printletters(phrase[phraseIndex]);
    }
    else if(letterIndex > -1){
       
        let updatedPhrase ="";
        for(let index =0; index < letterIndex; index++){
            updatedPhrase += phrase[phraseIndex].charAt(index);
        }
        console.log(updatedPhrase);
        dynamicContent.textContent = updatedPhrase;
        letterIndex--;
        setTimeout(clearLetters, earisingSpeed);
    }
}

// printletters(phrase[0]);
printletters(phrases[phraseIndex]);

//window

window.addEventListener("scroll", function() {
    // console.log(this.window.scrollY);
    let intro = this.document.querySelector(".intro");
    if(this.window.scrollY >= (intro.offsetHeight + intro.offsetTop)) {
        this.document.querySelector(".header").style.position = "sticky";
    } else {
        this.document.querySelector(".header").style.position = "revert";
    }
})

//we can use $0 to log the highlighted line in th console this feature is only available in devlper tools