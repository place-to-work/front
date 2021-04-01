import './test.scss';
import './shared.scss';
import React  from 'react';
import {
	Router,
	Switch,
	Route,
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import {Delme} from '@pages/useless/Delme';
import MobxPage from '@pages/useless/MobxPage';

import {CurrentTime} from '@models/useless/CurrentTime';
import {FormikPage} from '@pages/useless/FormikPage';
import CafeListPage from '@pages/CafesList';
import CafePage from '@pages/CafePage';
import AuthPage from '@pages/AuthPage';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
import {createBrowserHistory} from 'history';
import SubscribePage from "@pages/Subscribe";
import InWorkPlace from '@pages/InWorkPlace';


const history = createBrowserHistory();

const App: React.FC = () =>{
	try{
	document.addEventListener('touchmove', function (event) {
		if (event.scale !== 1) { event.preventDefault(); }
	}, { passive: false });
	}catch (e){
		console.log(e)
	}

	return <Router history={history}>
	<Switch>
		<Route path="/in-place"><InWorkPlace/></Route>
		<Route path="/example"><MobxPage currentTime={new CurrentTime()}/></Route>

		<Route path="/login"><LoginPage/></Route>
		<Route path="/signup"><SignupPage/></Route>
		<Route path="/cafes"><CafeListPage/></Route>
		<Route exact path="/cafe/:id">
			<CafePage/>
		</Route>
		<Route exact path="/subscribe">
			<SubscribePage/>
		</Route>
		<Route path="/mobx"><MobxPage currentTime={new CurrentTime()}/></Route>
		<Route path="/formik"><FormikPage/></Route>
		<Route path="/"><AuthPage/></Route>
		<Route path="/"><Delme/></Route>
	</Switch>
</Router>
}

export default hot(App);