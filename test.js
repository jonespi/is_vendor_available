const { expect } = require('chai');
const { is_vendor_available } = require('./main');

describe('#is_vendor_available()', function() {
  it('should return true if outside of the blackout time', () => {
    expect(is_vendor_available(1, '2017-01-02 14:30:00')).to.be.eql(true);
    expect(is_vendor_available(1, '2017-01-01 15:30:00')).to.be.eql(true);
    expect(is_vendor_available(1, '2017-01-01 15:15:00')).to.be.eql(true);
    expect(is_vendor_available(1, '2017-01-01 11:30:00')).to.be.eql(true);
    expect(is_vendor_available(1, '2017-01-01 15:50:00')).to.be.eql(true);
  });

  it('should return true if there are enough drivers', () => {
    expect(is_vendor_available(2, '2017-01-01 14:30:00')).to.be.eql(true);
    expect(is_vendor_available(2, '2017-01-01 14:45:00')).to.be.eql(true);
    expect(is_vendor_available(2, '2017-01-01 16:30:00')).to.be.eql(true);
    expect(is_vendor_available(2, '2017-01-01 17:30:00')).to.be.eql(true);
    expect(is_vendor_available(2, '2017-01-01 18:30:00')).to.be.eql(true);
  });

  it('should return false when only one driver and input is within the blackout time', () => {
    expect(is_vendor_available(1, '2017-01-01 13:39:00')).to.be.eql(false);
    expect(is_vendor_available(1, '2017-01-01 13:15:00')).to.be.eql(false);
    expect(is_vendor_available(1, '2017-01-01 14:15:00')).to.be.eql(false);
    expect(is_vendor_available(1, '2017-01-01 14:20:00')).to.be.eql(false);
    expect(is_vendor_available(1, '2017-01-01 14:40:00')).to.be.eql(false);
  });

  it('should return false if no drivers available', () => {
    expect(is_vendor_available(2, '2017-01-01 13:00:00')).to.be.eql(false);
    expect(is_vendor_available(2, '2017-01-01 13:10:00')).to.be.eql(false);
    expect(is_vendor_available(2, '2017-01-01 13:15:00')).to.be.eql(false);
    expect(is_vendor_available(2, '2017-01-01 13:20:00')).to.be.eql(false);
    expect(is_vendor_available(2, '2017-01-01 13:40:00')).to.be.eql(false);
  });
});
