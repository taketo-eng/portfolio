import React from 'react';

import close from '../img/icons/close-white.svg';

import {
  Link
} from 'react-router-dom';

const Nav = (props) => {
  let leftValue;
  if(props.openClose){
    leftValue = '0';
  }else{
    leftValue = '-80rem';
  }

  return (
    <nav className="global-nav" style={{'left':leftValue}}>
      <i id="close-nav" className="close-icon sp" onClick={props.menuClick}><img src={close}/></i>
      <ul>
        <li className="nav-list"  onClick={props.menuClick}><Link to="/">Works</Link></li>
        <li className="nav-list"  onClick={props.menuClick}><Link to="/about">About</Link></li>
        <li className="nav-list"  onClick={props.menuClick}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;