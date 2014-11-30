declare module basic {
    class ListNode<T> {
        value: T;
        prev: ListNode<T>;
        next: ListNode<T>;
        constructor(value: T);
        destroy(): void;
    }
    class LinkedList<T> {
        first: ListNode<T>;
        last: ListNode<T>;
        constructor();
        push_back(value: T): void;
        push_front(value: T): void;
        pop_back(): T;
        pop_front(): T;
        clear(): void;
        insertBeforeNode(refNode: ListNode<T>, value: T): void;
        forEachNode(callback: (value: ListNode<T>) => void, _this?: any): void;
        forEach(callback: (value: ListNode<T>) => void, _this?: any): void;
        nodeAtIndex(index: number): ListNode<T>;
        valueAtIndex(index: number): T;
        toArray(): T[];
        static fromArray<U>(array: U[]): LinkedList<U>;
    }
}
declare module basic {
    class Stack<T> {
        items: T[];
        poppedLastItem: (item: T) => void;
        constructor();
        push(item: T): void;
        pop(): T;
        peek(): T;
        size: number;
        isEmpty: boolean;
    }
}
