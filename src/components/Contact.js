import React from 'react';

import Title from './Title';

const Contact = () => {
  return (
    <div className="content">
      <Title title="Contact"/>
      <div className="contact-box">
        <a href="mailto:yahiro.t.eng@gmail.com"><p>yahiro.t.eng@gmail.com</p></a>
        <a href="https://twitter.com/yapimaru_Eng"><p>TwitterへDM</p></a>
      </div>
    </div>
  );
}

export default Contact;