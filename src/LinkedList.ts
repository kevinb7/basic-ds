import ListNode = require("./ListNode");

// TODO: add a .size/.empty getters to LinkedList
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

    /**
     * Clears the list by resetting it to its
     * initial state.
     */
    clear() {
        this.first = this.last = null;
    }

    /**
     * Inserts the value before refNode.
     * Assumes that refNode is in the list.
     * @param refNode
     * @param value
     */
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
//    inserAfterNode(refNode: ListNode<T>, value: T) {
//        if (refNode === this.last) {
//            this.push_back(value);
//        } else {
//            var node = new Node(value);
//        }
//    };

    forEachNode(callback: (node: ListNode<T>, index: number) => void, _this?) {
        var node = this.first;
        var index = 0;
        while (node !== null) {
            callback.call(_this, node, index);
            node = node.next;
            index++;
        }
    }

    forEach(callback: (value: T, index: number) => void, _this?) {
        this.forEachNode((node, index) => callback.call(_this, node.value, index), _this);
    }

    nodeAtIndex(index: number) {
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
    }
    
    replaceNodeWithValues(node: ListNode<T>, values: T[]) {
        if (values.length > 0) {
            var list = LinkedList.fromArray(values);
            if (node.prev !== null) {
                node.prev.next = list.first;
            }
            if (node.next !== null) {
                node.next.prev = list.last;
            }
            list.first.prev = node.prev;
            list.last.next = node.next;
        } else {
            // remove the node
            if (node.prev !== null) {
                node.prev.next = node.next;
            }
            if (node.next !== null) {
                node.next.prev = node.prev;
            }
        }

        node.prev = node.next = null;   // clear refs so the node can be gc'd
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
