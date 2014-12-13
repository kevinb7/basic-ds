declare class ListNode<T> {
    value: T;
    prev: ListNode<T>;
    next: ListNode<T>;
    constructor(value: T);
    destroy(): void;
}
export = ListNode;
