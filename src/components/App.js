import React, { Component } from "react";
import CardList from '../containers/CardList';
import robos from "../robo";
import SearchBox from "../containers/SearchBox";
import Scroll from "../containers/Scroll";


class App extends Component {
    constructor() {
        super()
        //create a state with information and data
        this.state = {
            robos: [],
            searchField: ''
        }
    }
// request a data from that server below with help of fetch.
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robos: users }));
    }
//make a function which have a setState for change the initial value of searchField.
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
 //destructuring, and after, make a function for filtering the robots's name.
        const { robos, searchField } = this.state
        const filterRobots = robos.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
//verify if robos.lenght === 0
        return !robos.length ? <h1>Loading</h1> : 
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
{/* create this Scroll, which have a children, CardList. */}
                    <Scroll>
                        <CardList robos={filterRobots} />
                    </Scroll>
                </div>
            )

    }
}
export default App;