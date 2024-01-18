import { useState } from "react";

const Searchbar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={onSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
