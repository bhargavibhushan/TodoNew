import React, { useState } from 'react';

function Todo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={handleNewItemChange} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default Todo;

