import ListNode = require("./ListNode");
declare class LinkedList<T> {
    public first:ListNode<T>;
    public last:ListNode<T>;

    constructor();
    public push_back(value:T):void;
    public push_front(value:T):void;
    public pop_back():T;
    public pop_front():T;
    public clear():void;
    public insertBeforeNode(refNode:ListNode<T>, value:T):void;
    public forEachNode(callback:(value:ListNode<T>) => void, _this?:any):void;
    public forEach(callback:(value:ListNode<T>) => void, _this?:any):void;
    public nodeAtIndex(index:number):ListNode<T>;
    public valueAtIndex(index:number):T;
    public toArray():T[];
    static fromArray<U>(array:U[]):LinkedList<U>;
}
export = LinkedList;
