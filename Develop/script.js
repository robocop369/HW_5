

//var saveEl = document.getElementById("save");
var saveBtns = document.querySelectorAll(".save-btn");
var currentTime = document.querySelector('#currentDay');
$(currentTime).text(moment().format('LLLL'));

/////////
function refEvent() {
var userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];
var elementName = document.getElementById(eventInfoEl);

var einfo = elementName.value.trim();
//   eventInfo
    // make sure value wasn't empty
    if (einfo !== "") {
      // get userinfo from localstorage, or if not any, set to empty array
      var userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];
  
      // format new score object for current user
      
      // save to localstorage
      userInfo.pull(newInfo);
     
      // redirect to next page
      // window.location.href = "highscores.html";
        }

// go to local storage

// get the object thats up there // assign it to a variable // parse into an array objects
// loop thur that array
// find out what time matches what input
// take the einfo and plug it into the input slot 

}


function saveEventInfo() {

    console.dir(this);

    // get the id that we have
    // this.id -- give it a var elementName
    var elementName = this.id;

    // we replace the 'save' part of element name with 'userInfo'
    elementName=elementName.replace("save", "userInfo");
    console.log(elementName);
    // then we have the name of the element we want to grab inside of elementName
    var eventInfoEl = document.getElementById(elementName);
    // then we use Elementname to reach into the html and grab the inputbox

     // get value of input box
    var einfo = eventInfoEl.value.trim();
//   eventInfo
    // make sure value wasn't empty
    if (einfo !== "") {
      // get userinfo from localstorage, or if not any, set to empty array
      var userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];
  
      // format new score object for current user
      var newInfo = {
        // time: 13
        einfo: einfo,
        };
  
      // save to localstorage
      userInfo.push(newInfo);
      window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
      // redirect to next page
      // window.location.href = "highscores.html";
        }
  }
  function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveEventInfo();
    }
  }

    //  saveBtns.onclick = saveEventInfo;

     for (let i = 0; i < saveBtns.length; i++) {
         saveBtns[i].onclick = saveEventInfo;
     }

     for (let i = 0; i < saveBtns.length; i++) {
        saveBtns[i].onbeforeunload = refEvent;
    }
     // .addEventListener('click', saveEventInfo)
     // document.on('click', '.save-btn', this, function() {})

  // user clicks button to submit event information 
   //  eventInfoEl.onkeyup = checkForEnter;