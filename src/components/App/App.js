import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        user: '',
        city: '',
        zip: '',
      }
    };

    // makes 'this' in handleChange
    // the same as 'this' in the constructor
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }


  handleUserChange(event) {
    console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        user: event.target.value,
      }
    })
  }

  handleCityChange(event) {
    console.log(event.target.value)
    this.setState({ 
      user: {
        ...this.state.user,
        city: event.target.value,
      }
    })  
  }

  handleZipChange(event) {
    console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        zip: event.target.value,
      }
    })
  }

  // Currying
  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        user: {
          ...this.state.user,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  render() {
    return(
      <div>
        <p>
        Name<input onChange={this.handleChangeFor('user')}/>
        City<input onChange={this.handleChangeFor('city')}/>
        Zip<input onChange={this.handleChangeFor('zip')}/>

        </p>
        <p>
        {this.state.user.user} is from {this.state.user.city}, {this.state.user.zip}
        </p>
      </div>
    );
  }
}



export default App;
