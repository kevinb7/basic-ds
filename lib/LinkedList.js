"use strict";

var ListNode = function ListNode(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
};

ListNode.prototype.destroy = function () {
    this.value = null;
    this.prev = null;
    this.next = null;
};




// TODO: add a .size/.empty getters to LinkedList
var LinkedList = function LinkedList() {
    this.first = null;
    this.last = null;
};

LinkedList.prototype.push_back = function (value) {
    var node = new ListNode(value);
    if (this.first === null && this.last === null) {
        this.first = node;
        this.last = node;
    } else {
        node.prev = this.last;
        this.last.next = node;
        this.last = node;
    }
};

LinkedList.prototype.push_front = function (value) {
    var node = new ListNode(value);
    if (this.first === null && this.last === null) {
        this.first = node;
        this.last = node;
    } else {
        node.next = this.first;
        this.first.prev = node;
        this.first = node;
    }
};

LinkedList.prototype.pop_back = function () {
    if (this.last) {
        var value = this.last.value;
        if (this.last.prev) {
            var last = this.last;
            this.last = last.prev;
            this.last.next = null;
            last.destroy();
        } else {
            this.last = null;
            this.first = null;
        }
        return value;
    } else {
        return null;
    }
};

LinkedList.prototype.pop_front = function () {
    if (this.first) {
        var value = this.first.value;
        if (this.first.next) {
            var first = this.first;
            this.first = first.next;
            this.first.prev = null;
            first.destroy();
        } else {
            this.first = null;
            this.last = null;
        }
        return value;
    } else {
        return null;
    }
};

/**
 * Clears the list by resetting it to its
 * initial state.
 */
LinkedList.prototype.clear = function () {
    this.first = this.last = null;
};

/**
 * Inserts the value before refNode.
 * Assumes that refNode is in the list.
 * @param refNode
 * @param value
 */
LinkedList.prototype.insertBeforeNode = function (refNode, value) {
    if (refNode === this.first) {
        this.push_front(value);
    } else {
        var node = new ListNode(value);
        node.prev = refNode.prev;
        node.next = refNode;
        refNode.prev.next = node;
        refNode.prev = node;
    }
};

// TODO: finish this
//    inserAfterNode(refNode: ListNode<T>, value: T) {
//        if (refNode === this.last) {
//            this.push_back(value);
//        } else {
//            var node = new Node(value);
//        }
//    };

LinkedList.prototype.forEachNode = function (callback, _this) {
    var node = this.first;
    var index = 0;
    while (node !== null) {
        callback.call(_this, node, index);
        node = node.next;
        index++;
    }
};

LinkedList.prototype.forEach = function (callback, _this) {
    this.forEachNode(function (node, index) {
        return callback.call(_this, node.value, index);
    }, _this);
};

LinkedList.prototype.nodeAtIndex = function (index) {
    var i = 0;
    var node = this.first;
    while (node !== null) {
        if (index === i) {
            return node;
        }
        i++;
        node = node.next;
    }
    return null;
};

LinkedList.prototype.replaceNodeWithValues = function (node, values) {
    if (values.length > 0) {
        var list = LinkedList.fromArray(values);
        list.first.prev = node.prev;
        list.last.next = node.next;
        if (node.prev !== null) {
            node.prev.next = list.first;
        } else {
            this.first = list.first;
        }
        if (node.next !== null) {
            node.next.prev = list.last;
        } else {
            this.last = list.last;
        }
    } else {
        // remove the node
        if (node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.first = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        } else {
            this.last = node.prev;
        }
    }

    node.prev = node.next = null; // clear refs so the node can be gc'd
};

LinkedList.prototype.valueAtIndex = function (index) {
    var node = this.nodeAtIndex(index);
    return node ? node.value : undefined;
};

LinkedList.prototype.toArray = function () {
    var array = [];
    var node = this.first;
    while (node !== null) {
        array.push(node.value);
        node = node.next;
    }
    return array;
};

LinkedList.fromArray = function (array) {
    var list = new LinkedList();
    array.forEach(function (value) {
        list.push_back(value);
    });
    return list;
};

module.exports = LinkedList;