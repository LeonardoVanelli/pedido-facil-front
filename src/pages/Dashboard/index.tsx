import { Image } from "react-bootstrap"
import logo from "../../assets/pedido-facil-horiz.png"
import {
  FiDownloadCloud,
  FiMenu,
  FiShoppingBag,
  FiUserPlus
} from "react-icons/fi"
import { GoFile } from "react-icons/go"
import { MdOutlineCancel } from "react-icons/md"

import {
  Container,
  ImageContainer,
  Items,
  ItemColumn
} from "./styles"
import { DropDownItem } from "./DropDownItem"
import { Item } from "./Item"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const dropDownItems = [
    { label: "Pedidos" },
    { label: "Preços" },
    { label: "Resumos" },
    { label: "Estoques" }
  ]

  return <Container>
    <ImageContainer>
      <Image src={logo} alt="Logo" fluid/>
    </ImageContainer>
    <Items>
      <ItemColumn>
        <Item onClick={() => navigate("/order")} label="Novo Pedido">
          <FiShoppingBag/>
        </Item>
        <DropDownItem items={dropDownItems}>
          <GoFile />
        </DropDownItem>
      </ItemColumn>
      <ItemColumn>
        <Item onClick={() => navigate("/client")} label="Clientes">
          <FiUserPlus />
        </Item>
        <Item label="Pedidos não Finalizados">
          <MdOutlineCancel />
        </Item>
      </ItemColumn>
      <ItemColumn>
        <Item label="Lista da Vez">
          <FiMenu />
        </Item>
        <Item label="Atualizar Sistema">
          <FiDownloadCloud />
        </Item>
      </ItemColumn>
    </Items>
  </Container>
}

export { Dashboard }
