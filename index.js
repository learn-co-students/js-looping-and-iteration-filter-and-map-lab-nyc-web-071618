// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, hash) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const key in hash) {
      matches = driver[key] === hash[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, hash){
  return exactMatch(drivers,hash).map(function(driver){
    return driver.name
  })
}
