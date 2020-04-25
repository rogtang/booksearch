import React from 'react';
import './SearchBook.css'

{/*pass apiKey as a param?*/}

class SearchBook extends React.Component {
    
    handleSubmit(e) {
        e.preventDefault();
        const { queryParams, apiKey } = this.props;
        const url = `https://www.googleapis.com/books/v1/volumes`
        const formatQuery = (queryParams) => {
        const queryItems = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        return queryItems.join('&');}

        const queryString = formatQuery(queryParams);
        const urlSearch = url + '?' + queryString + '&key=' + apiKey;

        fetch(urlSearch, { method: 'GET' })
        .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => this.props.setBookData(data))
      .catch(err => {
        console.log(err.message);
      });

    }

    render() {
        return (
            <div className="searchBar">
                <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="search">Search: </label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Moby Dick"
                    onChange={e => this.props.searchQuery(e.target.value)}/>
                <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBook