const queueCode = {
    js: `let stack = [];

// Let's add items to the stack.
stack.push(6);
stack.push(10);
stack.push(12);
stack.push(3);

// Let's remove an item from the top of the stack (3).
let top = stack.pop();

// Now on the top of the stack is 12.
`,
    python: `stack = []

# Let's add items to the stack.
stack.append(6)
stack.append(10)
stack.append(12)
stack.append(3)

# Let's remove an item from the top of the stack (3).
top = stack.pop()

# Now on the top of the stack is 12.
`
};

export default queueCode