/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from "react"
import { Button, Form, InputGroup, Pagination, Table } from "react-bootstrap"
import { HiOutlineSearch } from "react-icons/hi"
import {
  Container,
  HeaderContainer,
  InputGroupTable,
  PaginationContent
} from "./styles"

interface IProps {
  children: ReactElement | ReactElement[]
  onChangePage: (perPage: number, page: number, search: string | null) => void
  onSearch?: (search: string | null) => Promise<void>
  currentPage: number
  lastPage: number
  onClickAddNewButton?: () => void
}

function PaginationTable({
  children,
  onChangePage,
  lastPage,
  currentPage,
  onClickAddNewButton,
  onSearch
}: IProps) {
  const [searchValue, setSearchValue] = useState<string | null>(null)
  const [clickEnterToSearch, setClickEnterToSearch] = useState(false)
  const perPage = 10

  const renderPaginationItems = () => {
    const minPage = currentPage > 1 ? currentPage - 1 : 1
    const maxPage = minPage + 4 >= lastPage ? lastPage + 1 : minPage + 4

    const pageItemsRender = []
    for (let index = minPage; index < maxPage; index++) {
      pageItemsRender.push(index)
    }

    const setOnClickPageChange = (pageItem: number) => {
      if (pageItem === currentPage) { return undefined }
      return onChangePage(perPage, pageItem, searchValue)
    }

    return pageItemsRender.map(pageItem => (
      <Pagination.Item
        key={pageItem}
        active={pageItem === currentPage}
        onClick={() => setOnClickPageChange(pageItem)}
      >
        {pageItem}
      </Pagination.Item>
    ))
  }

  const handleSearchValue = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      let searchValueEvent: string | null = e.currentTarget.value
      if (searchValueEvent === "") {
        searchValueEvent = null
      }
      setSearchValue(searchValueEvent)
      if (onSearch) {
        onSearch(searchValueEvent)
      }
      setClickEnterToSearch(false)
    }
  }

  const showNextAndLastPage = currentPage !== lastPage
  const showPrevAndFirstPage = currentPage !== 1

  return (
    <Container>
      <HeaderContainer>
        <div>
          {onSearch && (
            <InputGroupTable
              className="mb-3"
              $clickEnterToSearch={clickEnterToSearch}
            >
              <InputGroup.Text id="basic-addon1">
                <HiOutlineSearch size={22} color="var(--gray-3)"/>
              </InputGroup.Text>
              <Form.Control
                size="lg"
                placeholder="Pesquise por nome, CPF ou código do cliente"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  if (e.currentTarget.value === "" && searchValue === null) {
                    setClickEnterToSearch(false)
                  } else {
                    setClickEnterToSearch(true)
                  }
                }}
                onKeyUp={e => handleSearchValue(e)}
              />
            </InputGroupTable>
          )}
          <Form.Text className="text-muted" hidden={!clickEnterToSearch}>
            Pressione enter para pesquisar
          </Form.Text>
        </div>
        {onClickAddNewButton && (
          <Button onClick={onClickAddNewButton}>Cadastrar Cliente</Button>
        )}
      </HeaderContainer>
      <Table hover>
        {children}
      </Table>
      <PaginationContent>
        <Pagination size="sm">
          <Pagination.Prev
            disabled={!showPrevAndFirstPage}
            onClick={() => onChangePage(perPage, currentPage - 1, searchValue)}
          />
          <Pagination.Item
            disabled={!showPrevAndFirstPage}
            onClick={() => onChangePage(perPage, 1, searchValue)}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis disabled/>

          {renderPaginationItems()}

          <Pagination.Ellipsis disabled/>
          <Pagination.Item
            disabled={!showNextAndLastPage}
            onClick={() => onChangePage(perPage, lastPage, searchValue)}
          >
            {lastPage}
          </Pagination.Item>
          <Pagination.Next
            disabled={!showNextAndLastPage}
            onClick={() => onChangePage(perPage, currentPage + 1, searchValue)}
          />
        </Pagination>
      </PaginationContent>
    </Container>
  )
}

export { PaginationTable }
