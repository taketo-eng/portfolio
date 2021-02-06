import React from 'react';

import Title from './Title';

//images
import work1 from '../img/works/logo_musubi.svg';
import work2 from '../img/works/caretta.png';
import work3 from '../img/works/japan-calcium-association.svg';
import work4 from '../img/works/ukiha-satellite-work.svg';

//arts
import art1 from '../img/arts/sketch-cube.jpg';
import art2 from '../img/arts/sketch-cylinder.jpg';
import art3 from '../img/arts/sketch-hand.jpg';

let worksArray = [
  { src: work1, alt: '結リノベデザイン', href: 'https://www.musubi-r.com/', desc: "デザイン&コーディング" },
  { src: work2, alt: '株式会社カレッタ', href: 'https://www.caretta-fuk.co.jp/', desc: "デザイン&コーディング" },
  { src: work3, alt: '一般社団法人日本カルシウム協会', href: 'https://www.calcium-assoc.or.jp/', desc: "デザイン&コーディング" },
  { src: work4, alt: 'うきはサテライトワーク', href: "https://ukiha-shi.wixsite.com/satellitework-ukiha", desc: "デザイン" }
];

let artsArray = [
  { src: art1, alt: '立方体' },
  { src: art2, alt: '円柱' },
  { src: art3, alt: '手' }
]

function WorkImages(props) {
  let num = 0;

  if (props.page === 'work') {
    const images = worksArray.map(i => {
      num++;
      return (
        <a href={i.href} key={num.toString()} className="work" target="_blank" rel="noreferrer noopener" >
          <div className="img-wrapper">
            <img src={i.src} alt={i.alt} />
          </div>

          <p>{i.desc}</p>
        </a>
      );
    });

    return images;
  }
  else if (props.page === 'art') {
    const images = artsArray.map(i => {
      num++;
      return (
        <div key={num.toString()} className="work art">
          <div className="img-wrapper">
            <img src={i.src} alt={i.alt} />
          </div>
        </div>
      );
    });

    return images;
  }


}

const Works = (props) => {
  return (
    <div className="content">
      <div className="container">
        <Title title={props.title} />

        <div className="grid-wrapper">
          <WorkImages page={props.page} />
        </div>
      </div>

    </div>
  );
}

export default Works;