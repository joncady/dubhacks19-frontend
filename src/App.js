import React from 'react';
import { Button } from 'reactstrap';
import Card from './components/Card/Card';
import MealCard from './components/MealCard/MealCard';
import MealTypeSelection from './components/MealTypeSelection/MealTypeSelection';
import ProfileCard from './components/ProfileCard/ProfileCard';
import UserPreferencesForm from './components/UserPreferencesForm/UserPreferencesForm';
import UserBudgetForm from './components/UserBudgetForm/UserBudgetForm';
import UserNameForm from './components/UserNameForm/UserNameForm';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import UserSignIn from './screens/Onboarding/UserSignIn';
import UserSignUp from './screens/Onboarding/UserSignUp';
import Client from './client/Client';
import SummaryChart from './components/SummaryChart/SummaryChart';

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
								<SummaryChart />
							</Route>
							<Route path="/dashboard">

							</Route>
							<Route path="/front">
								<h1>Hapi</h1>
								<h2>Build your smart diet.</h2>
								<Button color="success">Sign In</Button>{' '}
								<Button color="primary">Sign Up</Button>{' '}
							</Route>
							<Route path="/signupName">
								<UserNameForm />
							</Route>
							<Route path="/signupPreferences">
								<UserPreferencesForm />
							</Route>
							<Route path="/signupBudget">
								<UserBudgetForm />
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
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/front">front</Link>
						</li>
						<li>
							<Link to="/signupName">signupName</Link>
						</li>
						<li>
							<Link to="/signupPreferences">signupPreferences</Link>
						</li>
						<li>
							<Link to="/signupBudget">signupBudget</Link>
						</li>	
					</ul>
				</Router>
			</div>
		);
	}
}

export default App;