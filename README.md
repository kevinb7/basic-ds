# basic-ds #

Basic data structures for JavaScript

## Supported data structures ##

- (Doubly) LinkedList
- Stack

## What's so special ##

Not much.

The linked list implementation provides an iterator that provides a
reference to each node to the callback instead of the value itself.  When paired
with methods like insertBeforeNode or insertAfterNode you can quickly insert
additional values as you iterate over a list.

The stack is just a boring except for delegate methods which a user can set such
as "poppedLastItem".  This comes in handy when there's lots of different places
in your code which can result in an empty stack.

## Building ##

The build is a little clunky.  You have to run two separate gulp commands:
- gulp compile
- gulp browserify

We should have a script that starts the built-in tsc watcher and then
a gulp watcher for the browserify step.
