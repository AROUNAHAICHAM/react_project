import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
const Navbar = () => {
    return (
        <div className='navbar1'>
            <nav className="navbar  navbar-light  ">
                <div className="container-fluid">
                    <div className="d-flex" >
                        <a className="navbar-brand me-3" href="#">JobHuntly</a>
                        <div className="d-flex navbar"  >
                            <a className="nav-link me-3"  href="#">Find jobs</a>
                            <a className="nav-link" href="#">Browse companie</a>  
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn btn-light me-2">LogIn</button>
                        <button type="button" className="btn btn-primary ">SinUp</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
