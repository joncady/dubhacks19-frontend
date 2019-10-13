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
import { AppStyle, ViewportStyle, TabStyle, OneTabStyle } from './globalStyle';
import Meal from './screens/Meal/Meal';

// Screens
import Landing from './screens/Landing/Landing';

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
		// client.getUserData(1, this.updateData);
		client.getMeals(this.updateData);
		// client.getSocialData(this.updateData);
		// client.getUserSummary(1, this.updateData);
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
		let { summary, meals } = this.state;
		return (
			<div className="App">
				<AppStyle>
					<Router>
						<ViewportStyle>
							<Switch>
								<Route exact path="/meal">
									<Meal meals={meals} />
								</Route>
								<Route path="/summary">
									<SummaryChart summary={summary} />
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
								<Route path="/landing">
									<Landing />
								</Route>
							</Switch>
						</ViewportStyle>
						<TabStyle>
							<OneTabStyle>
								<Link to="/meal">Meal</Link>
							</OneTabStyle>
							<OneTabStyle>
								<Link to="/summary">Summary</Link>
							</OneTabStyle>
							<OneTabStyle>
								<Link to="/social">Social</Link>
							</OneTabStyle>
						</TabStyle>
					</Router>
				</AppStyle>
			</div>
		);
	}
}

export default App;

/*
							<li>
								<Link to="/signupName">signupName</Link>
							</li>
							<li>
								<Link to="/signupPreferences">signupPreferences</Link>
							</li>
							<li>
								<Link to="/signupBudget">signupBudget</Link>
							</li>
*/