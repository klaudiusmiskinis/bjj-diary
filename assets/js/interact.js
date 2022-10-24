const SLASH = "/";

class InteractDaily {
  constructor(dailies) {
    this.dailies = dailies;
    this.splittedYears = [];
  }

  splitYears() {
    this.dailies.forEach((daily) => {
      const splitted = daily.id.split(SLASH);
      const year = splitted[splitted.length - 1];
      if (!this.splittedYears.includes(year)) {
        this.splittedYears.push(year)
      }
    });
  }

  splitDate() {
    this.dailies.forEach((daily) => {
      const splitted = daily.id.split(SLASH);
      const year = splitted[splitted.length - 1];
      const month = splitted[splitted.length - 2];
      const day = splitted[splitted.length - 3];
      if (!this.splittedYears.includes(year)) {
        this.splittedYears.push(year)
      }
      if (!this.splittedYears.includes(year)) {
        this.splittedYears.push(year)
      }
    });
  }

  hey() {
    console.log('hey');
  }
}
