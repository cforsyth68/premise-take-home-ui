import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState(null);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setOutput(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <p>Hello Premise!</p>
      <form onSubmit={handleSearchSubmit}>
        <label>
          <div>Search: </div>
          <input type="text" value={search} onChange={handleChange} />
          <button type="submit">Submit</button>
        </label>
      </form>
      {output && <p>{output}</p>}
    </div>
  );
}

export default App;
