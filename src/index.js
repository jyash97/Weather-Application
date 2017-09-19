import React from 'react';
import {render} from 'react-dom';
import {Match,Miss,BrowserRouter} from 'react-router';

import About from './components/About';
import Example from './components/Example';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './css/style.css';

const Root = () =>{
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home}/>
				<Match pattern="/home" component={Home}/>
				<Match pattern="/about" component={About}/>
				<Match pattern="/examples" component={Example}/>
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(<Root/>,document.querySelector('#main'));