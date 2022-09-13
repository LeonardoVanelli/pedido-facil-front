import { Button, Form } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useUser } from "../../hooks/useUser"
import { NavSearch } from "./styles"

function NavBar() {
  const { logout } = useUser()

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pedido Fácil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#ddp">Digitação de Pedido</Nav.Link>
            <Nav.Link href="#cliente">Cliente</Nav.Link>
            <NavDropdown title="Consultas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#consulta/pedidos">
                Pedidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#Consultas/precos">
                Preços
              </NavDropdown.Item>
              <NavDropdown.Item href="#Consultas/resumos">
                Resumos
              </NavDropdown.Item>
              <NavDropdown.Item href="#Consultas/estoque">
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
