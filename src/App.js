import React, {Component} from 'react';
import './App.css'
import Table from './Table';
import Form from './Form'
import Footer from './Footer'

class App extends Component {

  state = {
    charachters: []
  }    

  removeCharachter = (index) => {
    const {charachters} = this.state

    this.setState({
      charachters: charachters.filter((charachter, i) => {
        return i !== index
      })
    })
  } 

  addCharachter = (charachter) => {
    this.setState({
      charachters:[...this.state.charachters, charachter]
    })
  } 

  render() { 
    return (
        <div className = 'container'>
          <h1> React Entrybook </h1>
          <p>Add a character with a name and a job to the table</p>
          <Table
           people={this.state.charachters}
           removeChar = {this.removeCharachter}
          />
          <Form 
            addCharachter={this.addCharachter}
          />
          <Footer />
        </div>
    )
  }
}

export default App;
