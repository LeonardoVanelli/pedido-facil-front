import { Container } from "./styles"

interface IProps {
  children: React.ReactElement | React.ReactElement[]
}

function RightDiv({ children }: IProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export { RightDiv }
