import React  from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {Delme} from '@pages/useless/Delme';
import {Shit} from '@pages/useless/HolyShit';

import './test.scss';
import './shared.scss';

const App: React.FC = () => {
	return <Router>
		<Switch>
			<Route path="/delme"><Delme/></Route>
			<Route path="/"><Shit/></Route>
		</Switch>
	</Router>
};

export default hot(App);