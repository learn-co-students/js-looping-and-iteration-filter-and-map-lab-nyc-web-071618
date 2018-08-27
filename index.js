// Code your solution here:

function driversWithRevenueOver(driverList, revenue) {
  return driverList.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driverList, revenue) {
  return driversWithRevenueOver(driverList, revenue).map(function(driver) {
    return driver.name
  })
}

function exactMatch(driverList, obj) {
  return driverList.filter(function(driver) {
    let matches = false

    for(const key in obj) {
      matches = driver[key] === obj[key];
    }
    return matches
  })
}

function exactMatchToList(driverList, obj) {
  return exactMatch(driverList, obj).map(function(driver) {
    return driver.name;
  })
}
