import React from 'react';
import {Tags} from './Tags.js';
import {Liste_radios} from './Liste_radios.js'
import {Radio_actuelle} from './Radio_actuelle.js'
import {radios} from './radios-big.mjs';
import banniere from '../img/banniere.png'

class App_radio extends React.Component {
  constructor(props) {
      super(props);
      this.listetags=[];
      for(let radio of radios.list)
		{
			for(let tag of radio.tags)
			{
				if(this.listetags.indexOf(tag)==-1)//on regarde s'il n'existe pas
					this.listetags.push(tag);
			}
		}

		this.selectTags=this.listetags;
      this.state = {
        radio_courante: null,
        selectTags: this.selectTags
    };
  }

  update(radio)
  {
    this.setState({radio_courante:radio});
  }

  selectall(){
		this.setState({selectTags:this.listetags});		
	}

	unselectall() {
		this.setState({selectTags:[]});
	}

	select_tag(tag)
	{
		if(this.state.selectTags.indexOf(tag)==-1)
		{
			this.setState({selectTags:[...this.state.selectTags, tag]});
		}
		else
		{
			this.setState({selectTags: this.state.selectTags.filter(tag2=>tag2!=tag)});
		}
	}



  render() {
    return (
      <div className="App_radio">
        <img src={banniere} id="banniere"></img>
        <Tags selectall={()=>this.selectall()} unselectall={()=>this.unselectall()} select_tag={(tag)=>this.select_tag(tag)} selectTags={this.state.selectTags} listetags={this.listetags} /> 
        <Liste_radios update={(radio)=>{this.update(radio)}} selectTags={this.state.selectTags}/>
        <Radio_actuelle radio={this.state.radio_courante}/>
      </div>
    );
   }
}
export {App_radio}