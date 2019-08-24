const meals = {
  results: [
    {
      vendor_id: 1, // Vendor 1 will be serving
      client_id: 10, // Client 10 on
      datetime: '2017-01-01 13:30:00' // January 1st, 2017 at 1:30 pm
    },
    {
      vendor_id: 1,
      client_id: 40,
      datetime: '2017-01-01 14:30:00'
    },
    {
      vendor_id: 2,
      client_id: 20,
      datetime: '2017-01-01 13:30:00'
    },
    {
      vendor_id: 2,
      client_id: 20,
      datetime: '2017-01-01 13:30:00'
    },
    {
      vendor_id: 2,
      client_id: 20,
      datetime: '2017-01-01 13:30:00'
    }
  ]
};

const vendors = {
  results: [
    {
      vendor_id: 1,
      drivers: 1
    },
    {
      vendor_id: 2,
      drivers: 3
    }
  ]
};

module.exports = { meals, vendors };
