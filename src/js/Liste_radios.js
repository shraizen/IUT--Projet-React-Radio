
import React from 'react';
import {Radio} from './Radio.js';
import {radios} from './radios-big.mjs';
class Liste_radios extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
    };
  }

  displayable(e){
    for(let tag of e.tags)
    {
      if(this.props.selectTags.indexOf(tag)!=-1)
      {
        return true;
      }
    }
    return false;
  }

  render() {
      let listeradios = [];
      Object.keys(radios.list).forEach(element => {
        if(this.displayable(radios.list[element])){
          listeradios.push(<Radio key={element} Radio={radios.list[element]} update={()=>{this.props.update(radios.list[element])}}/>)
        }
      });
    return (
      <div className="liste_radios">
        {listeradios}
      </div>
    );
   }
}
export {Liste_radios}