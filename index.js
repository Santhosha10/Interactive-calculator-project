function speak(text) {
         const synth = window.speechSynthesis;
         const utterance = new SpeechSynthesisUtterance(text);
         synth.speak(utterance);
         document.getElementById("display").value += text;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    try{
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value="";
        speak(result);
    }catch(error){
        document.getElementById("display").value="";
        speak("Error");
    }
}

