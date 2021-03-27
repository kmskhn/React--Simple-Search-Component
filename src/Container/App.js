import React from 'react';
import './App.css';
import classes from './App.css';
import Data from '../Data/Data';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends React.Component {

  static defaultProps = {
    placeholder: "Search for cities in india",
    alignicon: "right",
    disableicon: "false"
  }

  state = {
   
    searchOnKey: this.props.searchOnKey,
    data: Data,
    result: [],
    filteredKeyData: [],
    alignicon: this.props.alignicon,
    disableicon: this.props.disableicon
    
  }

  filterByKey = () => {

    const searchOnKey = this.state.searchOnKey;
    const data = [...this.state.data];
    var filteredKeyData = [];

    for(let obj of data){
      if(obj[searchOnKey]) filteredKeyData.push(obj);
    }
    
    this.setState({filteredKeyData: filteredKeyData});
  }

  onChangeHandler = (event) => {
    const searchOnKey = this.state.searchOnKey;
      var searchResult = [];
      const input = event.target.value.toUpperCase();
      const data = [...this.state.filteredKeyData];

      for(var i = 0; i < data.length; i++){          
          if(data[i][searchOnKey].toUpperCase().indexOf(input) !== -1) searchResult.push(data[i]);
      }

      if(!event.target.value){
        searchResult= []
      };
      
      this.setState({
        result: searchResult
      });
  }

  componentDidMount(){
    this.filterByKey();
  }

  render() {
    return (
      <div className={classes.App}>
        
        <Cockpit
          changed={this.onChangeHandler}
          result={this.state.result}
          searchOnKey={this.state.searchOnKey}
          placeholder={this.props.placeholder}
          alignicon={this.state.alignicon}
          disableicon= {this.state.disableicon}
        />
      </div>   
    );
  } 
}

export default App;
