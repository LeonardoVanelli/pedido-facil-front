import logo from "../../assets/pedido-facil-horiz.png"
import { Button, Form, Container, Row, Col, Image } from "react-bootstrap"

import { Content } from "./styles"
import { useFormik } from "formik"
import { Input } from "../../components/Input"
import { Yup } from "../../helpers/yup"
import { useUser } from "../../hooks/useUser"
import { toastError, toastSuccess } from "../../helpers/toast"
import { createSessionService } from "../../services"

const initialValues = {
  email: "",
  password: ""
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Usuário"),
  password: Yup.string().label("Senha")
})

function Login () {
  const { login } = useUser()

  const formik = useFormik({
    initialValues,
    validationSchema,
    isInitialValid: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { email, password } = values

      try {
        const session = await createSessionService.execute(email, password)
        const { id, name } = session.user

        login({ id, name })
        toastSuccess("Login efetuado com sucesso")
      } catch (error) {
        toastError("Login ou senha inválido")
      }
    }
  })

  return (
    <Content>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} lg={4} xl={4}>
            <Image src={logo} alt="Logo" fluid/>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 50 }}>
          <Col md={4} lg={4} xl={4}>
            <Form
              onSubmit={formik.handleSubmit}
              validated={formik.isValidating && formik.isValid}
            >
              <Input
                id="email"
                label="Usuário"
                onChange={formik.handleChange}
                value={formik.values.email}
                isValid={formik.touched.email && !formik.errors.email}
                errorMessage={formik.errors.email}
                variant="login"
              />

              <Input
                id="password"
                label="Senha"
                type="password"
                placeholder="Digite Aqui"
                onChange={formik.handleChange}
                value={formik.values.password}
                isValid={formik.touched.password && !formik.errors.password}
                errorMessage={formik.errors.password}
                variant="login"
              />

              <Row
                className="justify-content-md-center"
                style={{ marginTop: 58 }}
              >
                <Col md="auto">
                  <Button
                    style={{
                      paddingLeft: 50,
                      paddingRight: 50,
                      paddingTop: 15,
                      paddingBottom: 15
                    }}
                    variant="primary"
                    size="lg"
                    type="submit"
                  >
                    Entrar
                  </Button>
                </Col>
              </Row>

            </Form>
          </Col>
        </Row>

      </Container>
    </Content>
  )
}

export { Login }
