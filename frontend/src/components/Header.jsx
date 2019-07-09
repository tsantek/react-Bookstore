import React from 'react'

const Header = ()=>{
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <ul className="list-navbar-items d-flex align-items-center">
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>FAOs</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                          <p className="phone-header"><i class="fas fa-phone"></i> + 480 444 4444</p>  
                    </div>

                    <div className="col-md-4 d-flex align-items-center">
                        <ul className="list-navbar-items d-flex align-items-center">
                            <li>Wish List</li>
                            <li>Admin Login</li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header