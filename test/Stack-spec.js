/*global describe, beforeEach, afterEach, it */

describe("Stack", function () {

  var stack;

  beforeEach(function () {
    stack = new basic.Stack();
  });

  describe("push", function () {
    it("should add a value to an empty stack", function () {
      stack.push(1);
      expect(stack.items[0]).to.be(1);
    });

    it("should add new values on top", function () {
      stack.push(1);
      stack.push(2);
      expect(stack.items[0]).to.be(1);
      expect(stack.items[1]).to.be(2);
    });
  });

  describe("pop", function () {
    it("should return undefined if there aren't any values left", function () {
      expect(stack.pop()).to.be(undefined);
    });

    it("should return the value on the top", function () {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).to.be(2);
      expect(stack.pop()).to.be(1);
    });

    it("should call the callback when the last value is popped", function () {
      stack.push(1);
      stack.poppedLastItem = sinon.stub();
      stack.pop();
      expect(stack.poppedLastItem.callCount).to.be(1);
    });
  });

  describe("peek", function () {
    it("should return undefined if the stack is empty", function () {
      expect(stack.peek()).to.be(undefined);
    });

    it("should return the value on the top", function () {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).to.be(2);
    });

    it("should return the same value after repeated calls", function () {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).to.be(2);
      expect(stack.peek()).to.be(2);
    });
  });

  describe("size", function () {
    it("should be 0 for an empty stack", function () {
      expect(stack.size).to.be(0);
    });

    it("should be the correct size after pushing and popping", function () {
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack.size).to.be(1);
    });
  });

  describe("isEmpty", function () {
    it("should be true when the stack is empty", function () {
      expect(stack.isEmpty).to.be(true);
      stack.push(1);
      stack.pop();
      expect(stack.isEmpty).to.be(true);
    });

    it("should be false when the stack has at least one value", function () {
      stack.push(1);
      expect(stack.isEmpty).to.be(false);
    });
  });

  describe("toArray()", function () {
    it("should return an array containing the items", function () {
      stack.push(1);
      stack.push(2);
      var array = stack.toArray();
      expect(array[0]).to.be(1);
      expect(array[1]).to.be(2);
    });
    
    it("should not copy the items", function () {
      var objA = {};
      var objB = {};
      stack.push(objA);
      stack.push(objB);
      var array = stack.toArray();
      expect(array[0]).to.be(objA);
      expect(array[1]).to.be(objB);
    });
  });
});
