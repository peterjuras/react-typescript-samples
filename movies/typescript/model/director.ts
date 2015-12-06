export default class Director {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  firstname: string;
  lastname: string;

  getStyledName() {
    return `by ${this.firstname} ${this.lastname}`;
  }
}
