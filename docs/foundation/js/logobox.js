import React from 'react';

const LogoBox = (props) => (
  <div class="logobox">
    <div class="logobox-header">
      <div class="ml-auto">
        <a href={props.light} target="_blank"><span class="fa fa-download"></span></a>
      </div>
    </div>
    <div class="logobox-content">
     <img src={props.light} class="img-fluid"/>
    </div>
  </div>
)
export default LogoBox;
