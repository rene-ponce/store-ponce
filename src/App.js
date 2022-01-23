import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola mundo" />
    </>
  );
}

export default App;
