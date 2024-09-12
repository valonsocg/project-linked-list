# Linked List Implementation in JavaScript

This project implements a Linked List data structure in JavaScript. It provides a flexible and efficient way to store and manipulate a collection of data.

## Files

The project consists of three main JavaScript files:

1. `main.js`: Contains example usage of the LinkedList class.
2. `linkedList.js`: Implements the LinkedList class with various methods.
3. `node.js`: Defines the Node class used by the LinkedList.

## LinkedList Class

The LinkedList class provides the following methods:

- `append(value)`: Adds a new node with the given value to the end of the list.
- `prepend(value)`: Adds a new node with the given value to the beginning of the list.
- `size()`: Returns the number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes and returns the last node in the list.
- `contains(value)`: Checks if a node with the given value exists in the list.
- `find(value)`: Returns the index of the node containing the given value, or null if not found.
- `toString()`: Returns a string representation of the list.
- `insertAt(value, index)`: Inserts a new node with the given value at the specified index.
- `removeAt(index)`: Removes the node at the specified index.

## Node Class

The Node class represents individual elements in the linked list. Each node contains:

- `value`: The data stored in the node.
- `nextNode`: A reference to the next node in the list.

## Usage

To use the LinkedList, import the class and create a new instance:

```javascript
import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");

console.log(list.toString()); // Output: (parrot) -> (dog) -> (cat) -> null
console.log(list.size()); // Output: 3
console.log(list.contains("dog")); // Output: true
```

## Running the Project

Ensure you have Node.js installed on your system. Then, you can run the `main.js` file to see the LinkedList in action:

```
node main.js
```

This will execute the example code and display the output in your console.

## Contributing

Feel free to fork this project and submit pull requests with improvements or additional features for the LinkedList implementation.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
