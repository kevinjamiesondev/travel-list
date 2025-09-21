export default function App() {
  return (
    <div className="app">
      <Logo />;
      <PackingList />;
      <Form />;
      <Stats />;
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {}

function Stats() {
  return (
    <footer className="stats">
      💼 You have 0 items on your list, you are ready to go! ✈️
    </footer>
  );
}
