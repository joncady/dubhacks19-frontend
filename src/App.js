import React from 'react';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import UserSignIn from './screens/Onboarding/UserSignIn';
import UserSignUp from './screens/Onboarding/UserSignUp';
import Client from './client/Client';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			user: null,
			meals: null
		}
	}

	componentDidMount() {
		let client = new Client("http://localhost:3030");
		client.login(null, {
			username: "test",
			password: "pass"
		});
	}

	respond = (data) => {
		this.setState({
			meals: data.meals
		})
	}

	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Switch>
							<Route exact path="/">
								<div>Meal</div>
							</Route>
							<Route path="/login">
								<UserSignIn />
							</Route>
							<Route path="/summary">

							</Route>
							<Route path="/dashboard">

							</Route>
						</Switch>
					</div>
					<ul style={{
						display: 'flex',
						width: '100%'
					}}>
						<li>
							<Link to="/">Meal</Link>
						</li>
						<li>
							<Link to="/summary">summary</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
					</ul>
				</Router>
			</div>
		);
	}
}

export default App;