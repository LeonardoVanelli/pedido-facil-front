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

function Dashboard() {
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
        <Item>
          <FiShoppingBag />
        </Item>
        <DropDownItem items={dropDownItems}>
          <GoFile />
        </DropDownItem>
      </ItemColumn>
      <ItemColumn>
        <Item>
          <FiUserPlus />
        </Item>
        <Item>
          <MdOutlineCancel />
        </Item>
      </ItemColumn>
      <ItemColumn>
        <Item>
          <FiMenu />
        </Item>
        <Item>
          <FiDownloadCloud />
        </Item>
      </ItemColumn>
    </Items>
  </Container>
}

export { Dashboard }
