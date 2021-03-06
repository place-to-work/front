import './test.scss';
import './shared.scss';
import React from 'react';
import loadable from '@loadable/component';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {CurrentTime} from '@models/useless/CurrentTime';
import {FormikPage} from '@pages/useless/FormikPage';
import {createBrowserHistory} from 'history';
import NotificationProvider from '@components/NotificationProvider';
import {WidthProvider} from '@utils/devices';
import {YMInitializer} from 'react-yandex-metrika';
import Loader from '@components/primitives/Loader';
import FreeTrial from '@pages/FreeTrial';


const history = createBrowserHistory();

const CafeListPage = loadable(() => import('@pages/CafesList'));
const CafePage = loadable(() => import('@pages/CafePage'));
const LoginPage = loadable(() => import('@pages/LoginPage'));
const SignupPage = loadable(() => import('@pages/SignupPage'));
const MobxPage = loadable(() => import('@pages/useless/MobxPage'));
// const AuthPage = loadable(() => import('@pages/AuthPage'));
const StaffPage = loadable(() => import('@pages/StaffPage'));
const SubscriptionMainPage = loadable(() => import('@pages/SubscriptionMain/SubscriptionMain'));
const InWorkPlace = loadable(() => import('@pages/InWorkPlace'));
const SubscribePage = loadable(() => import('@pages/Subscribe'));
const DiscountPage = loadable(() => import('@pages/DiscountPage'));
const CafeMap = loadable(() => import('@pages/CafeMap'));

const App: React.FC = () => (
	<WidthProvider>
		<NotificationProvider>
			<YMInitializer accounts={[IS_DEV ? 75731011 : 74587357]} />
			<Router history={history}>
				<Switch>
					<Route path="/success-discount">
						<DiscountPage/>
					</Route>
					<Route path="/in-place">
						<InWorkPlace qrValue={''}/>
					</Route>
					<Route path="/free-trial">
						<FreeTrial/>
					</Route>
					<Route path="/example">
						<MobxPage currentTime={new CurrentTime()}/>
					</Route>


					<Route path="/login">
						<LoginPage/>
					</Route>

					<Route path="/login:/id">
						<LoginPage/>
					</Route>

					<Route path="/signup">
						<SignupPage/>
					</Route>

					<Route path="/signup/:id">
						<SignupPage/>
					</Route>


					<Route path="/places">
						<CafeListPage/>
					</Route>

					<Route path="/places/:id">
						<CafeListPage/>
					</Route>

					<Route path="/places-map/:id">
						<CafeMap/>
					</Route>

					<Route path="/places-map">
						<CafeMap/>
					</Route>

					<Route exact path="/place/:id">
						<CafePage/>
					</Route>

					<Route path="/staff/:id">
						<StaffPage/>
					</Route>
					<Route exact path="/subscribe">
						<SubscribePage/>
					</Route>

					<Route exact path="/subscribe-main">
						<SubscriptionMainPage/>
					</Route>

					<Route path="/formik">
						<FormikPage/>
					</Route>

					<Route path="/load">
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
							<Loader/>
						</div>
					</Route>

					<Redirect to="/login"/>

				</Switch>
			</Router>
		</NotificationProvider>
	</WidthProvider>
);

export default hot(App);