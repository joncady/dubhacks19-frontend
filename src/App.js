import React from 'react';
import { Button } from './components/Button/Button';
import Card from './components/Card/Card';
import MealCard from './components/MealCard/MealCard';
import MealTypeSelection from './components/MealTypeSelection/MealTypeSelection';
import ProfileCard from './components/ProfileCard/ProfileCard';
import UserPreferencesForm from './components/UserPreferencesForm/UserPreferencesForm';
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
			meals: null,
			client: new Client()
		}
	}

	componentDidMount() {
		const { client } = this.state;
		client.getUserData(1, this.updateData);
		client.getMeals(this.updateData);
		client.getSocialData(this.updateData);
		client.getUserSummary(1, this.updateData);
	}

	updateData = (key, value) => {
		this.setState(prevState => {
			return {
				...prevState,
				[key]: value
			};
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
							<Route path="/signup">
								<UserSignUp />
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