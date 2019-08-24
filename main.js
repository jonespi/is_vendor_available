const { vendors, meals } = require('./data');

/**
 * Determine if a vendor is available for a delivery.
 * @param {integer} id An integer that uses the vendor_id as an index.
 * @param {string} Converts to a date object that
 * @return {boolean} returns if the vendor is available for delivery on that date
 */

const is_vendor_available = (id, date) => {
  const inputDate = new Date(date);
  const vendor = vendors.results.find(ven => ven.vendor_id === id);
  let driverCount = vendor.drivers;

  for (let i = 0; i < meals.results.length; i++) {
    if (meals.results[i].vendor_id === id) {
      const startTime = new Date(meals.results[i].datetime);
      startTime.setMinutes(startTime.getMinutes() - 30);

      const endTime = new Date(meals.results[i].datetime);
      endTime.setMinutes(endTime.getMinutes() + 10);

      if (inputDate >= startTime && inputDate <= endTime) {
        driverCount--;
        if (driverCount < 1) {
          return false;
        }
      }
    }
  }
  return true;
};

// vendors.results is not an object so you do have to loop over to find the vendor_id
// assuming that vendor_id is a unique index
// declare driver count as this is needed to identify if there is enough drivers

// meals is an array of deliveries with a date
// loop over the meals that are being delivered
// identify if indexed item is the same vendor_id
// get the blackout range on the same indexed item
// start=results[i]-30, end=results[i]+10
// need to make 2 copies because date objects are passed by reference

// if inputDate is within that range,
// remove a driver from the count because they're not available
// if theres no drivers available, return false

// if it reaches the end of the function, we've looped through all meals and there hasn't been a conflict so you can return true

module.exports = {
  is_vendor_available
};
