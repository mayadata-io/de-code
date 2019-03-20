import React from 'react';
import {IconLists} from '../../../resources/fonts/maya-icons/list.js'
class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIcons: IconLists ,
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value})

    let allIcons = JSON.stringify(IconLists);
    let input = this.state.input;
    var inputRegex = new RegExp(input, 'i');

    let searchResult = IconLists.filter(IconLists, function(IconLists) {
      return allIcons.match(inputRegex);
      console.log('searchResult',allIcons.match(inputRegex));
    })
  }
  render() {
    return(
      <div>
        <div>
          <div className="mt-5 mb-4 ">
            <input className="form-control form-control-lg" placeholder={`Search ${IconLists.length} icons`} value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          { this.state.searchIcons.map((icon) =>
            <div className="icon-box-content" key={icon.name}>
              <span key={icon.name}className={`mi mi-1x mr-3 ${icon.name}`} key={icon.name}></span>
              <span key={icon.label}>{icon.label}</span>
            </div>
            )
          }
         </div>
      </div>
    );
  }
}

export default Icons;
