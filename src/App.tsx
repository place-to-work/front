import './test.scss';
import './shared.scss';
import React  from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import {Delme} from '@pages/useless/Delme';
import {Shit} from '@pages/useless/HolyShit';
import MobxPage from '@pages/useless/MobxPage';

import {CurrentTime} from '@models/useless/CurrentTime';

const App: React.FC = () => <Router>
	<Switch>
		<Route path="/delme"><Delme/></Route>
		<Route path="/mobx"><MobxPage currentTime={new CurrentTime()}/></Route>
		<Route path="/"><Shit/></Route>
	</Switch>
</Router>;

export default hot(App);