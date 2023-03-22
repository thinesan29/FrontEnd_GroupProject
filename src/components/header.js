const Header = () => {
    return (
        <div className="header">
            <div className="header-image">
                <img src="https://i.imgur.com/vOnEB29.gif" alt="logo image" height="120"/>
            </div>

            <div className="header-nav">
                <a href="#Home">Home</a>
                <a href="#Contact">Contact</a>
                <a href="#Sellers">Sellers</a>
                <a href="#Login">Login</a>
                <a href="#Cart">Cart</a>
            </div>
            
            <div>
                <input type="search" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Header;