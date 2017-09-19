import React from 'react';
import Nav from './Nav';
class Example extends React.Component{
	render(){
		return(
			<div>
				<Nav/>
				<h1>Example</h1>
				<div className="about">
					If you serach for the City like Indore it Will give a message showing the city name and its temperature.
				</div>
			</div>
			
		);
	}
}

export default Example;