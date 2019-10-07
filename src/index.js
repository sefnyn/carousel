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

const images = [
  s01, s02, s03, s04, s05, s06, s07
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    return
  }, [index]);

  return (
    <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
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
