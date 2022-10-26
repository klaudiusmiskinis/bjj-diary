var dailies;

function init() {
  dailies = new InteractDaily(dailies);
  dailies.splitDates();
  const menuMain = document.querySelector("#menu-main-head");
  menuMain.insertAdjacentHTML("afterbegin", menuYears(dailies));
  console.log(menuYears(dailies));
}

function menuYears(dailies) {
  let render = "";
  dailies.dailies.forEach((date) => {
    console.log(date);
    render = `"<li class="mb-1">
  <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-light"
    data-bs-toggle="collapse"
    data-bs-target="#${replaceSlashWithHyphen(date.id)}"
    aria-expanded="false">
    ${date.year}
  </button>
    <div class="collapse" id="${replaceSlashWithHyphen(date.id)}">
      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
      ${dailies.getMonthElements(dailies.dailies)}
      </ul>
    </div>
  </li>"`;
  });
  return render;
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
