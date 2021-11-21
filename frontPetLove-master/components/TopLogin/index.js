import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const TopLogin = () =>(
<div className="container">
  
    <div className="row">
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-4">
            <Image src="/logo.png" width={169} height={91} />
          </div>
          <div className="col-sm-8">
            <Nav className="topnav">
              <NavItem>
                <NavLink className="nav" href="/" >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="/quemsomos">Quem somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav" href="/cuidados">Pet Care</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="nav" href="/Contato">Contato</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div >
    </div>
    <div className="col-sm-4" >
        {' '}
    </div>
  </div>

</div>
);

export default TopLogin;