describe('palindromeCheck', function () {
  it("is false for words that are not the same spelled forward and back", function () {
    expect(palindromeCheck("cat")).to.equal(false);
  });
  it("is true for words that are the same spelled forward and back", function () {
    expect(palindromeCheck("palindromeemordnilap")).to.equal(true);
  });
});
