"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Stack = function Stack() {
  this.items = [];
  this.poppedLastItem = function (item) {};
};

Stack.prototype.push = function (item) {
  this.items.push(item);
};

Stack.prototype.pop = function () {
  var item = this.items.pop();
  if (this.isEmpty) {
    this.poppedLastItem(item);
  }
  return item;
};

Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
};

Stack.prototype.toArray = function () {
  return this.items.map(function (item) {
    return item;
  });
};

_prototypeProperties(Stack, null, {
  size: {
    get: function () {
      return this.items.length;
    },
    enumerable: true
  },
  isEmpty: {
    get: function () {
      return this.items.length === 0;
    },
    enumerable: true
  }
});

module.exports = Stack;