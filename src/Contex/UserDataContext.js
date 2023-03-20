import { createContext, useState } from "react";

export const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
    const [dadosUsuario, setDadosUsuario] = useState({});
    const [habitosCompletos, setHabitosCompletos] = useState({});
    const [habitoEmCriacao, setHabitoEmCriacao] = useState({});

    return (
        <UserDataContext.Provider value={{ dadosUsuario, setDadosUsuario, habitosCompletos, setHabitosCompletos, habitoEmCriacao, setHabitoEmCriacao }}>
            {children}
        </UserDataContext.Provider>
    )
}