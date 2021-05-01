import React from "react";
import './App.scss';
import SignIn from './Components/SignIn';
import Home from './Components/Home';

class App extends React.Component {
  state = {
    isSignedIn: false,
    signin: {
      signinEmail: '',
      signinPwd: '',
    },
    personalDetails: {
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    },
    errors: {
      signinEmail: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
    workExp: [
      { checked: true, company: 'Talentica Software', role: 'Web Developer', exp: '36' }
    ]
  }

  render() {

    const setSignedIn = (value) => {
      this.setState({ ...this.state, isSignedIn: value })
    }

    const addWorkExp = () => {
      const rows = [...this.state.workExp,
      { company: '', role: '', exp: '', checked: false }
      ];
      this.setState({
        workExp:rows,
      });
    }
    const deleteWorkExp = (id) => {
      this.setState({
        workExp: this.state.workExp.filter((e,i) => i !== id)
      });
    }

    const handleChange = (e,i) => {
      const { name, value } = e.target;
      let errors = this.state.errors;

      const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

      switch (name) {
        case 'signinEmail':
          errors.signinEmail = validEmailRegex.test(value) ? '' : 'Email is not valid!';
          this.setState({ ...this.state, ...{ signin: { ...this.state.signin, signinEmail: value } } })
          break;
        case 'signinPwd':
          errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
          this.setState({ ...this.state, ...{ signin: { ...this.state.signin, signinPwd: value } } })
          break;
        case 'firstname':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, firstName: value } } })
          break;
        case 'lastname':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, lastName: value } } })
          break;
        case 'dob':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, dob: value } } })
          break;
        case 'gender':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, gender: value } } })
          break;
        case 'email':
          errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, email: value } } })
          break;
        case 'phone-number':
          errors.phoneNumber = (value.length < 10 || !(Number(value))) ? 'Invalid phone number' : '';
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, phoneNumber: value } } })
          break;
        case 'address':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, address: value } } })
          break;
        case 'city':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, city: value } } })
          break;
        case 'state':
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, state: value } } })
          break;
        case 'zipcode':
          errors.zipcode = (value.length < 6 || !(Number(value))) ? 'Zip code is not valid' : '';
          this.setState({ ...this.state, ...{ personalDetails: { ...this.state.personalDetails, zipcode: value } } })
          break;
        case 'company':
          const rows = [...this.state.workExp];
          rows[i].company=value
            this.setState({
              workExp:rows,
            });
          break;
        case 'role':
          const row_role = [...this.state.workExp];
          row_role[i].role=value
            this.setState({
              workExp: row_role
            });
          break;
        case 'exp':
          const row_exp = [...this.state.workExp];
          row_exp[i].exp=value;
          row_exp[i].error_exp = !(Number(value)) ? 'Experience should be number' : '';
            this.setState({
              workExp: row_exp
            });
          break;


        default:
          this.setState({ ...this.state })
          break;
      }
      console.log(this.state);
    }

    return (
      <div className="App">
        {!this.state.isSignedIn &&
          <SignIn state={this.state} handleChange={(e) => handleChange(e)} setSignedIn={(v) => setSignedIn(v)} />
        }
        {this.state.isSignedIn &&
          <Home state={this.state} handleChange={(e,i) => handleChange(e,i)} addWorkExp={()=>addWorkExp()} deleteWorkExp={(id)=>deleteWorkExp(id)}/>
        }
      </div>
    )
  }
}

export default App;