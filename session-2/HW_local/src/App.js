import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]); // stores array of items
  const [text, setText] = useState(""); // handles input values

  // for textbox
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // adds item when button 'Add Item' is clicked
  const handleAddItemClick = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  // similar with handleAddiItem but for keyboard press ('Enter' / 'Return')
  const handleAddItemPress = (e) => {
    if (e.key === "Enter") {
      if (text.trim() === "") return;
      setItems([...items, text]);
      setText("");
    }
  };

  // removes items when clicked
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // delete all items in list
  const handleDeleteAll = () => {
    setItems([]);
  };

  // UI
  return (
    <div>
      <h1>Derick's Checklist</h1>
      <div>
        {/* <p>Add to List</p> */}
        <input
          onKeyDown={handleAddItemPress}
          type="text"
          value={text}
          onChange={handleInputChange}
        />
        <button className="add" onClick={handleAddItemClick}>
          Add Item
        </button>
        <button className="delete" onClick={handleDeleteAll}>
          Clear All
        </button>
      </div>
      {items.length === 0 && <p> No items found </p>} {/*empty list*/}
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleDeleteItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
