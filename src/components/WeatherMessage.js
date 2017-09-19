import React from 'react';

class WeatherMessage extends React.Component{
	render(){
		const temperature=this.props.temperature;
		const location=this.props.location;
		let text="";
		if(location==="")
			text="";
		else if(location==="wrong")
			text="Something went wrong";
		else
			text="Temperature of "+location+" is "+temperature+" *C";
		return(
			<div>
					<h1>{text}</h1>
			</div>
		);
	}
}

export default WeatherMessage;