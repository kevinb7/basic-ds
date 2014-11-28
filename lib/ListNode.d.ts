declare class ListNode<T> {
    public value:T;
    public prev:ListNode<T>;
    public next:ListNode<T>;

    constructor(value:T);
    public destroy():void;
}
export = ListNode;
