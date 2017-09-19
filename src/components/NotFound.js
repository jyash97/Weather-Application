import React from 'react';
import Nav from './Nav';
class NotFound extends React.Component{
	render(){
		return(
			<div>
				<Nav/>
				<h1>You are on the Wrong Page</h1>
			</div>
		);
	}
}

export default NotFound;