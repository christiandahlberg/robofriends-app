import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// TODO: Build Django REST API to get 'robots' (or whatever)
// TODO: CRUD

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',	
		}
	}

	// API
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return (
			<div className="tc">
				<h1 className="f1">ROBOFRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}
}

export default App;