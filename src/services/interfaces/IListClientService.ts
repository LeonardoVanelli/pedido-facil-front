interface IListClientService {
  id: string
  birthday: Date
  cell_phone_number: string
  created_at: Date
  cell_phone_ddd: string
  document: string
  email: string
  name: string
  phone_ddd: string
  phone_number: string
  store: string
  retail_type: string
  address: {
    cep: string
    city: string
    complement: string
    district: string
    number: string
    street: string
    uf: string
  }
}

export { IListClientService }
