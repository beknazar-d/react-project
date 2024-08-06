import React, { Component } from 'react';
import './App.css';
import Onbutton from './components/buttons/buttons';
import List from '../src/components/list/lis'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      data: [
        { name: 'Bekanazar Kaparov', salary: 50000, id: 1 },
        { name: 'Alice Johnson', salary: 60000, id: 2 },
        { name: 'John Smith', salary: 55000, id: 3 },
        { name: 'Maria Garcia', salary: 58000, id: 4 }
      ]
    };
  }

  handlerClick = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  showId = (id) => {
    console.log(id);
    
    this.setState(({data})=> {
      return {
        data: data.filter((item) => item.id !== id)
      }
      
    })
    
  }
  
  render() {
    const { counter } = this.state;
    const employees = [
      { name: 'Bekanazar Kaparov', salary: 50000, id: 1 },
      { name: 'Alice Johnson', salary: 60000, id: 2 },
      { name: 'John Smith', salary: 55000, id: 3 },
      { name: 'Maria Garcia', salary: 58000, id: 4 }
    ];

    const buttonStyles = [
      { className: "button button-primary", text: "Primary" },
      { className: "button button-secondary", text: "Secondary" },
      { className: "button button-success", text: "Success" },
      { className: "button button-danger", text: "Danger" }
    ];

    return (
      <div>
        <button onClick={this.handlerClick}>Click me {counter} times!</button>
        <Onbutton data={buttonStyles} showId={this.showId} />
        <List employees={employees} showId={this.showId} />
      </div>
    );
  }
}

export default App;
