import { Lista } from './components/listaTareas'
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #395B64;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: grid;
  place-content: center;
`

const TodoList = styled.div`
  width: 80vw;
  max-width: 720px;
  min-width: 320px;
  min-height: 50vh;
  background-color: #E9F8F9;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 6px 6px 12px #18122B;
  color: white;
  h1 {
    color: #1b1b32;
    font-size: 25px;
    text-align: center;
    margin: 20px 0;
  }
`

function App() {
  return (
    <AppContainer className="aplicacion-tareas">
      <TodoList className='tareas-lista-principal'>
        <h1>Mis Notas</h1>
        <Lista />
      </TodoList>
    </AppContainer>
  );
}

export default App;
