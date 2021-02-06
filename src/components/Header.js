import React, {useState} from 'react';

import Nav from './Nav';
import menu from '../img/icons/nav-icon-white.svg';



const Header = () => {

  const [isOpened, setOpened] = useState(false);

  function doClick(){
    //props.onClick();
    if(isOpened){
      setOpened(false);
    }else{
      setOpened(true);
    }
  }

  return (
    <header>
      <h1 className="logo">Taketo Yahiro's Portfolio</h1>
      <Nav openClose={isOpened} menuClick={doClick} />
      <i id="open-nav" className="nav-icon sp" onClick={doClick}><img src={menu}/></i>
    </header>
  );
}



export default Header;