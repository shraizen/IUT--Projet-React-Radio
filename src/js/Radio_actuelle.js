import React from 'react';

class Radio_actuelle extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
    };
    this.audio=React.createRef();
  }

  play()
  {
    this.audio.current.play();
  }

  stop()
  {
    this.audio.current.pause();
  }


  render() {
    
      if(this.props.radio==null){
        return (<div className="radio_actuelle_off">
        <h3>Aucune radio sélectionnée</h3>
        <audio ref={this.audio}></audio>
      </div>)
      }
    const image = require("../img/"+this.props.radio.img).default;
    return (
      <div className="radio_actuelle_on">
        <img src={image}></img>
        <div className="tagradio">
          <h4>Tags : {this.props.radio.tags + " "}</h4>
        </div>
        <h2>{this.props.radio.name}</h2>
        <audio src={this.props.radio.url} ref={this.audio}></audio>
        <button onClick={()=>{this.play()}}>Play</button>
        <button onClick={()=>{this.stop()}}>Stop</button>
      </div>
    );
   }
}
export {Radio_actuelle}