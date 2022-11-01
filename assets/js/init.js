/* GLOBAL VARS */
var dailies;
delete dailies;

function previousDate() {
  console.log("previous");
}

function nextDate() {
  console.log("next");
}

function init() {
  dailies = new InteractDaily(dailies);
  dailies.splitDates();
}

const req = new XMLHttpRequest();
req.open("GET", FILEPATH, true);
req.send();
req.onload = () => {
  if (req.status >= 200 && req.status < 400) {
    dailies = JSON.parse(req.responseText);
    init();
  }
};
