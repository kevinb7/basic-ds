declare class Stack<T> {
    items: T[];
    poppedLastItem: (item: T) => void;
    constructor();
    push(item: T): void;
    pop(): T;
    peek(): T;
    toArray(): T[];
    size: number;
    isEmpty: boolean;
}
export = Stack;
