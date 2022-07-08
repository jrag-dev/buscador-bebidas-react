
import './styles/components/app.css';
import Form from './components/Form'
import Header from './components/Header'

import CategoryProvider from './context/CategoryContext';
import RecetasProvider from './context/RecetasContext';
import Recetas from './components/Recetas';
import ModalProvider from './context/ModalContext';


function App() {

  return (
    <RecetasProvider>
      <CategoryProvider>
        <ModalProvider>
          <Header/>
          <Form/>
          <Recetas/>
        </ModalProvider>
      </CategoryProvider>
    </RecetasProvider>
  )
}

export default App
