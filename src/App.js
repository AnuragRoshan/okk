import './App.css';
import Card from './Component/Card';
import ChangeDate from './Component/ChangeDate';
import StartEndDate from './Component/StartEndDate';
import TopPannel from './Component/TopPannel';

function App() {
  return (
    <div className="App">
     <TopPannel/>
     <ChangeDate/>
     <StartEndDate/>
     <Card/>
    </div>
  );
}

export default App;
