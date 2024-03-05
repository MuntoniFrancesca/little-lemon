import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
