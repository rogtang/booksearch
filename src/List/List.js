import React from 'react';
import ListBook from '../ListBook/ListBook';
import './List.css'

class List extends React.Component {
    render() {
        return (
          <div>
            <ListBook books={this.props.books} />
          </div>
        );
      }
}

export default List