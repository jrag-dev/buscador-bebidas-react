import React, {useContext} from "react"
import {ModalContext} from "../context/ModalContext";
import {useModal} from "../hooks/useModal"
import Loader from "./Loader";
import Modal from "./Modal";



const Receta = ({ receta }) => {

  const { strDrink, strDrinkThumb, idDrink } = receta;
  const [ isOpenModal, openModalReceta, closeModalReceta ] = useModal();
  const { data, error, loading, idreceta, setIdreceta } = useContext(ModalContext);

  let detalles;

  data.drinks?.forEach(item => {
    detalles = item
  })

  // Muestra y formatea los ingredientes
  const mostrarIngredientes = (detalles) => {
    let ingredientes = [];

    for (let i=1; i< 16; i++) {
        if (detalles[`strIngredient${i}`]) {
            ingredientes.push(
                <li key={detalles[`strIngredient${i}`]}>{ detalles[`strIngredient${i}`] } { detalles[`strMeasure${i}`] }</li>
            )
        }
    }

    return ingredientes;
  }



  return (
    <div className='contenedor-receta'>
      <h3>{strDrink}</h3>
      <img src={strDrinkThumb} alt={strDrink} />
      <button
        className='boton'
        onClick={() => {
          setIdreceta(idDrink)
          openModalReceta()
        }}
      >Ver imagen</button>

      {
        data.drinks && 
          ( 
          <Modal
            isOpen={isOpenModal}
            closeModal={closeModalReceta}
          >
            <h2>{detalles.strDrink}</h2>
            <h3>Instrucciones:</h3>
            <p>
                {detalles.strInstructions}
            </p>
            <img src={detalles.strDrinkThumb} alt={detalles.strDrink} />
            <h3>Ingredientes y cantidades</h3>
            <ul>
              {mostrarIngredientes(detalles)}
            </ul>
          </Modal>
          )
        }
    </div>
  )
}

export default Receta
