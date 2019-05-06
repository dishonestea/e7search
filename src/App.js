import React, {Component} from 'react';
import CardList from './CardList';
import {catalysts} from './catalysts';
import SearchBox from './SearchBox';



class App extends Component {
  constructor(){
    super()

    this.state = {
              catalysts: catalysts,
              searchfield: ''
                 }

  }


  onSearchChange = (event) =>   {
    this.setState({searchfield: event.target.value})
  }

render() {

  const filteredCatalysts = this.state.catalysts.filter(catalyst => {
      return catalyst.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })

return(
    <div className = 'tc'>
    <h1 className= 'f1'>Catalyst Finder</h1>
    <SearchBox searchChange = {this.onSearchChange} />
    <hr/>
    <br/>
     <CardList  catalysts= {filteredCatalysts}/>
    </div>
    );
  }
}

export default App;