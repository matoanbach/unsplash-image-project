import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    const searchTerm = e.target.elements.search.value;
    setSearchTerm(searchTerm);
    e.preventDefault();
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
