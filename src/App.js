import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); // ✅ Use the initial items

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} ondDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>Europe Trip 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    onAddItems(description, quantity);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, ondDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            ondDeleteItem={() => ondDeleteItem(item.id)}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, ondDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={ondDeleteItem}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      💼 You have {total} items ({packed} packed), you are ready to go! ✈️
    </footer>
  );
}
