import React from 'react';
import { Button } from 'reactstrap';
import Card from './components/Card/Card';
import MealCard from './components/MealCard/MealCard';
import MealTypeSelection from './components/MealTypeSelection/MealTypeSelection';
import ProfileCard from './components/ProfileCard/ProfileCard';
import UserPreferencesForm from './screens/UserPreferencesForm/UserPreferencesForm';
import UserBudgetForm from './screens/UserBudgetForm/UserBudgetForm';
import UserNameForm from './screens/UserNameForm/UserNameForm';
import Summary from './screens/Summary/Summary';
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
			client: new Client(),
			form: {
				firstName: "",
				lastName: "",
				location: "",
				currency: "USD",
				budget: 0,
				calorieGoal: 0
			}
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

	changeFormData = (key, value) => {
		this.setState(prevState => {
			return {
				...prevState,
				form: {
					...prevState.form,
					[key]: value
				}
			}
		})
	}

	render() {
		let { summary, meals, form } = this.state;
		console.log(form)
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
									<Summary expenditure={[10, 20, 30, 40, 50, 60, 70]} currency={"USD"}/>
								</Route>
								<Route path="/signupName">
									<UserNameForm onChange={this.changeFormData} {...form}/>
								</Route>
								<Route path="/signupPreferences">
									<UserPreferencesForm onChange={this.changeFormData} {...form} />
								</Route>
								<Route path="/signupBudget">
									<UserBudgetForm onChange={this.changeFormData} {...form} />
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