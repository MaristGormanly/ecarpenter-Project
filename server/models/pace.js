// add somthing to exports you can access other node
function gamePace(Name, Health, Mileage) {
  this.paceName = Name;
  this.paceHealth = Health;
  this.paceMileage = Mileage;     // = new date (inDate); makes sure when it passes the peramitor of the dates it comes out a date not a string
}

exports.paceOptions = function (Name, Health, Mileage) {
  var pace = new gamePace(Name, Health, Mileage);
  return pace;
}
