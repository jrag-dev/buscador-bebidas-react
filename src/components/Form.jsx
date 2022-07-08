import React, {useContext, useState} from "react"
import {CategoryContext} from "../context/CategoryContext";
import {RecetasContext} from "../context/RecetasContext";



const initialBusqueda = {
  ingrediente: '',
  categoria: '',
}

const Form = () => {

  const { drinks } = useContext(CategoryContext);
  const { errorForm, setErrorForm, setSearch } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState(initialBusqueda);
  const { ingrediente, categoria } = busqueda

  const handleChange = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleBlur = e => {
    handleChange(e)

    if (
      ingrediente.trim() === '' || categoria.trim() === ''
    ) {
      setErrorForm(true)
      return;
    }

    setErrorForm(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (ingrediente.trim() === '' || categoria.trim() === '')  {
      return;
    }

    setSearch(busqueda)
    setBusqueda(initialBusqueda)
  }
  
  return (
    <form 
      className='form contenedor'
      onSubmit={handleSubmit}
    >
      <h2>Busca bebidas por Categoria o Ingrediente</h2>

      <div className='inputs'>
        <input
          type='text'
          name='ingrediente'
          className={`input ${errorForm ? 'error' : null}`}
          placeholder='Buscar por Ingrediente'
          onChange={handleChange}
          onBlur={handleBlur}
          value={ingrediente}
        />
        <select
          name='categoria'
          className={`select ${errorForm ? 'error' : null}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={categoria}
        >
          <option value="">--Selecciona por Categoria--</option>
          {
            drinks?.map(item => (
              <option
                key={item.strCategory}
                value={item.strCategory}
              >{item.strCategory}</option>
            ))
          }
        </select>
        <input type='submit' className='boton' value='Buscar'/>
      </div>
    </form>
  )
}

export default Form
