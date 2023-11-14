import {} from 'react';
import Cabecalho from './components/Cabecalho';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Cabecalho />
    <Outlet />
    </>
  )
}

export default App
