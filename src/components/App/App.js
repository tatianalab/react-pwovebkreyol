import React from 'react';

import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import PwovebBox from '../PwovebBox/PwovebBox';
import Pwoveb from '../../data.js'
import Button from '../Button/Button';
import './App.css';
import randomColor from "randomcolor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

class RandomPwoveb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pwoveb:"",
      color:[79, 12, 25],
      results:[],
      search:null,
      pwovebs:Pwoveb,
      allPwovebs:Pwoveb

    }
    this.getPwoveb = this.getPwoveb.bind(this)

  }
  componentDidMount() {
      this.applyColor()
      this.getPwoveb()
      this.setState({
        pwovebs:Pwoveb,
        allPwovebs:Pwoveb

      })
  }

  getPwoveb(){
      let pwovebdata = Pwoveb;
      let pwovebNum = Math.floor(Math.random()* pwovebdata.length);
      let randomPwoveb = pwovebdata[pwovebNum];
      this.setState({
        pwoveb: randomPwoveb['pwoveb'],

      })
  }

  getNewPwoveb = () =>{
    this.getPwoveb()
    this.setState({
      color: this.chooseColor()
    });
    this.applyColor();
  }

    selectPwoveb = (pwov) => {
    this.setState({
      pwoveb: pwov,
      search:null
    });
  }

// COLOR CHANGE FUNCTIONS

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

    applyColor() {
    // const color = randomColor();
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
    let orig = document.body.container
    console.log(orig)
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

   isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

// HANDLE SEARCH FUNCTION
  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      pwovebs: this.state.allPwovebs.filter((pwoveb) => new RegExp(event.target.value, "i").exec(pwoveb.pwoveb))
    })
  }


  render(){

    const {pwoveb, search} = this.state;

    return(
      <>
      <div className="container" >
      <h1 className={this.isLight() ? 'white' : 'black'}>Pwovèb Kreyòl</h1>
      <Search value={search}
              onChange={this.handleSearch} />

        {this.state.pwovebs.map((pwoveb) => {
            if(search == null || search.length<1){
              return null;
            } else if(search.length>1){
            return <SearchResults key={pwoveb.id} pwoveb={pwoveb} selectPwoveb={this.selectPwoveb} />
          }
            })}
        <div className="pawolBox">
        <h2 className={this.isLight() ? 'white' : 'black'}>Men Pawol Pa ou:</h2>
        <PwovebBox pwoveb={pwoveb} getNewPwoveb={this.getNewPwoveb} />
        </div>
      </div>
      <div className="footer">
        <p className={this.isLight() ? 'white' : 'black'}>Designed and Built by <a href="https://tatianalab.github.io/portfolio/" className={this.isLight() ? 'white' : 'black'}>Tatiana Labrousse</a></p>
        </div>
      </>
      )
  }

}
export default RandomPwoveb;
