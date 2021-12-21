import React from 'react';
import {Tag} from './Tag.js';

class Tags extends React.Component {	

	constructor(props) {
		super(props);
		
		this.state={};
	}

	render() {
		return (
			<div className="tags">
					<div className="boutons_tags">
					    <button id="tout_selectionner" onClick={()=>this.props.selectall()}>Sélectionner tout les tags</button>
					    <button id="deselectionner" onClick={()=>this.props.unselectall()}>Désélectionner tout les tags</button><br />
					</div>
				{
					(()=>{let radio = []; 
					Object.keys(this.props.listetags).forEach((key)=>{radio.push(<Tag onClick={()=>this.props.select_tag(this.props.listetags[key])} select={this.props.selectTags.indexOf(this.props.listetags[key])!=-1} tag={this.props.listetags[key]} key={key} />)}); 
					return radio;})()
				}
			</div>
		);
	}
}

export {Tags};