import logo from "../logo.svg";

function Nav() {
    return (
        <nav>
            <ul className ="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
  }

  function Header() {
    return (
      <header className="topHead">
        <nav>
            {/* <img src="logo512.png" alt="logo react" width="40px"></img> */}
            <img src={logo} className="App-logo" alt="logo" />
            <Nav/>
        </nav>
      </header>
    )
  }

  export default Header