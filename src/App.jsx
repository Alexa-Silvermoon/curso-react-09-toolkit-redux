import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import './App.css';
import { increment, decrement, incrementByTwo } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>

        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>

        <button onClick={ () => dispatch( incrementByTwo(2) ) }>
          Increment by 2
        </button>
       
      </div>
      
    </div>
  )
}

export default App

// Configurar store y slices https://www.udemy.com/course/react-cero-experto/learn/lecture/32219342#questions
// usar valores del store y el dispatch https://www.udemy.com/course/react-cero-experto/learn/lecture/32219464#questions
// ejemplos https://redux-toolkit.js.org/tutorials/quick-start
// decrement e increment https://www.udemy.com/course/react-cero-experto/learn/lecture/32219508?start=15#questions
