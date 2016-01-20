describe('palindromeCheck', function () {
  it("is false for words that are not the same spelled forward and back", function () {
    expect(palindromeCheck("cat")).to.equal(false);
  });
  it("is true for words that are the same spelled forward and back", function () {
    expect(palindromeCheck("palindromeemordnilap")).to.equal(true);
  });
  it("is true for integers that are the same spelled forward and back", function () {
    expect(palindromeCheck("1002001")).to.equal(true);
  });
});

describe('textReverser', function () {
  it("returns input text reversed", function () {
    expect(textReverser("cat")).to.equal("tac");
  });
  it("returns input integers reversed", function () {
    expect(textReverser("1234")).to.equal("4321");
  });
});
