import logo from './../Assets/logo.png';

export default function Header(props){
    return(
        <nav className="navbar navbar-expand-lg page-header-main">
            <p className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={logo} alt='' />
            </p>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <p className='home-menu'>Home<div/></p>
                    </li>
                    <li>
                        <span>Your Info</span>
                    </li>
                    <li className="nav-item">
                        <span>History</span>
                    </li>
                    <li>
                        <span>Experince</span>
                    </li>
                    <li className="nav-item dropdown right-li">
                        <a className="nav-link dropdown-toggle right-header" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hello {props.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <p className='options'>My Profile</p>
                            <p className='options'>Settings</p>
                            <p className='options'>Logout</p>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
    )
}