import React from 'react';
class Radio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
    };
  }
  render() {
      const image = require("../img/"+this.props.Radio.img).default;
    return (
      <div className="radio" onClick={()=>{this.props.update()}}>
        <img src={image}></img>
        <div className="nomradio">
          <h3>{this.props.Radio.name}</h3>
        </div>
        
      </div>
    );
   }
}
export {Radio}