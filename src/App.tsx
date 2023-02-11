import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import{ ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


/*tuotrial -Bonieky Lacerda -  https://www.youtube.com/watch?v=95sAtAareR8 */

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

       <AddArea />

      {list.map((item, index)=>(
        <ListItem key={index} item={item}/>
      ))}

      </C.Area>
    </C.Container>
 
  );
}

export default App;
