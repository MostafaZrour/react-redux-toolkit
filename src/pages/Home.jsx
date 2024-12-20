import { useSelector, useDispatch } from 'react-redux'
import { increment , addTodo } from './reducer';

function Home() {
  const dispatch = useDispatch()
  
  // The slice names determine how we access the state
  const count = useSelector((state) => state.counter.value)
  const todos = useSelector((state) => state.todos.items)

  // Redux DevTools will show actions with their prefixed names
  const handleClick = () => {
    dispatch(increment()) // 'counter/increment'
    dispatch(addTodo({ text: 'New Todo' })) // 'todos/addTodo'
  }

  return (
    <div>
      <h1 onClick={() => handleClick()}>Count: {count}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home ;