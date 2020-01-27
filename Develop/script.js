
var eventInfoEl = document.getElementById("userInfo");
//var saveEl = document.getElementById("save");
var saveBtn = document.getElementById("save");
var currentTime = document.querySelector('#currentDay');
$(currentTime).text(moment().format('LLLL'));



function saveEventInfo() {
    // get value of input box
    var einfo = eventInfoEl.value.trim();
//   eventInfo
    // make sure value wasn't empty
    if (einfo !== "") {
      // get userinfo from localstorage, or if not any, set to empty array
      var userInfo =
        JSON.parse(window.localStorage.getItem("userInfo")) || [];
  
      // format new score object for current user
      var newInfo = {
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

     saveBtn.onclick = saveEventInfo;
  // user clicks button to submit event information 
   //  eventInfoEl.onkeyup = checkForEnter;