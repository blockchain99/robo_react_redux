// import React from 'react'
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import  robots  from './robots'; 
// import { robots } from './robots'; //when not containing default export
import Scroll from '../components/Scroll';
import './App.css';

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   )
// }

// const state = {
//   robots: robots,
//   searchfield: ''
// }


// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       robots: robots,
//       searchfield: ''
//     }
//   }
    
//   // onSearchChange(e){ //
//   onSearchChange = (e) => {
//     this.setState({ searchfield: e.target.value })
//     const filteredRobots = this.state.robots.filter(robots => {
//       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//     })
//     // console.log(e);
//     // console.log(e.target.value);
//   }
//   render() {
//     return (
//       <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange}/>
//         <CardList robots={this.state.robots} />
//       </div>
//     )
//   }
//   }
 

// export default App

class App extends Component {
  constructor(){
    super();
    this.state = {
      // robots: robots,
      robots: [],
      searchfield: ''
    }
    // console.log('constructor');
  }
  
  // componentDidMount() {
  //   // console.log('check');
  //   this.setState({ robots: robots });
  //   // console.log('componentDidmount');
  // }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(users => { 
    //     this.setState({robots: users})
  //   })
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (e) => { //error function
    this.setState({ searchfield: e.target.value })
  }
  render() {
    // const filteredRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    // // console.log('render');
    // if(this.state.robots.length === 0){
    //   return <h1>Loading</h1>
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">RoboFriends</h1>
    //       <SearchBox searchChange={this.onSearchChange}/>
    //       <Scroll>
    //         <CardList robots={filteredRobots} />
    //       </Scroll>
    //     </div>
    //   )
    // }

    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // console.log('render');
    return !robots.length ?
    <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
 
export default App

