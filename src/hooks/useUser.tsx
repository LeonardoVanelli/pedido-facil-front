import { createContext, useContext, useEffect, useState } from "react"

interface TransactionsProviderProps {
  children: React.ReactNode
}

interface IUser {
  id: number
  name: string
}

interface UserContextData {
  user: IUser | null
  login: (user: IUser) => void
  logout: () => void
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const USER_STORAGE_KEY = "user"

export function UserProvider({ children }: TransactionsProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const userStorage = localStorage.getItem(USER_STORAGE_KEY)
    if (userStorage) {
      setUser(JSON.parse(userStorage))
    }
  }, [])

  const login = (user: IUser) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem(USER_STORAGE_KEY)
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}
