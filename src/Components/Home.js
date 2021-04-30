import React from "react";
import Header from './Header';
import trash from './../Assets/trash.png'
class Home extends React.Component {

    state ={
        errorMessage:''
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "phone_number") {
            if (!Number(val)) {
                this.setState({
                    errorMessage: 'Invalid Phone Number'
                })
            }
        }
        // this.setState({ [nam]: val });
    }

    render() {
        return (
            <div>
                <Header />
                <div className='content-container-main'>
                    <p>Basic Information</p>
                    <hr />
                    <form>
                        <div className='row main-content justify-content-around'>
                            <div className='col-md-12'>
                                <div className='personal-details-content-main col-md-6'>
                                    <p>Personal Details</p>
                                    <div className='personal-details col-md-12'>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">First Name</span></p>
                                            <input type='text' className='form-control' name='firstname' placeholder='Enter your first name' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Last Name</span></p>
                                            <input type='text' name='lastname' className='form-control' placeholder='Enter your last name' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Date of Birth</span></p>
                                            <input type='date' name='dob' className='form-control' placeholder='Enter your date of birth' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Gender</span></p>
                                            <div className="radio-btn col-md-12'">
                                                <div>
                                                    <input type="radio" id="male" name="gender" value="male" /><span>Male</span>
                                                </div>
                                                <input type="radio" id="female" name="gender" value="female" /><span>Female</span>
                                            </div>
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Email</span></p>
                                            <input type='email' className='form-control' name='email' placeholder='Enter your email ID' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Phone Number</span></p>
                                            <input type='text' className='form-control' name='phone_number' placeholder='0000000000' onChange={(e)=>this.handleChange(e)} />
                                            {this.state.errorMessage && <div className="error"> {this.state.errorMessage} </div>}
                                        </div>
                                        <div className='first-name-input col-md-12'>
                                            <p className="form-group required"><span className="control-label">Address Line 1</span></p>
                                            <input type='text' className='form-control' name='address' placeholder='Flat number, building, name, area' />
                                        </div>
                                        <div className='first-name-input col-md-12'>
                                            <p className="form-group required"><span className="control-label">City</span></p>
                                            <input type='text' className='form-control' name='city' placeholder='Enter your city name' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">State</span></p>
                                            <input type='text' className='form-control' name='state' placeholder='Please select state' />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Zip Code</span></p>
                                            <input type='text' className='form-control' name='zipcode' placeholder='000000' />
                                        </div>
                                    </div>
                                </div>
                                <div className='work-exp-content-main col-md-6'>
                                    <p>Work Experince</p>
                                    <div className='work-exp-conatiner col-md-12'>
                                        <div className='work-exp col-md-12'>
                                            <div className='trash-icon'>
                                                {/* <span class="glyphicon glyphicon-trash float-right"></span> */}
                                                <img src={trash} alt='' />
                                            </div>
                                            <p className="form-group required"><span className="control-label">Company Name</span></p>
                                            <input type='text' className='form-control' name='company' placeholder='Enter your company name' />
                                        </div>
                                        <div className='work-exp work-exp1 col-md-6'>
                                            <p className="form-group required"><span className="control-label">Role</span></p>
                                            <input type='text' className='form-control' name='state' placeholder='Enter your email ID' />
                                        </div>
                                        <div className='work-exp work-exp1 col-md-6'>
                                            <p className="form-group required"><span className="control-label">Experince in months</span></p>
                                            <input type='text' className='form-control' name='zipcode' placeholder='000000' />
                                        </div>
                                    </div>
                                    <div className='work-exp-conatiner col-md-12'>
                                        <div className='work-exp col-md-12'>
                                            <p className="form-group required"><span className="control-label">Company Name</span></p>
                                            <input type='text' className='form-control' name='company' placeholder='Enter your company name' />
                                        </div>
                                        <div className='work-exp work-exp1 col-md-6'>
                                            <p className="form-group required"><span className="control-label">Role</span></p>
                                            <input type='text' className='form-control' name='state' placeholder='Enter your email ID' />
                                        </div>
                                        <div className='work-exp work-exp1 col-md-6'>
                                            <p className="form-group required"><span className="control-label">Experince in months</span></p>
                                            <input type='text' className='form-control' name='zipcode' placeholder='000000' />
                                        </div>
                                    </div>
                                    <a href='/' className='add-another'>+Add Another</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='content-footer row'>
                            <div className='next-btn'>
                                Next
                            </div>
                        </div>
            </div>
        )
    }
}

export default Home;