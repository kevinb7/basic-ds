declare class Stack<T> {
    public items:T[];
    public poppedLastItem:(item:T) => void;

    constructor();
    public push(item:T):void;
    public pop():T;
    public peek():T;
    public size:number;
    public isEmpty:boolean;
}
export = Stack;
