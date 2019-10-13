import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Client from './client/Client';
import { OneTabStyle, TabStyle, AppStyle , ViewportStyle } from './globalStyle';

// Screens
import Landing from './screens/Landing/Landing';
import Social from './screens/Social/Social';
import Meal from './screens/Meal/Meal';
import UserPreferencesForm from './screens/UserPreferencesForm/UserPreferencesForm';
import UserBudgetForm from './screens/UserBudgetForm/UserBudgetForm';
import UserNameForm from './screens/UserNameForm/UserNameForm';
import Summary from './screens/Summary/Summary';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			meals: null,
			client: new Client(),
			user: null,
			form: {
				firstName: "",
				lastName: "",
				location: "",
				currency: "USD",
				budget: 0,
				calorieGoal: 0,
				dietRestrictions: [0, 0, 0],
				cuisines: [0, 0, 0, 0]
			},
			summary: null
		}
	}

	componentDidMount() {
		const { client } = this.state;
		client.getMeals(this.updateData);
		client.getSocialData(this.updateData);
	}

	updateData = (key, value) => {
		this.setState(prevState => {
			return {
				...prevState,
				[key]: value
			};
		})
	}

	fillForm = (key, formValues) => {
		this.setState(prevState => {
			return {
				...prevState,
				[key]: formValues,
				form: {
					...prevState.form,
					...formValues
				}
			}
		});
	}

	setBudget = (price, selected) => {
		this.setState(prevState => {
			let priceChange = selected ? prevState.form.budget - price : prevState.form.budget + price;
			return {
				...prevState,
				form: {
					...prevState.form,
					budget: priceChange
				}
			}
		});
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
		let { summary, meals, form, social, user, client } = this.state;
		return (
			<div className="App" id="app">
					<AppStyle>
						<Router>
							<ViewportStyle>
								<Switch>
									<Route path="/meal">
										<Meal meals={meals} getData={(id) => client.getUserData(id, this.fillForm)} callback={this.fillForm} budget={this.state.form.budget} user={user} setBudget={this.setBudget} />
									</Route>
									<Route path="/summary">
										<Summary getData={(id) => client.getUserSummary(id, this.updateData)} expenditure={summary} currency={form.currency} />
									</Route>
									<Route path="/signupName">
										<UserNameForm onChange={this.changeFormData} {...form} />
									</Route>
									<Route path="/signupPreferences">
										<UserPreferencesForm onChange={this.changeFormData} {...form} />
									</Route>
									<Route path="/signupBudget">
										<UserBudgetForm onChange={this.changeFormData} {...form} />
									</Route>
									<Route exact path="/">
										<Landing />
									</Route>
									<Route path="/social">
										<Social posts={social} />
									</Route>
								</Switch>
							</ViewportStyle>
							<TabStyle>
								<OneTabStyle>
									<Link to="/meal" style={{ textDecoration: 'none', color: 'white' }}>
										<div><img width="25" src="img/food.png" alt="meal"></img></div>
										Meal
										</Link>
								</OneTabStyle>
								<OneTabStyle>
									<Link to="/summary" style={{ textDecoration: 'none', color: 'white' }}>
										<div><img width="25" src="img/summary.png" alt="summary"></img></div>
										Summary
										</Link>
								</OneTabStyle>
								<OneTabStyle>
									<Link to="/social" style={{ textDecoration: 'none', color: 'white' }}>
										<div><img width="25" src="img/community.png" alt="community"></img></div>
										Community
									</Link>
								</OneTabStyle>
							</TabStyle>
						</Router>
					</AppStyle>
			</div>
		);
	}
}

export default App;