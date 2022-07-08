import React, {createContext, useState} from "react"
import {useFetch} from "../hooks/useFetch";


// create a context for modal
export const ModalContext = createContext();


// create a provider 
const ModalProvider = ({ children }) => {

  const [idreceta, setIdreceta] = useState(null);

  let url = idreceta === null ? '' : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

  const { data, error, loading } = useFetch(url);

  const datos = { data, error, loading, idreceta, setIdreceta }

  return (
    <ModalContext.Provider value={datos}>
      { children }
    </ModalContext.Provider>
  )
}

export default ModalProvider;
