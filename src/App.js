import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(res =>
            res.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <SearchBox
                    placeholder='Search Monster'
                    handleChange={this.handleChange}
                />

                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
