import React from 'react';
import Nav from './Nav';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Home extends React.Component{
	constructor(){
		super();
		this.state={
			location:"",
			weather:""
		};
		this.handleLocation=this.handleLocation.bind(this);
	}

	handleLocation(loc){
		const b=encodeURI(loc);
		const a="http://api.openweathermap.org/data/2.5/weather?q="+b+"&units=metric&appid=78f49be6b706b1e7f88beeee111650a4";
		fetch(a)
		  .then(response => response.json())
		  .then(data => {
		  	if((data.name).toLowerCase()===loc.toLowerCase()){
		  		this.setState({
					location:loc,
					weather:data.main.temp
				});
		  	}
		  	else{
		  		this.setState({
		  			location:"wrong"
		  		});
		  	}
		  })
		  .catch((error)=>{
		  	console.log("error");
		  	this.setState({
		  			location:"wrong"
		  		});
		  });
		  
	}

	render(){
		return(
			<div>
				<Nav/>
				<WeatherForm handleLocation={this.handleLocation}/>
				<WeatherMessage temperature={this.state.weather} location={this.state.location}/>
			</div>
			
		);
	}
}

export default Home;