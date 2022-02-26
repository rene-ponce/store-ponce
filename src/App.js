import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola mundo" />} />
        <Route path="/productos/:categoryID" element={<ItemListContainer greeting="Hola mundo" />} />
        <Route path="/detail/:itemID" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
