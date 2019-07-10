import React from 'react'

const Header = ()=>{
    return (
        <header>
            <div className="container list-navbar-items">
                <div className="logo">
                    <h1>BBoks</h1>
                </div>
                <div className="admin-login">
                    <a  href="/" style={{float:'right', marginTop:-20}}>Admin Login</a>
                </div>
            </div>
        </header>
    )
}

export default Header