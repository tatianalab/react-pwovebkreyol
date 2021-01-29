import React from 'react';
import './Search.css'

class Search extends React.Component {

  render(){
    return (
      <div className='form'>
      <input
      id="search-input"
      type="text"
      value={this.props.value}
      placeholder="Chache yon pwovèb..."
      onChange={this.props.onChange}
      />
      <span className="fa fa-search errspan" />
      </div>
    );
  }
}

export default Search;
