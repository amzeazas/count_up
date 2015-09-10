describe('countUp', function() {
  it("counts up to a given number", function() {
    expect(countUp(5, 1)).to.equal('1,2,3,4,5');
  });

  it("counts up by a given number to a given target", function() {
    expect(countUp(25, 5)).to.equal('5,10,15,20,25');
  });
});
