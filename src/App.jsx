import React  from 'react';
import { hot } from 'react-hot-loader/root';
import './test.scss';
import Delme from './components/Delme/Delme';

const App = () => {
	return <div className="app">Hello<Delme/></div>
};

export default hot(App);