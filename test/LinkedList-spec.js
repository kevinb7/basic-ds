/*global describe, beforeEach, afterEach, it */

describe("LinkedList", function () {
  var list, array, value;

  beforeEach(function () {
    list = new basic.LinkedList();
  });

  describe("push_front", function () {
    it("push_front should push items to the front", function () {
      list.push_front("apple");
      list.push_front("banana");
      list.push_front("cherry");

      var array = list.toArray();
      expect(array[0]).to.be("cherry");
      expect(array[2]).to.be("apple");
      expect(array).to.have.length(3);
    });
  });

  describe("push_back", function () {
    it("push_back should push items to the back", function () {
      list.push_back("apple");
      list.push_back("banana");
      list.push_back("cherry");

      var array = list.toArray();
      expect(array[0]).to.be("apple");
      expect(array[2]).to.be("cherry");
      expect(array).to.have.length(3);
    });
  });

  describe("pop_front", function () {
    it("should work with multiple item in the list", function () {
      list.push_back("apple");
      list.push_back("banana");
      list.push_back("cherry");

      value = list.pop_front();
      expect(value).to.be("apple");

      array = list.toArray();
      expect(array[0]).to.be("banana");
      expect(array[1]).to.be("cherry");
      expect(array).to.have.length(2);
    });

    it("should work with a single item in the list", function () {
      list.push_back("apple");

      value = list.pop_front();
      expect(value).to.be("apple");

      array = list.toArray();
      expect(array).to.have.length(0);
    });

    it("should work with nothing in the list", function () {
      list.pop_back();

      value = list.pop_front();
      expect(value).to.be(null);

      array = list.toArray();
      expect(array).to.have.length(0);
    });
  });

  describe("pop_back", function () {
    it("should work with multiple item in the list", function () {
      list.push_back("apple");
      list.push_back("banana");
      list.push_back("cherry");

      value = list.pop_back();
      expect(value).to.be("cherry");

      array = list.toArray();
      expect(array[0]).to.be("apple");
      expect(array[1]).to.be("banana");
      expect(array).to.have.length(2);
    });

    it("should work with a single item in the list", function () {
      list.push_back("apple");

      value = list.pop_back();
      expect(value).to.be("apple");

      array = list.toArray();
      expect(array).to.have.length(0);
    });

    it("should work with nothing in the list", function () {
      list.pop_back();

      value = list.pop_front();
      expect(value).to.be(null);

      array = list.toArray();
      expect(array).to.have.length(0);
    });
  });

  describe("clear", function () {
    it("first and last should be null", function () {
      list.push_back("apple");
      list.push_back("banana");
      list.push_back("cherry");

      list.clear();

      expect(list.first).to.be(null);
      expect(list.last).to.be(null);
    });

    it("shoudl convert to an empty array afterwards", function () {
      list.push_back("apple");
      list.push_back("banana");
      list.push_back("cherry");

      list.clear();

      expect(list.toArray()).to.have.length(0);
    });
  });

  describe("insertBeforeNode", function () {
    it("should insert before the first node", function () {
      list.push_back("apple");
      list.push_back("banana");

      list.insertBeforeNode(list.first, "cherry");

      array = list.toArray();
      expect(array[0]).to.be("cherry");
      expect(array[1]).to.be("apple");
    });

    it("should insert before any other node", function () {
      list.push_back("apple");
      list.push_back("banana");

      list.insertBeforeNode(list.last, "cherry");

      array = list.toArray();
      expect(array[1]).to.be("cherry");
      expect(array[2]).to.be("banana");
    });
  });

  describe("forEachNode", function () {
    it("call the callback with each node and index", function () {
      var obj = {
        values: {}
      };

      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);
      list.forEachNode(function (node, index) {
        this.values[node.value] = index;
      }, obj);

      expect(obj.values.apple).to.be(0);
      expect(obj.values.banana).to.be(1);
      expect(obj.values.cherry).to.be(2);
    });
  });

  describe("forEach", function () {
    it("call the callback with each value and index", function () {
      var obj = {
        values: {}
      };

      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);
      list.forEach(function (value, index) {
        this.values[value] = index;
      }, obj);

      expect(obj.values.apple).to.be(0);
      expect(obj.values.banana).to.be(1);
      expect(obj.values.cherry).to.be(2);
    });
  });

  describe("nodeAtIndex", function () {
    it("should return values in the array", function () {
      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);

      expect(list.nodeAtIndex(0).value).to.be("apple");
      expect(list.nodeAtIndex(1).value).to.be("banana");
      expect(list.nodeAtIndex(2).value).to.be("cherry");
    });

    it("should return undefined for indices outside the array", function () {
      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);

      expect(list.nodeAtIndex(3)).to.be(null);
      expect(list.nodeAtIndex(-1)).to.be(null);
    });

    it("should work with empty arrays", function () {
      expect(list.nodeAtIndex(0)).to.be(null);
    });
  });

  describe("valueAtIndex", function () {
    it("should return values in the array", function () {
      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);

      expect(list.valueAtIndex(0)).to.be("apple");
      expect(list.valueAtIndex(1)).to.be("banana");
      expect(list.valueAtIndex(2)).to.be("cherry");
    });

    it("should return undefined for indices outside the array", function () {
      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);

      expect(list.valueAtIndex(3)).to.be(undefined);
      expect(list.valueAtIndex(-1)).to.be(undefined);
    });

    it("should work with empty arrays", function () {
      expect(list.valueAtIndex(0)).to.be(undefined);
    });
  });

  describe("fromArray", function () {
    it("should work", function () {
      list = basic.LinkedList.fromArray(["apple", "banana", "cherry"]);

      expect(list.valueAtIndex(0)).to.be("apple");
      expect(list.valueAtIndex(1)).to.be("banana");
      expect(list.valueAtIndex(2)).to.be("cherry");
    });
  });
});
