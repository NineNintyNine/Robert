import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll.js'

// const state={
// 	robots:  robots ,
// 	searchfield: ''
// }

class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield:''
		}
	}

    componentDidMount(){
   	 fetch('https://jsonplaceholder.typicode.com/users')
   	 .then(response=>response.json())

   	 .then(users=>this.setState({robots: users}))
   	 

   }



	OnSearchChange=(event)=>{

		this.setState({searchfield:event.target.value})
	
	}
	render(){
		// I can do this too : const {robots, searchfield} = this.state; so that there will be no need of using this.state every time
		const filteredRobots = this.state.robots.filter(robot=>   
		{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		 if(!this.state.robots.length){ //this.state.robots.length===0  (also can short cut this to !robtos? <h1 part> : else part)
			return <h1>Loading</h1>
		}else{
		return(
		<div className='tc'>
		    <h1 className='f1'>RoboApp</h1>
		    <SearchBox searchChange={this.OnSearchChange}/>
			<Scroll> <CardList robots={ filteredRobots}/> </Scroll>
		</div>
		)}



	}
}


export default App;