import React, { useState, createContext } from "react";

const DataContext = createContext();

function LoginCache({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [userData, setUserData] = useState({});

  return (
    <DataContext.Provider
      value={{
        isLogged,
        setIsLogged,
        isAdmin,
        setIsAdmin,
        userData,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { LoginCache, DataContext };
