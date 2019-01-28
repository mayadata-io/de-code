import React from 'react';

const logoTheme ='hello'

function changeTheme(theme) {
  let currentTheme = theme;
  if(currentTheme === light) {
    logoTheme = dark
  }
  else {
    logoTheme = light
  }
}
const LogoBox = (props) => (
  <div class="logobox">
    <div class="logobox-header">
      <div class="ml-auto">
        <span class="mx-2">
         <a ><span class="fa fa-download"></span></a>
        </span>
        <span class="mx-2">
         <span><span class="fa fa-link"></span></span>
        </span>
        <span class="mx-2">
         <span onClick={changeTheme }><span class="fa fa-adjust"></span></span>
        </span>
      </div>
    </div>
    <div class="logobox-content">
     <img src={props.light} class="img-fluid"/>
    </div>
  </div>
)
export default LogoBox;
