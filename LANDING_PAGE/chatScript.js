 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi") || input.includes("nomoskar")) {
      output = "Hello, nice to meet you!";
    } 
    else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } 
    else if (input.includes("what is your name")||input.includes("your name")||input.includes("who are you")||input.includes("may I know your name")) {
      output = "My name is Happy, How can i help you??";
    } 
    else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions related to this site.";
    } 
    else if (input.includes("what kind of website is this")) {
      output = "This is a hospital finder website.";
    }
    else if (input.includes("Can you help me to find a hospital") || input.includes("Please help to find a hospital")|| input.includes("how to find a hospital")|| input.includes("find hospital")) {
      output = "please follow this steps ---  go to the home page  -> click on the search bar  -> type your location  -> find your nearest hospital";
    } 
    else if (input.includes("Can you help me to find my disease") || input.includes("Please help to find my disease")|| input.includes("how to find my disease")|| input.includes("I don't know about my disease")|| input.includes("Find or check my disease")|| input.includes("how top check my disease")|| input.includes("find disease")) {
      output = "please follow this steps : go to the homepage -> click the 'Find a Disease' -> give the picture input -> give your query(symptoms) -> know about your disease";
    } 
    else if (input.includes("Can you help me to find a doctor") || input.includes("Please help to find a doctor")|| input.includes("how to find a doctor")|| input.includes("steps for find a doctor")|| input.includes("Find a doctor")|| input.includes("find doctor")|| input.includes("doctor")) {
      output = "please follow this steps : -> go to the home page -> click on the 'Find a Doctor' -> type about your disease -> get the doctor name for your disease -> Then book appointment from the 'Book Appointment' page";
    } 
    else if (input.includes("Can you help me to book an appointment") || input.includes("Book an Appointment")|| input.includes("Please help to book an appointment")|| input.includes("how to book an appointment")|| input.includes("book appointment")) {
      output = "please follow this steps : -> go to the home page -> click on the 'Book an Appointment' option -> click on your preferred hospital where you want to book your appointment ";
    }
    else if (input.includes("emergency")||input.includes("for emergency")) {
      output = "click on sos button for most emergency case";
    }
    else if (input.includes("find nearest hospital ")||input.includes("hospital near me")||input.includes("nearest hospital")) {
      output = "click on location search bar and go to this hospital";
    }
    else if (input.includes("website related problem")||input.includes("login issue")||input.includes("register issue")||input.includes("I registered but cant login")||input.includes("need help")) {
      output = "any kind of help needed please raise your problem in the callback we will contact you";
    }
    else if (input.includes("sala") || input.includes("bc")|| input.includes("mc")|| input.includes("i use slang word")) {
      output = "Do not use slang word";
    } 
    else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  document.getElementById("button").addEventListener("click", sendMessage);

  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });