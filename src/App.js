import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {};
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
