import React from 'react';

import Title from './Title';
import myPhoto from '../img/me/my_photo.jpg';

const About = () => {
  return (
    <div className="content">
      <Title title="About" />
      <div className="container">
        <div className="myInfo">
          <div className="intro">
            <p><b>八尋 健斗 (Taketo Yahiro)</b></p>
            <p>大学で地球科学を学び，<br />卒業研究では鳥類化石の研究をしていました．</p>
            <p>その後，Brain-Computer Interfaceに興味を持ち，<br />現在はその分野に必要なことを独学しています．</p>
          </div>
          <img className="myPhoto" src={myPhoto} />
        </div>
        <div className="skillAndHistory">
          <div className="history">
            <h3 className="subTitle">経歴</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>1997</td>
                  <td>誕生</td>
                </tr>

                <tr>
                  <td>2013</td>
                  <td>福岡大学大濠高校 入学</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>高校 卒業<br />福岡大学理学部地球圏科学科 入学</td>
                </tr>
                <tr>
                  <td>2020</td>
                  <td>福岡大学 卒業</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="skills">
            <h3 className="subTitle">Skills</h3>
            <p className="desc">HTML, CSS, Design, 動画編集<br />※Python, C#を少々</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;