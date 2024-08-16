import React, { Component } from 'react';
import './App.css';
import List from '../src/components/list/lis'
import Headpanel from './components/head-panel/head-panel';
import Searchpanel from './components/search-panel/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { data } = this.state;
    // const employees = [
    //   { name: 'Bekanazar Kaparov', salary: 50000, id: 1 },
    //   { name: 'Alice Johnson', salary: 60000, id: 2 },
    //   { name: 'John Smith', salary: 55000, id: 3 },
    //   { name: 'Maria Garcia', salary: 58000, id: 4 }
    // ];

  

    return (
      <div className='App'>
        <Headpanel/>
        <Searchpanel/>
        <List employees={data} showId={this.showId} />
      </div>
    );
  }
}

export default App;
