import img from './../Assets/Image-Slide.png';
import google_img from './../Assets/google.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function SignIn(props) {
    const { signin,errors } = props.state;

    const disableSigninBtn = (signin.signinEmail =="" || errors.signinEmail) || (errors.password || signin.signinPwd == "");

    return (
        <div className='signin-container'>
            <div className='signin-container-left'>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    autoPlay={false}
                    stopOnHover={false}
                    useKeyboardArrows={false}
                    showThumbs={false}
                >
                    <div>
                        <p className='header-text'>Solutions for the Future</p>
                        <img src={img} className='signin-image' alt='' />
                        <p className='subheader-text'>Report | Portfolio Analytics | Decision Making</p>
                    </div>
                    <div>
                        <p className='header-text'>Solutions for the Future2</p>
                        <img src={img} className='signin-image' alt='' />
                        <p className='subheader-text'>Report | Portfolio Analytics | Decision Making</p>
                    </div>
                    <div>
                        <p className='header-text'>Solutions for the Future3</p>
                        <img src={img} className='signin-image' alt='' />
                        <p className='subheader-text'>Report | Portfolio Analytics | Decision Making</p>
                    </div>
                </Carousel>
            </div>

            <form>
                <div className='signin-container-right'>
                    <p className='header-text-right'>Sign In</p>
                    <div className='signin-btn'>
                        <img src={google_img} alt='' />
                        <p className='subheader-text'>Sign in with Google</p>
                    </div>
                    <div className='separator'>Or</div>
                    <div className='email-input'>
                        <p>Email Address or Phone Number</p>
                        <input type='text' name='signinEmail' value={signin.signinEmail} placeholder='Enter email address' onChange={(e)=>props.handleChange(e)} />
                        {errors.signinEmail && <div className="error"> {errors.signinEmail} </div>}
                    </div>
                    <div className='password-input'>
                        <p>Password</p>
                        <input type='password' name='signinPwd' value={signin.signinPwd} onChange={(e)=>props.handleChange(e)} />
                        {errors.password && <div className="error"> {errors.password} </div>}
                    </div>
                    <div className='remember-input'>
                        <input type='checkbox' />
                        <span>Remember Me?</span>
                        <a href='/'>Forgot Password</a>
                    </div>
                    
                    <button className={`${ disableSigninBtn ? 'disabled-btn' : ''} submit-btn`} disabled={disableSigninBtn} onClick={()=>props.setSignedIn(true)}>
                        Sign in
                    </button>
                    <p className='dont-have-account'>Don’t have an account? <a href='/'>Signup</a></p>
                </div>
            </form>
        </div>
    )
}