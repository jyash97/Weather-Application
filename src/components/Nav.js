import React from 'react';

class Nav extends React.Component{

	constructor(){
		super();
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(e){
		this.context.router.transitionTo(`/${e}`);
	}

	render(){
		const arr=['Home','About','Examples'];
		return(
			<div className="nav">
				{arr.map((keys)=><li key={keys} onClick={(e)=>this.handleChange(keys)}>{keys}</li>)}
			</div>
		);
	}
}

Nav.contextTypes={
	router:React.PropTypes.object
}

export default Nav;