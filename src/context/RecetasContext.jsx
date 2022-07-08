import React from "react"
import {createContext, useState} from "react";
import {useFetch} from "../hooks/useFetch";

// create a context for recetas
export const RecetasContext = createContext();


// create a provider for recetas
const RecetasProvider = ({ children }) => {

  const [search, setSearch] = useState({
    ingrediente: '',
    categoria: '',
  })
  const [errorForm, setErrorForm] = useState(false)

  const { ingrediente, categoria } = search;

  const url = (ingrediente === '' || categoria === '') ? '' : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`

  const { data, error, loading } = useFetch(url)

  const datos = { data, error, loading, errorForm, setErrorForm, setSearch }

  return (
    <RecetasContext.Provider value={datos}>
      { children }
    </RecetasContext.Provider>
  )
}

export default RecetasProvider
