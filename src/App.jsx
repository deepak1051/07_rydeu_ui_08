import HelpScreen from './components/HelpScreen';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HelpScreen />} path="/help" />
          <Route element={<Homepage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
