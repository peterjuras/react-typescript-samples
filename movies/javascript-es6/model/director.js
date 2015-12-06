class Director {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getStyledName() {
    return `by ${this.firstname} ${this.lastname}`;
  }
}

export default Director;
