import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      <Container>
        <a className="navbar-brand" href="/" variant='dark'>ProShop</a>
      </Container>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/cart"> <i className="fas fa-shopping-cart"></i> Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login"><i className="fas fa-user"></i>Sign In</a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
     
    </div>
  </div>
</nav>
        </header>
    )
}

export default Header
