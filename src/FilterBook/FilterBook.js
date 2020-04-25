import React from 'react';

class FilterBook extends React.Component {
    render(){
        return (
            <div className="filterBar">
            <form className="filterForm">
              <label htmlFor="print_type">Print Type:</label>
              <select
                id="print_type"
                name="print_type"
                onChange={e => this.props.setPrintType(e.target.value)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book_type">Book Type:</label>
                 <select
                id="book_type"
                name="book_type"
                onChange={e => this.props.setBookType(e.target.value)}>
                <option value=''>No Filter</option>
                <option value='ebooks'>All eBooks</option>
                <option value='free-ebooks'>Free eBooks</option>
                <option value='paid-ebooks'>Paid eBooks</option>
                </select>
            </form>
            </div>
        )
    }
}

export default FilterBook