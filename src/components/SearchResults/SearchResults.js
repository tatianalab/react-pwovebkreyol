import React from 'react'
import './SearchResults.css'


class SearchResults extends React.Component{

  handleClick = () => {
    this.props.selectPwoveb(this.props.pwoveb.pwoveb);
  }
  render(){

    return(
    <div className="pwovebList">
    <ul>
    <li onClick={this.handleClick}>{this.props.pwoveb.pwoveb}</li>
    </ul>
    </div>
    )
  }
}

export default SearchResults;
