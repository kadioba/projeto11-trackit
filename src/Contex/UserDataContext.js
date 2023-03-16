import { createContext, useState } from "react";

export const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
    const [dadosUsuario, setDadosUsuario] = useState({});

    return (
        <UserDataContext.Provider value={{ dadosUsuario, setDadosUsuario }}>
            {children}
        </UserDataContext.Provider>
    )
}