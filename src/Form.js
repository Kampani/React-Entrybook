import React, {Component} from 'react';

class Form extends Component {
	initialstate = {
		name: '',
		job:''
	}

	state = this.initialstate

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
			[name]: value,
		})
		//console.log(`${event.target.name} : ${event.target.value}`)
	}

	submitClick = () => {
		this.props.addCharachter(this.state)
		this.setState(this.initialstate)
	}

	render(){
		return(
			<form>
		      <label htmlFor="name">Name</label>
		      <input
		        type="text"
		        name="name"
		        value={this.state.name}
		        id="name"
		        onChange={this.handleChange} />
		      <label htmlFor="job">Job</label>
		      <input
		        type="text"
		        name="job"
		        value={this.state.job}
		        id="job"
		        onChange={this.handleChange} />
		       <input
		       	type="button"
		       	value="submit"
		       	onClick={this.submitClick}
		       />
    		</form>
		)
	}
}

export default Form 