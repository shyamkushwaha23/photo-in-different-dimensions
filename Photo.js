import React, { useState } from 'react';

export default () => {
  let [size, setSize] = useState('');
  let [shape, setShape] = useState('');

  function handleSize(event) {
    setSize(event.target.value);
  }

  function handleShape(event) {
    setShape(event.target.value);
  }

  let figureClasses = `size-${size} shape-${shape}`;

  return (
    <section style={{maxWidth: '300px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}>Photo Functionality: </h1>

      <fieldset>
        <legend>Select Photo Size:</legend>

        <label><input type="radio" name="size" value="small" onClick={handleSize} /> Small </label>
        <br />

        <label><input type="radio" name="size" value="medium" ___checked={size === 'medium'} onClick={handleSize} /> Medium </label>
        <br />

        <label><input type="radio" name="size" value="large" onClick={handleSize} /> Large </label>
      </fieldset>
      <br />


      <fieldset>
        <legend>Select Photo Shape:</legend>

        <label><input type="radio" name="shape" value="rectangle" onClick={handleShape} /> Ractangle </label>
        <br />

        <label><input type="radio" name="shape" value="square" ___checked={shape === 'square'} onClick={handleShape} /> Square </label>
        <br />

        <label><input type="radio" name="shape" value="circle" onClick={handleShape} /> Circle </label>
      </fieldset>
      <br />


      <figure className={figureClasses}>
        <img src="http://akns-images.eonline.com/eol_images/Entire_Site/2015516/rs_300x300-150616073901-600.Donald-Trump.jl.061615.jpg" />
      </figure>

      <p style={{textAlign: 'center'}}>Actual image is 300px x 300px</p>

    </section>
  );
}