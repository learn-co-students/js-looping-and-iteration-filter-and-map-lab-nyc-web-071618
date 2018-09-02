// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue >= revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map((driver) => driver.name)
}

function exactMatch(drivers, property) {
  return drivers.filter(function (driver) {
    let match = false

    for (const key in property) {
      match = driver[key] === property[key]
    }

    return match
  });
}

function exactMatchToList(drivers, property) {
  return exactMatch(drivers, property)
  .map((driver) => driver.name)
}
