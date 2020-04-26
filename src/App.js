import React from 'react';
import './App.css';
import List from './List/List';
import SearchBook from './SearchBook/SearchBook';
import FilterBook from './FilterBook/FilterBook';


const apiKey = 'AIzaSyCWz-P6hTzQdOTwr5pmULTVD764xGuwdLM'; // move it from here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'partial',
      q: '',
      printType: 'all',
    }
  }

  queryMade(q) {
    this.setState({
      q
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    })
  }

  bookTypeChanged(filter) {
    this.setState({
      filter
    })
  }

  setBookData(data) {
    this.setState({
      books: data
    });
  }

  render() {
    const bookList = this.state.books ? <List books={this.state.books.items} /> : '';

  return (
    <main className='App'>
     <header className='App_header'>
        <h1>Book Search</h1>
    </header>
      <SearchBook
        searchQuery={q => this.queryMade(q)}
        queryParams={this.state}
        apiKey={apiKey}          
        setBookData={data => this.setBookData(data)}
        />
      <FilterBook
        setPrintType={printType => this.printTypeChanged(printType)}
        setBookType={bookType => this.bookTypeChanged(bookType)}
        />
      {/* page content*/}  
      {bookList}
    </main>
  );
  }
}

export default App;
