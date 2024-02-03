import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
         <ItemListContainer  greeting={'Bienvenidos'}/>
        {/* <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>*/}
       <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 Not FOUND</h1>}/>
       </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
