import React from 'react';

class ListBook extends React.Component {
    render(){
        const books = this.props.books.map(book=> (
            <div className="book">
                <h1>{book.volumeInfo.title}</h1>
                <p>{book.volumeInfo.authors}</p>
                <p>{book.saleInfo.saleability === 'FOR_SALE' ? <p>{book.saleInfo.listPrice.amount}</p>:''}</p>
                <p>{book.volumeInfo.description}</p>
                <img src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}/>
            </div>)
        );
        return (
            <div>{books}</div>
        )
    }

}

export default ListBook