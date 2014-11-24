!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.LinkedList=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var ListNode = _dereq_("ListNode");

var LinkedList = (function () {
    function LinkedList() {
        this.first = null;
        this.last = null;
    }
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

    LinkedList.prototype.clear = function () {
        this.first = this.last = null;
    };

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
    //    LinkedList.prototype.inserAfterNode = function (refNode, value) {
    //        if (refNode === this.last) {
    //            this.push_back(value);
    //        } else {
    //            var node = new Node(value);
    //        }
    //    };
    LinkedList.prototype.forEachNode = function (callback, _this) {
        var node = this.first;
        while (node !== null) {
            callback.call(_this, node);
            node = node.next;
        }
    };

    // TODO: provide the index to the callback as well
    LinkedList.prototype.forEach = function (callback, _this) {
        this.forEachNode(function (node) {
            callback.call(_this, node.value);
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
        }
        return null;
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
    return LinkedList;
})();

module.exports = LinkedList;

},{"ListNode":2}],2:[function(_dereq_,module,exports){
var ListNode = (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    ListNode.prototype.destroy = function () {
        this.value = null;
        this.prev = null;
        this.next = null;
    };
    return ListNode;
})();

module.exports = ListNode;

},{}]},{},[1])
(1)
});