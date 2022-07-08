import React, {createContext} from "react"
import {useFetch} from "../hooks/useFetch";

// create a new context
export const CategoryContext = createContext();


// create a new provider
const CategoryProvider = ({ children }) => {

  //const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const url = import.meta.env.VITE_API_URL1

  const { data, error, loading } = useFetch(url)
  const { drinks } = data

  const datos = { drinks, error, loading }

  return (
    <CategoryContext.Provider value={datos}>
      { children }
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
