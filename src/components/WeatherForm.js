import React from 'react';

class WeatherForm extends React.Component{
	handleChange(e){
			e.preventDefault();
			const loc = this.location.value;
			this.props.handleLocation(loc);
	}
	render(){
		return(
			<form onSubmit={this.handleChange.bind(this)}>
				<input type="text" placeholder="City name" ref={(input)=>{this.location=input}}/>
				<button>Get Weather</button>
			</form>
		);
	}
}

export default WeatherForm;