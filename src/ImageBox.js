import React from "react";
import { ReactComponent as Silhouette } from "./silhouette.svg";
import bike from "./bike.png";


export default function ImageBox({sliderValue}) {

  const heightFormula = () => {
    return 45 + sliderValue / 2.4
  }
  return (
    <div className="imageBox">
      <h1>Height Component</h1>
      <Silhouette style={{height: `${heightFormula()}%`}} className='silhouette'/>
      <img src={bike} className='bike' alt='bike' />
    </div>
  );
}
