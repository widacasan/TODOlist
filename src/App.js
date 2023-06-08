import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de introduccion a React.js', completed: false},
  { text: 'Cortar cebolla', completed: false},
  { text: 'Cortar cebolla', completed: true},
]

function App() {
  return (
    <>
          
      <TodoCounter completed={16} total= {25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.completed}/>
        ))}

      </TodoList> 
      
      <CreateTodoButton />

    </>
  );
}



export default App;
