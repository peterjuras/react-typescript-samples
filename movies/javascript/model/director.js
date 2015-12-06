var Director = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.getStyledName = function() {
    return 'by ' + this.firstname + ' ' + this.lastname;
  }
}

export default Director;
