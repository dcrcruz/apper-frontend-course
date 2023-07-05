class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item); // push input to array stack
    }

    pop(item) {
        if (this.stack.length === 0) { // check if stack is empty
            return console.log("Stack is currently empty.");
        }

        return this.stack.pop(item); // remove last item from stack
    }

    check() {

        return console.log(this.stack);
    }

}

const stack = new Stack();
    stack.push("Milk");
    stack.push("Eggs");
    stack.check(); // [“Milk”, “Eggs”]
    stack.pop();
    stack.check(); // [“Milk”]
    stack.pop();
    stack.check(); // []
    stack.pop(); // “Stack is currently empty.”