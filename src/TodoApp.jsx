import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis"

export const TodoApp = () => {

    /* const { data: todos = [], isLoading } = useGetTodosQuery();
    // console.log( data, isLoading );
    console.log( todos ); */

    const [ todoId, setTodoId ] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    // console.log( todo );

    const nextTodo = () => {

        setTodoId( todoId + 1 );

    }

    const prevTodo = () => {

        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );

    }

  return (

    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>cargando... { isLoading? 'True' : 'False' } </h4>

        <pre>{ JSON.stringify( todo ) }</pre>

        {/* <ul>
            { todos.map( todo => (

                <li key={ todo.id }>
                    <strong>{ todo.completed? 'Completado' : 'Pendiente' } </strong>
                    { todo.title }
                </li>
            ))}
        </ul> */}

        <button
        className="btn btn-primary me-1" // margin-end, margen al lado derecho
        onClick={ prevTodo }>
            Previo Todo
        </button>

        <button
        className="btn btn-primary ms-1" // margin-start, margen al lado izquierdo
        onClick={ nextTodo}>
            Siguiente Todo
        </button>
    </>
  )

}

// consumir API JSON Placeholder mediante custom hook https://www.udemy.com/course/react-cero-experto/learn/lecture/32220212#questions
// obtener un todo por id https://www.udemy.com/course/react-cero-experto/learn/lecture/32220308?start=15#questions

/* redux en chrome:

userId(pin):1
id(pin):1
title(pin):"delectus aut autem"
completed(pin):false
 */

/* NOTA:
uns ventaja fuerte de usar redux es que muchas cosas van quedando grabadas en el cache de chrome,
esto se traduce en que la app va a dar la sensacion de que es mas veloz,
el cache de redux se puede ver en redux y en network>Fetch/XHR
*/