import React from 'react'
import './PwovebBox.css'
import Button from '../Button/Button'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon   } from "react-share"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

class ProvebBox extends React.Component {

  handleClick = (event) => {
    this.props.getNewPwoveb(event.target.value);
  }

  render(){
    return(
      <div className="quote-box">
         <div id='text'><p>{this.props.pwoveb}</p></div>
         <div id='author'><h5>-Pwovèb Kreyòl-</h5></div>
            <div className="buttons">
              <div className="social-btns">

                  <FacebookShareButton
                  url="http://pwovebkreyol.com/"
                  quote={this.props.pwoveb}
                  hashtag="#pwovèbkreyòl">
                  <FacebookIcon logoFillColor="white" size={32} round />
                  </FacebookShareButton>


                  <TwitterShareButton
                  url= "http://pwovebkreyol.com/"
                  title={this.props.pwoveb}>
                  <TwitterIcon size={32} round />
                  </TwitterShareButton>

              </div>
              <Button id='new-quote' title="Ban'm on lòt" onClick={this.handleClick} />
          </div>
      </div>
      )
  }

}



export default ProvebBox;


