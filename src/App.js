import './App.css';
import Skeleton from './components/Skeleton/Skeleton';

function App() {
    if(!localStorage.getItem('bought')) {
        localStorage.setItem('bought', '[]')
    }
  return (
    <div className="App">
        <Skeleton />
    </div>
  );
}

export default App;
