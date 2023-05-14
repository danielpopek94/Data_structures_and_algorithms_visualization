const ArrayDescription = () => (
  <>
    <p>
      A array is like a train, where each box is connected to the next box with a string. Each box has something special inside, like toys or candy. The first box is called the "head" and the last box is called the "tail." To get to a specific box, we follow the strings from the head until we reach the right box.
    </p>
    <p>
      A linked list is a way to store a collection of items, just like an array. But instead of storing all the items in a single block of memory, each item is stored in its own box, and the boxes are connected using pointers. This makes it possible to add or remove items from the middle of the list without having to move all the other items.
    </p>
    <p>
      The linked list has two parts: data and a pointer. The data part stores the actual item, and the pointer points to the next box. The last box has a special pointer that points to null, which means there are no more boxes after it.
    </p>
    <p>
      Linked lists are useful for when you need to insert or delete items frequently, or when you don't know the size of the list in advance.
    </p>

    <h4>Operations</h4>
    <p>
      The most common operations performed on linked lists are:
    </p>
    <ul>
      <li>Insertion O(n): Adding a new item to the list at a specific position.</li>
      <li>Deletion O(n): Removing an item from the list.</li>
      <li>Traversal O(n): Going through all the items in the list, one by one.</li>
      <li>Search O(n): Finding an item in the list with a specific value.</li>
      <li>Reverse O(n): Reversing the order of the items in the list.</li>
      <li>Sorting O(n log n): Arranging the items in the list in a specific order, like from smallest to largest.</li>
      <li>Merge O(m + n): Combining two linked lists into one.</li>
      <li>Split O(n): Dividing a linked list into two separate linked lists.</li>
    </ul>
    <p>
      (n: number of elements in first linked list, m: number of elements in second linked list)
    </p>

    <h4>Videos</h4>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=F8AbOfQwl1c">Linked lists in 4 minutes</a></li>
      <li><a href="https://www.youtube.com/watch?v=WwfhLC16bis">Introduction to Linked Lists (Data Structures &amp; Algorithms #5)</a></li>
    </ul>
  </>
)

export default ArrayDescription;