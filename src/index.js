import React from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";


import s01 from './img/slide001.png';
import s02 from './img/slide002.png';
import s03 from './img/slide003.png';
import s04 from './img/slide004.png';
import s05 from './img/slide005.png';
import s06 from './img/slide006.png';
import s07 from './img/slide007.png';
import s08 from './img/slide008.png';
import s09 from './img/slide009.png';
import s10 from './img/slide010.png';

import s11 from './img/slide011.png';
import s12 from './img/slide012.png';
import s13 from './img/slide013.png';
import s14 from './img/slide014.png';
import s15 from './img/slide015.png';
import s16 from './img/slide016.png';
import s17 from './img/slide017.png';
import s18 from './img/slide018.png';
import s19 from './img/slide019.png';
import s20 from './img/slide020.png';

import s21 from './img/slide021.png';
import s22 from './img/slide022.png';
import s23 from './img/slide023.png';
import s24 from './img/slide024.png';
import s25 from './img/slide025.png';
import s26 from './img/slide026.png';
import s27 from './img/slide027.png';
import s28 from './img/slide028.png';
import s29 from './img/slide029.png';
import s30 from './img/slide030.png';

import s31 from './img/slide031.png';
import s32 from './img/slide032.png';
import s33 from './img/slide033.png';
import s34 from './img/slide034.png';
import s35 from './img/slide035.png';
import s36 from './img/slide036.png';
import s37 from './img/slide037.png';
import s38 from './img/slide038.png';
import s39 from './img/slide039.png';
import s40 from './img/slide040.png';

import s41 from './img/slide041.png';
import s42 from './img/slide042.png';
import s43 from './img/slide043.png';
import s44 from './img/slide044.png';
import s45 from './img/slide045.png';
import s46 from './img/slide046.png';
import s47 from './img/slide047.png';
import s48 from './img/slide048.png';
import s49 from './img/slide049.png';
import s50 from './img/slide050.png';

import s51 from './img/slide051.png';
import s52 from './img/slide052.png';
import s53 from './img/slide053.png';
import s54 from './img/slide054.png';
import s55 from './img/slide055.png';
import s56 from './img/slide056.png';
import s57 from './img/slide057.png';
import s58 from './img/slide058.png';
import s59 from './img/slide059.png';
import s60 from './img/slide060.png';

import s61 from './img/slide061.png';
import s62 from './img/slide062.png';
import s63 from './img/slide063.png';

/*
import s04 from './img/slide004.png';
import s05 from './img/slide005.png';
import s06 from './img/slide006.png';
import s07 from './img/slide007.png';
import s08 from './img/slide008.png';
import s09 from './img/slide009.png';
import s10 from './img/slide010.png';
*/

const images = [
  s01, s02, s03, s04, s05, s06, s07, s08, s09, s10,
  s11, s12, s13, s14, s15, s16, s17, s18, s19, s20,
  s21, s22, s23, s24, s25, s26, s27, s28, s29, s30,
  s31, s32, s33, s34, s35, s36, s37, s38, s39, s40,
  s41, s42, s43, s44, s45, s46, s47, s48, s49, s50,
  s51, s52, s53, s54, s55, s56, s57, s58, s59, s60,
  s61, s62, s63
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    return
  }, [index]);

  return (
    <Gallery className='slides'
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
