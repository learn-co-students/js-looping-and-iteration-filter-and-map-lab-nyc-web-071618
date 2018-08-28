// Code your solution here:

 //
 // driversWithRevenueOver- This function takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument. So anything that is higher than the variable we named revenue

 function driversWithRevenueOver(drivers, revenue){
   return drivers.filter(function(driver){
     return driver.revenue > revenue;
   });
 }

// driverNamesWithRevenueOver() - This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000.

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function(driver){
    return driver.name
  });
}


  // exactMatch() - This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.

function exactMatch(drivers, object){
  return drivers.filter(function(driver){
    for(const key in object){
      if (driver[key]== object[key])
      return driver[key];
    }
    return false;
  });
}

function exactMatchToList(drivers, object){
  return exactMatch(drivers, object).map(function(driver){
    return driver.name
  })
}
