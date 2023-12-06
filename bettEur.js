// darkmode
let darkMode = localStorage.getItem('darkMode'); 


const darkModeToggle = document.querySelector('#dark-mode-toggle');
const chatButton = document.querySelector('#chatbot-toggle');
const chatbotClose = document.querySelector('#chatbot-close');

const jsonData = {
  "questions_and_answers": [
  {
  "question": "Hello",
  "answer": "Hi, feel free to ask any questions you have."
  },
  {
  "question": "What services are there for disabled students?",
  "answer": "Disabled students can access academic adjustments, assistive technology, and accessible transportation services."
  },
  {
  "question": "How to request academic accommodations?",
  "answer": "To request academic accommodations, reach out to the Disability Support Office and submit disability documentation."
  },
  {
  "question": "Any disability scholarships?",
  "answer": "Disability scholarships are available. Visit our financial aid website for more information."
  },
  {
  "question": "Is the campus wheelchair friendly?",
  "answer": "The campus is wheelchair friendly, featuring ramps, elevators, and accessible restrooms."
  },
  {
  "question": "Can I get transport help?",
  "answer": "Transport help is provided through accessible shuttles and assistance services."
  },
  {
  "question": "What mental health support is available?",
  "answer": "Available mental health support includes counseling, support groups, and workshops."
  },
  {
  "question": "How to get a housing accommodation?",
  "answer": "To get a housing accommodation, contact the housing office with your disability documentation."
  },
  {
  "question": "Any student groups for disabilities?",
  "answer": "There are student organizations focused on disabilities."
  },
  {
  "question": "What assistive tech is available?",
  "answer": "Available assistive technology includes screen readers, voice recognition software, and more."
  },
  {
  "question": "How to contact Disability Support Office?",
  "answer": "The Disability Support Office can be contacted via email, phone, or by visiting their campus office."
  }
  ]
  }


const questions = jsonData.questions_and_answers.map(item => item.question);
const answers = jsonData.questions_and_answers.map(item => item.answer);

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

chatButton.addEventListener('click', () => {
  var chatWindow = document.getElementById('chatbot-window');
  console.log(chatWindow.style.display)
  chatWindow.style.display = chatWindow.style.display != 'block' ? 'block' : 'none';
});

chatbotClose.addEventListener('click', () => {
  var chatWindow = document.getElementById('chatbot-window');
  console.log("test closing")
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
});


let botMessage = document.createElement("div");
botMessage.classList.add('chat-message', 'bot-message');
botMessage.textContent = "Welcome to the bettEUR chatbot, what can I help you with";

document.getElementById("chat-messages").appendChild(botMessage);

let chatWindow = document.getElementById("chat-messages");
chatWindow.scrollTop = chatWindow.scrollHeight;

function appendMessage(message, isUserMessage) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  if (isUserMessage) {
      messageDiv.classList.add('user-message');
  } else {
      messageDiv.classList.add('bot-message');
  }
  messageDiv.textContent = message;
  document.querySelector('.chat-messages').appendChild(messageDiv);
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

  console.log("Page loaded")
  console.log(stringSimilarity.compareTwoStrings('what!', 'who?'));

  document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-message').click();
    }
  });
  

  document.getElementById('send-message').addEventListener('click', function() {
      const inputField = document.getElementById('chat-input');
      const chatMessages = document.getElementById('chat-messages');


      user_input = inputField.value

      if (user_input.length == 0) {
          return
      }

      
      
      const userMessageDiv = document.createElement('div');
      userMessageDiv.textContent = user_input;
      
      userMessageDiv.classList.add('chat-message', 'user-message');
      chatMessages.appendChild(userMessageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(function() {
          const botMessageDiv = document.createElement('div');
          
          console.log("inputfield: " + user_input)
          console.log("inputfield: " + stringSimilarity.compareTwoStrings("Hello", user_input))

          similarity = questions.map(db_question => stringSimilarity.compareTwoStrings(db_question, user_input))
          console.log(similarity)
          console.log(Math.max(...similarity))
          botMessageDiv.textContent = answers[similarity.indexOf(Math.max(...similarity))]

          botMessageDiv.classList.add('chat-message', 'bot-message');
          chatMessages.appendChild(botMessageDiv);
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000); 

      inputField.value = ""
  });
});

// Accessbility tools sticky menu

$(function() {
  $("#trigger").on("click", function() {
    if($("#trigger").is(":checked")) {
      $(".click-here").fadeOut("fast");
    }
  });
  
});

// font-size slider
$(function () {
  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const adjustableTextElements = document.querySelectorAll('._adjustable_text');

  fontSizeSlider.addEventListener('input', function () {
    const fontSizeValue = fontSizeSlider.value + 'px';
    adjustableTextElements.forEach(element => {
      element.style.fontSize = fontSizeValue;
    });
  });
});


