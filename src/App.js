
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Playerdata from './components/Playerdata';

function App() {
  return (
    <div className='app_background'>
      <Navbar/>
      <Filter/>
      <Playerdata/>
    </div>
  );
}

export default App;
