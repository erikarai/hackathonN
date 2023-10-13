import React,{useState,useEffect} from 'react'
import {Link, Outlet,useLocation} from 'react-router-dom'
import Panelvideo from './Panelvideo';


function Panelist() {
    const [videoVisible, setVideoVisible] = useState(true); // Initialize video visibility as true

    const location=useLocation();


  // Function to handle toggling the video visibility
  const toggleVideoVisibility = () => {
    setVideoVisible(false);
      };
      useEffect(() => {
        if (location.pathname === '/panel') {
          setVideoVisible(true);
        } else {
          setVideoVisible(false);
        }
      }, [location.pathname]);
  
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#240A40' }} >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to='/panel/panelvideo' className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 fw-bolder d-none d-sm-inline">Panelist Dashboard</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {/* <li>
                        <Link to="/" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li> */}
                    <li>
                        <Link to="/panel/panelpro" className="nav-link px-0 align-middle text-white"onClick={toggleVideoVisibility}>
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to="/panel/view" className="nav-link px-0 align-middle text-white" onClick={toggleVideoVisibility}>
                            <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">View Ideas</span></Link>
                    </li>
                    <li onClick>
                        <a href="#" className="nav-link px-0 align-middle text-white"onClick={toggleVideoVisibility}>
                            <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></a>
                    </li>
                </ul>
                <div className="bottom-text">
        <p><Link to="/" style={{ color: 'white' }}>Back</Link></p>
      </div>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className='p-2 d-flex justify-content-center shadow'>
                <h4><b>Incedo</b></h4>			
            </div>
            <div>
            {videoVisible &&<Panelvideo/>} 
            </div>
           
            <Outlet />
        </div>
    </div>
    
</div>
  )
}

export default Panelist
