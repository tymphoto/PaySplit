import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { userLogoutThunk } from '../../redux/actions/AuthAction';

function NavbarBootstrap() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderLogout = () => <button className="btn btn-danger" type="button" onClick={() => dispatch(userLogoutThunk())} variant="secondary">Logout</button>;

  const renderLogin = () => <Nav.Link as={Link} to="/auth">Login</Nav.Link>;

  console.log(user);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pay Split
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Меню
              </Nav.Link>
              <Nav.Link as={Link} to="/newCheck">
                Новый чек
              </Nav.Link>
              <Nav.Link as={Link} to="/lk">
                Личный кабинет
              </Nav.Link>
              <Nav.Link as={Link} to="/friends">
                Собутыльники
              </Nav.Link>
              {user ? null : renderLogin()}
            </Nav>
            {user ? renderLogout() : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBootstrap;
