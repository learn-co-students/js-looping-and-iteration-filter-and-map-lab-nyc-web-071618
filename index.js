// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  function driversFilter(driver) {
    return driver.revenue > revenue;
  }
  return driver.filter(driversFilter);
}

function driverNamesWithRevenueOver(driver, revenue) {
  matchingDrivers = driversWithRevenueOver(driver, revenue)
  function driverNames(driver) {
    return driver.name
  }
  return matchingDrivers.map(driverNames);
}

function exactMatch(drivers, obj) {
  key = Object.keys(obj);
  function matchAttribute(driver) {
      return driver[key] === obj[key];
  }
  return drivers.filter(matchAttribute)
}

function exactMatchToList(drivers, obj) {
  const selectDrivers = exactMatch(drivers, obj);
  function getDriverNames(driver) {
      return driver.name;
  }
  return selectDrivers.map(getDriverNames);
}
