describe('palindromeCheck', function () {
  it("is false for words that are not the same spelled forward and back", function () {
    expect(palindromeCheck("cat")).to.equal(false);
  });
});
