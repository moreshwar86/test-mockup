import React from "react";
import Header from './Header';
import trash from './../Assets/trash.png';

class Home extends React.Component {

    render() {
        const { personalDetails, signin ,workExp, errors } = this.props.state;
        const work_exp_validation = workExp.filter(v=>v.company == '' || v.role == '' || v.exp == '' || v.error_exp) 

        const disableNextBtn = personalDetails.firstName === '' ||
            personalDetails.lastName === '' ||
            personalDetails.dob === '' ||
            personalDetails.gender === '' ||
            personalDetails.email === '' ||
            personalDetails.phoneNumber === '' ||
            personalDetails.address === '' ||
            personalDetails.city === '' ||
            personalDetails.state === '' ||
            personalDetails.zipcode === '' ||
            errors.email || errors.phoneNumber || errors.zipcode || work_exp_validation.length > 0;

        const name = signin.signinEmail.split('@')[0];

        return (
            <div>
                <Header name={name} />
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
                                            <input type='text' className='form-control' name='firstname' placeholder='Enter your first name' value={personalDetails.firstName} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Last Name</span></p>
                                            <input type='text' name='lastname' className='form-control' placeholder='Enter your last name' value={personalDetails.lastName} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Date of Birth</span></p>
                                            <input type='date' name='dob' className='form-control' placeholder='Enter your date of birth' value={personalDetails.dob} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Gender</span></p>
                                            <div className="radio-btn col-md-12'">
                                                <div>
                                                    <input type="radio" id="male" checked={personalDetails.gender === 'male'} onChange={(e) => this.props.handleChange(e)} name="gender" value="male" /><span>Male</span>
                                                </div>
                                                <input type="radio" id="female" name="gender" value="female" checked={personalDetails.gender === 'female'} onChange={(e) => this.props.handleChange(e)} /><span>Female</span>
                                            </div>
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Email</span></p>
                                            <input type='email' className='form-control' name='email' placeholder='Enter your email ID' value={personalDetails.email} onChange={(e) => this.props.handleChange(e)} />
                                            {errors.email && <div className="error"> {errors.email} </div>}
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Phone Number</span></p>
                                            <input type='text' className='form-control' name='phone-number' placeholder='0000000000' value={personalDetails.phoneNumber} onChange={(e) => this.props.handleChange(e)} />
                                            {errors.phoneNumber && <div className="error"> {errors.phoneNumber} </div>}
                                        </div>
                                        <div className='first-name-input col-md-12'>
                                            <p className="form-group required"><span className="control-label">Address Line 1</span></p>
                                            <input type='text' className='form-control' name='address' placeholder='Flat number, building, name, area' value={personalDetails.address} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-12'>
                                            <p className="form-group required"><span className="control-label">City</span></p>
                                            <input type='text' className='form-control' name='city' placeholder='Enter your city name' value={personalDetails.city} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">State</span></p>
                                            <input type='text' className='form-control' name='state' placeholder='Please select state' value={personalDetails.state} onChange={(e) => this.props.handleChange(e)} />
                                        </div>
                                        <div className='first-name-input col-md-6'>
                                            <p className="form-group required"><span className="control-label">Zip Code</span></p>
                                            <input type='text' className='form-control' name='zipcode' placeholder='000000' value={personalDetails.zipcode} onChange={(e) => this.props.handleChange(e)} />
                                            {errors.zipcode && <div className="error"> {errors.zipcode} </div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='work-exp-content-main col-md-6'>
                                    <p>Work Experince</p>
                                        {workExp.map((row, idx) => {
                                        return (
                                            <div className='work-exp-conatiner col-md-12' key={idx}>
                                                <div className='work-exp col-md-12'>
                                                        <div className='trash-icon'>
                                                        <img src={trash} alt='' onClick={()=>this.props.deleteWorkExp(idx)} />
                                                    </div>
                                                    <p className="form-group required"><span className="control-label">Company Name</span></p>
                                                    <input type='text' className='form-control' name='company' placeholder='Enter your company name' value={row.company} onChange={(e) => this.props.handleChange(e,idx)} />
                                                </div>
                                                <div className='work-exp work-exp1 col-md-6'>
                                                    <p className="form-group required"><span className="control-label">Role</span></p>
                                                    <input type='text' className='form-control' name='role' placeholder='Enter your role in your company' value={row.role} onChange={(e) => this.props.handleChange(e,idx)} />
                                                </div>
                                                <div className='work-exp work-exp1 col-md-6'>
                                                    <p>Experince in months</p>
                                                    <input type='text' className='form-control' name='exp' placeholder='000' value={row.exp} onChange={(e) => this.props.handleChange(e,idx)} />
                                                    {row.error_exp && <div className="error"> {row.error_exp} </div>}
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                    <a className='add-another' onClick={()=>this.props.addWorkExp()} >+Add Another</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='content-footer row'>
                    <button className={`${disableNextBtn ? 'disabled-btn' : ''} next-btn`} disabled={disableNextBtn}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default Home;