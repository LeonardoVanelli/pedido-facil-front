interface ICreateSessionService {
  token: string
  user: {
    id: string
    name: string
    is_admin: boolean
  }
}

export { ICreateSessionService }
