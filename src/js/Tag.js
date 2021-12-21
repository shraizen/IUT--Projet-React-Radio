import React from 'react';
import ReactDOM from 'react-dom';

class Tag extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={};		
	}
	render() 
	{
		var classname="tagunselect";
		if(this.props.select)
		{
			classname="tagselect";
		}
		return (
			<div id="tag" className={classname} onClick={()=>this.props.onClick()}>
				<h4>{this.props.tag}</h4>
			</div>
		);
	}
}

export {Tag};