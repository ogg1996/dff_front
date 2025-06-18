import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div>DFF</div>
      <Route path="/userinfo/:username" />
    </div>
  );
}

export default App;
