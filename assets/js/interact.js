class InteractDaily {
  constructor(dailies) {
    this.dailies = dailies;
    this.splittedYears = [];
    this.splittedMonths = [];
  }

  splitDates() {
    this.dailies.forEach((daily) => {
      const splitted = daily.id.split(SLASH);
      const year = splitted[splitted.length - 1];
      const month = splitted[splitted.length - 2];
      if (!this.splittedYears.includes(year)) {
        this.splittedYears.push(year);
      }
      if (!this.splittedMonths.includes(month)) {
        this.splittedMonths.push(month);
      }
    });
  }

  getMonthElements(date) {
    return "<p></p>";
  }

  dateExists(month, year) {
    this.dailies.forEach((daily) => {
      const combined = month + SLASH + year;
      if (!daily.id.includes(combined)) {
        return false;
      }
      return true;
    });
  }
}
