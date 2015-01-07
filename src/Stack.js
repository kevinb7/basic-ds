class Stack {

    constructor() {
        this.items = [];
        this.poppedLastItem = function (item) {};
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        var item = this.items.pop();
        if (this.isEmpty) {
            this.poppedLastItem(item);
        }
        return item;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
    
    toArray() {
        return this.items.map(item => item);
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Stack;
