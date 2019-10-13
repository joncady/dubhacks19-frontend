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

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Switch>
						<Route exact path="/">

						</Route>
						<Route path="/summary">
							<MealTypeSelection />
							<ProfileCard buttonLabel="Profile" name="Jon Cady" content="Saved $1000!"/>
							<UserPreferencesForm />
							<MealCard title="Title" calories="100 Calories" description="This is an example mealplan"/>
							<MealCard title="Title" calories="100 Calories" description="This is an example mealplan"/>
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

export default App;
