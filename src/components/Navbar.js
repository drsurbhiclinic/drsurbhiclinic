function Navbar() {
    const title = window.location.pathname
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
            <div className="logo">
                <h1 className="text-light"><a href="/">Dr Surbhi Rustagi</a></h1>
            </div>
            <nav id="navbar" className="navbar">
                <ul>
                <li><a className={ title === "/home" || title === "/"? "active": ""} href="/">Home</a></li>
                <li><a className={ title === "/about"? "active": ""} href="/about">About</a></li>
                <li><a className={ title === "/services"? "active": ""} href="/services">Services</a></li>
                <li><a className={ title === "/stories"? "active": ""} href="/stories">Patient Stories</a></li>
                <li><a className={ title === "/contact"? "active": ""}href="/contact">Contact Us</a></li>
                <li><a className="getstarted" href="/about">Get Started</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            </div>
        </header>
    )
}

export default Navbar;