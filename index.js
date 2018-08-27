// Code your solution here:

function driversWithRevenueOver(drivers,revenue){
    function greaterRevenues(driver){
        return driver.revenue > revenue;
    }
    return drivers.filter(greaterRevenues);
}

function driverNamesWithRevenueOver(drivers,revenue){
    highRevenueDrivers = driversWithRevenueOver(drivers,revenue);

    function driverNames(driver){
        return driver.name;
    }
    return highRevenueDrivers.map(driverNames);
}

function exactMatch(drivers,obj){
    key = Object.keys(obj);
    function matchAttribute(driver){
        return driver[key] === obj[key];
    }
    return drivers.filter(matchAttribute)
}

function exactMatchToList(drivers,obj){
    const selectDrivers = exactMatch(drivers,obj);
    function getDriverNames(driver){
        return driver.name;
    }
    return selectDrivers.map(getDriverNames);
}



