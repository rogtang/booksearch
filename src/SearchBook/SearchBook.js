import React from "react";
import "./SearchBook.css";
import { getBooks } from "./Api";

{
  /*pass apiKey as a param?*/
}

class SearchBook extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { queryParams } = this.props;
    getBooks(queryParams)
      .then((data) => this.props.setBookData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div className="searchBar">
        <form className="search__form" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Moby Dick"
            onChange={(e) => this.props.searchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBook;
