import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        user: '',
        city: '',
      }
    };

    // makes 'this' in handleChange
    // the same as 'this' in the constructor
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }


  handleUserChange(event) {
    console.log(event.target.value)
    this.setState({
      user: {
        user: event.target.value,
        city: this.state.user.city
      }
    })
  }

  handleCityChange(event) {
    console.log(event.target.value)
    this.setState({ 
      user: {
        city: event.target.value,
        user: this.state.user.user
      }
    })  
  }

  render() {
    return(
      <div>
        <p>
        <input onChange={this.handleUserChange}/>
        <input onChange={this.handleCityChange}/>
        </p>
        <p>
        {this.state.user.user} is from {this.state.user.city}
        </p>
      </div>
    );
  }
}



export default App;
