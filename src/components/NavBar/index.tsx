import { Button, Form, Image } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import { NavSearch } from "./styles"
import logoWhite from "../../assets/logo-white.png"

function NavBar() {
  const { logout } = useUser()

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="dashboard">
          <Image src={logoWhite} alt="Logo" width={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="dashboard">Menu</Nav.Link>
            <Nav.Link as={Link} to="order">
              Digitação de Pedido
            </Nav.Link>
            <Nav.Link as={Link} to="client">Cliente</Nav.Link>
            <NavDropdown title="Consultas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#consulta/pedidos">
                Pedidos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#Consultas/precos">
                Preços
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#Consultas/resumos">
                Resumos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#Consultas/estoque">
                Estoques
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={logout}>Sair</Nav.Link>
          </Nav>
          <NavSearch>
            <Form.Control
              aria-label="First name"
              placeholder="O que você está procurando?"
            />
            <Button variant="primary">Pesquisar</Button>
          </NavSearch>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavBar }
