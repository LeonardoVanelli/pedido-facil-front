import { ReactElement } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { Item } from "../Item"
import { Container, DropDownContent } from "./styles"

interface IProps {
  children: ReactElement
  items: Array<{
    label: string
    onClick?: () => void
  }>
}

function DropDownItem({ children, items }: IProps) {
  return (<Container>
    <Item label="Consultas">
      {children}
      <AiOutlineDown />
    </Item>
    <DropDownContent>
      <div>
        {items.map(item => (
          <span key={item.label} onClick={item.onClick}>{item.label}</span>
        ))}
      </div>
    </DropDownContent>
  </Container>)
}

export { DropDownItem }
