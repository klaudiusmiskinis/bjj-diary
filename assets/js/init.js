// relative path to the desired directory
const file = "assets/data/date.json";
var dailies;


function init() {
    dailies = new InteractDaily(dailies);
    dailies.splitDate();
}

const req = new XMLHttpRequest();
req.open("GET", file, true);
req.send();
req.onload = () => {
  if (req.status >= 200 && req.status < 400) {
    dailies = JSON.parse(req.responseText);
    init();
  }
};