import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Home from './Components/Home';

class App extends React.Component {
  state = {
    signin: {
      signinEmail: '',
      signinPwd: '',
    }
  }
  handleChange = (e) => {
    switch (e.target.name) {
      case 'signin-email':
          this.setState({...this.state,...{signin:{...this.state.signin,signinEmail : e.target.value}}})
        break;
      case 'signin-pwd':
        this.setState({...this.state,...{signin:{...this.state.signin,signinPwd : e.target.value}}})
      break;

      default:
          this.setState({...this.state})
        break;
    }
    
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={() => <SignIn  state={this.state} handleChange={(e) => this.handleChange(e)} />} />
            <Route path='/home' component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
