import { createContext, useContext, useState } from "react";

interface TransactionsProviderProps {
    children: React.ReactNode
}

interface IUser {
    id: number;
    name: string;
}

type UserContextData = {
    user: IUser | null;
    login: (user: IUser) => void;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: TransactionsProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);

    const login = (user: IUser) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    );
};


export function useUser() {
    const context = useContext(UserContext)

    return context;
}