import ListNode = require("./ListNode");

class LinkedList<T> {
    first: ListNode<T>;
    last: ListNode<T>;

    constructor() {
        this.first = null;
        this.last = null;
    }

    push_back(value: T) {
        var node = new ListNode(value);
        if (this.first === null && this.last === null) {
            this.first = node;
            this.last = node;
        } else {
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
    }

    push_front(value: T) {
        var node = new ListNode<T>(value);
        if (this.first === null && this.last === null) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first.prev = node;
            this.first = node;
        }
    }

    pop_back() {
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
    }

    pop_front() {
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
    }

    clear() {
        this.first = this.last = null;
    }

    insertBeforeNode(refNode: ListNode<T>, value: T) {
        if (refNode === this.first) {
            this.push_front(value);
        } else {
            var node = new ListNode<T>(value);
            node.prev = refNode.prev;
            node.next = refNode;
            refNode.prev.next = node;
            refNode.prev = node;
        }
    }

    // TODO: finish this
//    LinkedList.prototype.inserAfterNode = function (refNode, value) {
//        if (refNode === this.last) {
//            this.push_back(value);
//        } else {
//            var node = new Node(value);
//        }
//    };

    forEachNode(callback: (value: ListNode<T>) => void, _this?) {
        var node = this.first;
        while (node !== null) {
            callback.call(_this, node);
            node = node.next;
        }
    }

    // TODO: provide the index to the callback as well
    forEach(callback: (value: ListNode<T>) => void, _this?) {
        this.forEachNode(function (node) {
            callback.call(_this, node.value);
        }, _this);
    }

    nodeAtIndex(index: number) {
        var i = 0;
        var node = this.first;
        while (node !== null) {
            if (index === i) {
                return node;
            }
            i++;
        }
        return null;
    }

    valueAtIndex(index: number) {
        var node = this.nodeAtIndex(index);
        return node ? node.value : undefined;
    }

    toArray() {
        var array:T[] = [];
        var node = this.first;
        while (node !== null) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }

    static fromArray<U> (array: U[]) {
        var list = new LinkedList<U>();
        array.forEach(function (value) {
            list.push_back(value);
        });
        return list;
    }
}

export = LinkedList;
