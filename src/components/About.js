import React from 'react';
import Nav from './Nav';
class About extends React.Component{
	render(){
		return(
			<div>
				<Nav/>
				<h1>About</h1>
				<div className="about">
					This Application is made in ReactJS and uses OpenWeatherApi to fetch Weather data. 
				</div>
			</div>
			
		);
	}
}

export default About;