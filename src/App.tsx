import { useState } from 'react';
import * as C from './App.styles';


function App() {

  const [list, setList] = useState([]);

  return (
    <C.Container>
      <C.Header>Lista de Tarefas</C.Header>
    </C.Container>
 
  );
}

export default App;
