import React from 'react';
import './Search.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab);

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
