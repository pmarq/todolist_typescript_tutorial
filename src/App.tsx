import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import{ ListItem } from './components/ListItem'


function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: false },
    { id: 2, name: 'Comprar bolo na padaria', done: false },
    {id: 3 , name: 'Comprar leite na padaria', done:false}
  ]);

  return (
    <C.Container>
      <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

       {/* Área de adicionar tarefa*/}

      {list.map((item, index)=>(
        <ListItem key={index} item={item}/>
      ))}

      </C.Area>
    </C.Container>
 
  );
}

export default App;
