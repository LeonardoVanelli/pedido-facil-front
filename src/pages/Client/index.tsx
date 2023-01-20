import { FiEdit2, FiEye, FiUser } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { PaginationTable } from "../../components/PaginationTable"
import { ActionItem } from "../../components/PaginationTable/ActionItem"
import {
  ActionIconContainer
}
  from "../../components/PaginationTable/ActionItem/styles"
import { Content, TableHead, ContentTitle } from "./styles"

function Client() {
  const navigate = useNavigate()

  return <Content>
    <ContentTitle>
      <FiUser />
      <h1>Clientes</h1>
    </ContentTitle>
    <PaginationTable
      onChangePage={(
        perPage: number,
        page: number,
        search: string | null
      ) => { console.log({ perPage, page, search }) }}
      currentPage={30}
      lastPage={30}
      onClickAddNewButton={() => navigate("/client/create")}
    >
      <TableHead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </TableHead>
      <tbody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(t => (
          <tr key={t}>
            <td>23</td>
            <td>Marco Barbosa de Lis</td>
            <td>657.163.730-89</td>
            <td>marco@gmail.com</td>
            <ActionIconContainer>
              <ActionItem
                icon={FiEdit2}
                label="Editar"
                onClick={() => navigate(`/client/${t}/edit`)}
              />
              <ActionItem
                icon={FiEye}
                label="Visualizar"
                onClick={() => navigate(`/client/${t}/view`)}
              />
            </ActionIconContainer>
          </tr>
        ))}
      </tbody>
    </PaginationTable>
  </Content>
}

export { Client }
