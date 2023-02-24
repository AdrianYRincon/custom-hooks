import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";



const init = () => {
  let lc = null;
  //intenta traer los items del local storage si no hay nada y es null retorna un arreglo vacio
  if(typeof window !== 'undefined'){
    lc = localStorage.getItem('todos')
  }
  return JSON.parse(lc) || [];
}

export const useTodo = () => {


  const [todos, dispatch] = useReducer( todoReducer, [], init)



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) );
    
  }, [todos])
  

  const todosPending = todos.filter( todo => !todo.done).length



  const handleNewTodo = ( todo ) => {

      const action = {
        type: '[TODO] Add Todo',
        payload:todo,
      }

      dispatch( action )

  }

  const handleDeleteTodo = (id) => {

    dispatch({
      type: '[TODO] Remove Todo',
      payload:id,
    });
  }

  const handleToggleTodo = (id) => {
    
    dispatch({
      type: '[TODO] Toggle Todo',
      payload:id,
    });
  }






  return {

    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosPending,
  } ;
}