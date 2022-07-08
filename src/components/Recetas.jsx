import React, {useContext} from "react"
import {RecetasContext} from "../context/RecetasContext"
import Loader from "./Loader";
import Receta from "./Receta";




const Recetas = () => {

  const { data, error, loading } = useContext(RecetasContext);

  return (
    <article className="contenedor-recetas contenedor">
      {
        loading 
          ? (
            <div className="center">
              <Loader />
            </div>
          )
          : (
              data.drinks &&
              data.drinks.map(item => (
                <Receta
                  key={item.idDrink}
                  receta={item}
                />
              ))
          )
      }
    </article>
  )
}

export default Recetas
