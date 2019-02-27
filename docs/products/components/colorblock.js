import React from 'react';

function yiq(hex) {
      var r = parseInt(hex.substr(1, 2), 16),
          g = parseInt(hex.substr(3, 2), 16),
          b = parseInt(hex.substr(5, 2), 16),
          yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return (yiq >= 128) ? 'text-dark' : 'text-light';
}
function ColorBlock(props) {
    return (
      <div className="color-block-wrapper">
        { props.name.map((color) =>
          <div className={`color-variant-block bg-${ color.name }`} key={ color.name }>
            <div className="color-details">
              <div className={yiq(color.hax)}><span className="font-weight-normal">{color.name}</span></div>
              <div className={yiq(color.hax)}><span className="font-weight-normal">{color.hax}</span></div>
            </div>
          </div>
        )
      }
      </div>
)}

export default ColorBlock;
