import React, { useState } from 'react';

export default () => {
  let [size, setSize] = useState('');
  let [shape, setShape] = useState('');

  const handleSize = (event) => {
    setSize(event.target.value);
  }

  const handleShape = (event) => {
    setShape(event.target.value);
  }

  const reset = () => {
    setSize('');
    setShape('');
  }

  let figureClasses = `size-${size} shape-${shape}`;

  return (
    <section style={{maxWidth: '300px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}>Photo Functionality: </h1>

      <fieldset>
        <legend>Select Size</legend>

        <label><input type="radio" name="size" value="small" checked={size === 'small'} onClick={handleSize} /> Small </label>
        <br />

        <label><input type="radio" name="size" value="medium" checked={size === 'medium'} onClick={handleSize} /> Medium </label>
        <br />

        <label><input type="radio" name="size" value="large" checked={size === 'large'} onClick={handleSize} /> Large </label>
      </fieldset>
      <br />


      <fieldset>
        <legend>Select Shape</legend>

        <label><input type="radio" name="shape" value="rectangle" checked={shape === 'rectangle'} onClick={handleShape} /> Ractangle </label>
        <br />

        <label><input type="radio" name="shape" value="square" checked={shape === 'square'} onClick={handleShape} /> Square </label>
        <br />

        <label><input type="radio" name="shape" value="circle" checked={shape === 'circle'} onClick={handleShape} /> Circle </label>
      </fieldset>
      <br />


      <figure className={figureClasses}>
        <img src="http://akns-images.eonline.com/eol_images/Entire_Site/2015516/rs_300x300-150616073901-600.Donald-Trump.jl.061615.jpg" />
      </figure>

      <div style={{textAlign: 'center', color: '#666', fontSize: '.9rem'}}>Actual image is 300px x 300px</div>

      <p style={{textAlign: 'center'}}><button onClick={reset}>Reset Photo</button></p>

      <p style={{ color: '#f00', fontStyle: 'italic', border: '1px solid', textAlign: 'center', padding: '2px 0', borderRadius: '3px'}}>We need to check if export services support this CSS!</p>


    </section>
  );
}