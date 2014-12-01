/*global describe, beforeEach, afterEach, it */

describe("Stack", function () {

  it("should work", function () {
    var stack = new basic.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.items[0]).to.be(1);
    expect(stack.items[1]).to.be(2);
    expect(stack.items[2]).to.be(3);
  });

});
