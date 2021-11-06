import React, { createContext, useContext } from "react";

const UserContext = createContext({
    user: null,
    setUser: null,
});

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserontext = () => useContext(UserContext);

export { UserProvider, useUserontext };