const SearchTrigger = ({ searchTrigger, setSearchTrigger }) => {
  return (
    <div className={`search-form-wrapper ${searchTrigger ? "open" : ""}`}>
      <div
        className="close-search-trigger close_trigger"
        onClick={() => setSearchTrigger()}
      >
        <span />
        <span />
      </div>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTrigger();
        }}
      >
        <input type="text" placeholder="Search..." required />
        <button type="submit" className="search-btn">
          <i className="fal fa-search m-0" />
        </button>
      </form>
    </div>
  );
};

export default SearchTrigger;
