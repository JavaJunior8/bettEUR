// darkmode
let darkMode = localStorage.getItem('darkMode'); 
let sizeScalar = localStorage.setItem('sizeScalar', '0')

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
    "question": "What is the Contact information of the Erasmus Student Service Center (ESSC)?",
    "answer": "The Erasmus Student Service Centre is located in the Service Desk on the ground floor of the Sanders building between the SPAR and the Erasmus Foodplaza. Our desk is open on Monday, Wednesday, and Friday between 09.00-16.30. You can reach us by phone from Monday to Friday between 09.30-16.00 on telephone number 010-4088880 - choice 1."
  },
  {
    "question": "Contact and directions of campus Woudestein",
    "answer": "Information on Campus Woudestein and how to get there can be found here: [https://www.eur.nl/en/campus/locations/campus-woudestein]."
  },
  {
    "question": "Contact and directions of the Erasmus MC",
    "answer": "Addresses, telephone numbers, and information on access and parking can be found here: [https://www.erasmusmc.nl/en/contact-us]."
  },
  {
    "question": "How do I notify EUR of my new address?",
    "answer": "Reporting address changes has been changed since the arrival of Studielink. Before Studielink, there was a difference between study address and a home address. This has been replaced by a general correspondence address. Students taking degree programmes should change their address via eur.stuidelink.nl. Students who only take individual courses should change their address via their faculty."
  },
  {
    "question": "Will my new address also be known to DUO?",
    "answer": "No, you need to change your address yourself."
  },
  {
    "question": "Other addresses and contact details",
    "answer": "[Erasmus Student Service Centre (ESSC)], [Study Progress and Diploma department], [Faculties and Schools: website and contact details], [International Office], [Admissions Office], [Tuition Fee Office], [Erasmus College], [DUO]."
  },
  {
    "question": "When does the academic year start?",
    "answer": "The official start of the academic year is on 1 September. Please check your timetable or contact your study programme for more information on starting dates of classes and courses."
  },
  {
    "question": "Tuition fee and finances",
    "answer": "[Tuition fees & premaster rates], [Payment options], [Financing your stay], [Financial support]."
  },
  {
    "question": "Additional Proof of Enrolment",
    "answer": "Do you need additional Proof of Enrolment? You can produce, download, and print such proof yourself via Osiris Student (we advise you to use Mozilla Firefox). Do you need an officially stamped version? You can collect this at the front desk of the ESSC. Contact details of the ESSC can be found here: [https://www.eur.nl/en/education/practical-matters/contact]."
  },
  {
    "question": "Proof of Tuition Fee payment",
    "answer": "If you are registered as a student at EUR and also want to register for a second and parallel study at another university, you need a Proof of Payment of Tuition Fees (BBC). In a number of cases, it is possible to arrange the exchange of BBCs between educational institutions via Studielink. More information can be found here: [https://www.eur.nl/en/education/practical-matters/registration/requesting-documents-and-statements/proof-tuition-fee-payment]. If it is not yet possible to arrange the BBC via Studielink, you can request this statement via the contact form on the website: [https://eur.verintexpress.com/direct.aspx?UG=4&N=618&T=EN]. If you need a BBC for the tax authorities, you can use the same application form."
  },
  {
    "question": "Duplicate student card",
    "answer": "More information on the digital student id-card can be found at [https://www.eur.nl/en/education/practical-matters/registration/student-id-card]."
  },
  {
    "question": "Certified copy grade list",
    "answer": "If you need a certified copy of your transcript from Erasmus University, you can obtain this personally via the Erasmus Student Service Centre without making an appointment. Contact details of the ESSC can be found at [https://www.eur.nl/en/education/practical-matters/contact]. For mailing requests, contact the Team Study Progress and Diploma Administration."
  },
  {
    "question": "Proof of Graduation statement",
    "answer": "You will automatically receive an official graduation statement by email from the Study Progress & Diploma Team after your graduation date has been registered in Osiris."
  },
  {
    "question": "Pick up diploma at ESSC",
    "answer": "To collect your diploma from the ESSC, schedule an online appointment via a link received in the email from the team Study Progress & Diplomas. The pickup point is at the ESSC desk in the Servicedesk on the ground floor of the Sanders building."
  },
  {
    "question": "Diploma verification",
    "answer": "Information on diploma certification for alumni of Erasmus University Rotterdam (EUR) can be found on the university's website."
  },
  {
    "question": "Certificate of Recognition",
    "answer": "To apply for a recognition certificate, create a case in Osiris. The correct procedure and information can be found through the provided link."
  },
  {
    "question": "Official Transcript of records",
    "answer": "For a certified copy of your transcript from Erasmus University, visit the Erasmus Student Service Centre. No appointment is necessary. For mail or email requests, contact the Team Study Progress and Diploma Administration."
  },
  {
    "question": "Certified copy diploma",
    "answer": "If you need a certified copy of your diploma from the Erasmus University Rotterdam, visit the Erasmus Student Service Center with your original diploma. Copies will be made on official paper and certified. Diplomas from other institutions cannot be certified by Erasmus University."
  },
  {
    "question": "Make an exam without an official ID card",
    "answer": "If you've been robbed and don't have a student card or valid ID for an exam, contact the ESSC in advance by phone or email. Provide your student number, exam name, code, date, and time, and proof of report to the police or municipality. After approval, the ESSC will send a stamped and signed printout from Osiris by email. Note: Without the official statement, it is not possible to take the exam."
  },
  {
    "question": "Career advisor",
    "answer": "If you want to start thinking about your career before graduation, make an appointment with a career advisor. Workshops and information are available at [https://www.eur.nl/en/education/practical-matters/advice-counselling/career-services]."
  },
  {
    "question": "Study advice",
    "answer": "For information about study programs and advisors, refer to [Can I get information about my study program with a study advisor?], [How can I contact my study advisor?], and [What is the difference between a study advisor and a student counsellor?]."
  },
  {
    "question": "Personal counselling",
    "answer": "For personal counselling, you can contact [Student counsellor], [Confidential counsellor], or [Career advisor]."
  },
  {
    "question": "Executive education",
    "answer": "Executive education details can be found at [What is executive education?], [Post-master overview], and [Overview courses]."
  },
  {
    "question": "Which prior education do I need?",
    "answer": "Choose from a broad range of subjects, generally requiring knowledge at pre-university level. Students must assess whether they have sufficient knowledge for their chosen subject."
  },
  {
    "question": "What is online proctoring?",
    "answer": "Online proctoring involves remote exam monitoring, requiring identification and recording via webcam and microphone. Details are available at [FAQ Online Proctoring]."
  },
  {
    "question": "Programmes",
    "answer": "Information on programmes can be found at [Overview programmes] and [Study information]."
  },
  {
    "question": "Electives",
    "answer": "Details about electives, including [What is an elective course?], [What is the difference between a minor and an elective course?], [How can I register for an elective course?], [Which elective courses can I take?], and [Will I receive a student ID card as an external student taking an elective course?]."
  },
  {
    "question": "Events like Open Days and Student for a Day",
    "answer": "Information on events such as [Bachelor Open Day and Bachelor Student for a Day] and [Master Open Day]."
  },
  {
    "question": "Studiekeuzecheck algemeen",
    "answer": "The study choice check includes details on [What does the study choice check entail and how can I prepare for it?], [Who is the study choice check for?], [What is the purpose of the study choice check?], [Are there costs associated with the study choice check?], [How will the study choice activity benefit me?], [Am I entitled to request a study choice activity from the programme of my choice?], [Is EUR the only university that offers the study choice activity?], and [Waar kan ik een klacht indienen over de studiekeuzecheck]."
  },
  {
    "question": "Where can I get more information about the Binding Study Advice (BSA)?",
    "answer": "For full-time bachelor students, 60 EC must be obtained in the first year (45 EC for bachelor Medicine). A negative study advice means you cannot continue the programme and cannot reapply for three years. More information at [https://www.eur.nl/en/education/practical-matters/advice-counselling/study-advisors]."
  },
  {
    "question": "I am an EUR-student and would like to take a minor at EUR",
    "answer": "For information about minors at EUR, refer to [What is a minor?], [What is a joint LDE minor? (Leiden-Delft-Erasmus)], [Why should I take a minor?], [Where can I take a minor?], [When is the minor period at Erasmus University Rotterdam?]."
  },
  {
    "question": "Where can I obtain information about studying abroad?",
    "answer": "For studying abroad options and related information, visit [https://my.eur.nl/en/eur/practical-matters-0/studying-eur/studyinginternships-abroad/going-abroad-options]. For more specific study-related information, approach the international office of your faculty/school."
  },
  {
    "question": "Studying with a functional impairment",
    "answer": "For information on studying with a functional impairment, refer to [What is understood by the term functional impairment?], [What facilities does EUR offer students with a functional impairment?], [I have a disability. Can I get a pass for a disabled parking place at EUR?], [Disability access campus]."
  },
  {
    "question": "Studying and parenthood",
    "answer": "For students who are parents, information is available on [Does the University offer a childcare centre?], [Are there Study Facilities during my pregnancy?], [Is it possible to freeze/pause my enrollment during my pregnancy/due date]."
  },
  {
    "question": "Refugees",
    "answer": "For refugees interested in studying at EUR, information is available on [Studying at the Erasmus University], [Erasmus Preparatory Year], [Dutch State Exam (NTD-II)], [Contact details Language and Training Centre Erasmus]."
  },
  {
    "question": "Elite Sports and University education",
    "answer": "Erasmus University Rotterdam offers special counselling for students participating in elite sports. This includes extra counselling during studies, use of sports facilities, and financial support. More information can be found at [https://www.eur.nl/en/education/practical-matters/advice-counselling/student-counsellors/elite-sports]."
  },
  {
    "question": "Study facilities",
    "answer": "Study facilities at EUR include [University Library] and [Study spaces EUR]."
  },
  {
    "question": "Other facilities",
    "answer": "Other facilities at EUR include [Sport facilities], [Shops on Woudestein campus], [Food & Drink on Woudestein campus], [Does the EUR have facilities for playing the piano?], [Lactation rooms], [Where can I find information on parking on Woudestein?], [Parking for the disabled], [Banking facilities]."
  },
  {
    "question": "IT facilities",
    "answer": "IT facilities at EUR include [MyEUR], [Sin-Online], and [Osiris]."
  },
  {
    "question": "Where can I find information about housing for international students?",
    "answer": "Information about housing for international students can be found at [https://www.eur.nl/en/education/practical-matters/student-life/housing-international-students]."
  },
  {
    "question": "Registration City Hall",
    "answer": "Information about registering at City Hall Rotterdam can be found here: [https://www.eur.nl/en/education/practical-matters/student-life/city-hall]."
  },
  {
    "question": "Insurance for international students",
    "answer": "You are by law obliged to be properly insured during your time in the Netherlands. More information can be found here: [https://www.eur.nl/en/education/practical-matters/student-life/insurance]."
  },
  {
    "question": "Extension residence permit",
    "answer": "Information about extending your residence permit can be found here: [https://www.eur.nl/en/education/practical-matters/immigration/changes-permit/extension-residence-permit]."
  },
  {
    "question": "Complaints",
    "answer": "More information on how to file a complaint is available here: [https://www.eur.nl/en/education/practical-matters/advice-counselling/legal-position/complaints]."
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
    "question": "What mental health resources are available?",
    "answer": "Mental health resources include counseling services, support groups, and referrals to mental health professionals."
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
  var textbox = document.getElementById('chatbot-trigger-image');
  console.log(chatWindow.style.display)
  chatWindow.style.display = chatWindow.style.display != 'block' ? 'block' : 'none';
  textbox.style.display = 'none';
  
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

  console.log("Page loaded2")
  console.log(stringSimilarity.compareTwoStrings('what!', 'who?'));

  setTimeout(function() {
      document.getElementById('chatbot-trigger-image').style.display = 'block';
  }, 8000);

  // document.getElementById('chatbot-trigger-image').addEventListener('click', function() {
  //     console.log("image clicked")
  // });

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

// // font-size slider
// $(function () {
//   const fontSizeSlider = document.getElementById('fontSizeSlider');
//   const adjustableTextElements = document.querySelectorAll('._adjustable_text');

//   fontSizeSlider.addEventListener('input', function () {
//     const fontSizeValue = fontSizeSlider.value + 'px';
//     adjustableTextElements.forEach(element => {
//       console.log(element.style)
//       oldScalar = parseFloat(localStorage.getItem('sizeScalar'))
//       originalValue = element.style.fontSize / oldScalar
//       newValue = originalValue * fontSizeValue / 100
//       console.log("fontsize: " + element.style.fontSize + " storage:" + oldScalar  + " Original: " + originalValue, " New: " + newValue)
//       element.style.fontSize = newValue;
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {

// });

// font-size slider
$(function () {
  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const adjustableTextElements = document.querySelectorAll('._adjustable_text');

  fontSizeSlider.addEventListener('input', function () {
    const fontSizeValue = fontSizeSlider.value;
    adjustableTextElements.forEach(element => {

      console.log("start: " + window.getComputedStyle(element).fontSize)

      let computedFontSize = parseInt(window.getComputedStyle(element).fontSize.slice(0, -2));
      // console.log("fontsize: " + computedFontSize);
      // console.log(element.style.fontSize)
      // console.log(localStorage.getItem('sizeScalar'))
      oldScalar = parseInt(localStorage.getItem('sizeScalar'))
      originalValue = computedFontSize - oldScalar
      newValue = originalValue + parseInt(fontSizeValue)
      console.log("fontsize: " + computedFontSize + " slider " + parseInt(fontSizeValue) + " storage:" + oldScalar  + " originalValue: " + originalValue, " New: " + newValue)
      element.style.fontSize = newValue + 'px';
      // console.log("end: " + window.getComputedStyle(element).fontSize)
    });
    localStorage.setItem('sizeScalar', fontSizeValue)
  });
});


