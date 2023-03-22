import { Link,Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGif";


/*En el app utilizamos la libreria Wooter para las rutas en path le pasamos el parametro de busqueda de gifs*/
const App = () => {
  return (
    <div className="App">
      <section className="app-content">
        <h1>Escriba en la URL su GIF preferido o Seleccione uno</h1>
        <Route 
        component={ListOfGifs}
        path="/gif/:keyword"
        />

        <Link to="/gif/panda">Pandas</Link>
        <Link to="/gif/morty">Morty</Link>
        <Link to="/gif/rick">Rick</Link>
      </section>
    </div>
  );
};

export default App;
