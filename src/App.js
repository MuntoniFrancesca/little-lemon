import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Main/>
    <Menu/>
    </BrowserRouter>
    </>
  );
}

export default App;
