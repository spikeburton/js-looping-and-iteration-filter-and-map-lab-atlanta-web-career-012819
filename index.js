// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    const attr = Object.keys(obj)[0];
    return driver[attr] === obj[attr];
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver) {
    return driver.name;
  });
}
