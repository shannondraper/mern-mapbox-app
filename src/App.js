import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import './styles/App.css';

import { MapLocationContextProvider, MapLocationContext } from './components/MapLocationContext'

function App() {


  return (
    <div className="App">
        <Header />
        <div className='content'>
          <Sidebar />
          <Map />
        </div>
    </div>
  );
}

export default App;
