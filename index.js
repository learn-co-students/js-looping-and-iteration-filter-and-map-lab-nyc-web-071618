// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver){
      return driver.name;
    });
}

function exactMatch(drivers, object){
  key = Object.keys(object);
  function matchAttribute(drivers) {
      return drivers[key] === object[key];
  }
  return drivers.filter(matchAttribute)
}


function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
