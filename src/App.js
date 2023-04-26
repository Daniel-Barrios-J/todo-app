import { Lista } from './components/listaTareas'
import styled from 'styled-components'

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #395B64;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .repo-container {
    display: flex;
    align-items: center;
    color: aliceblue;
    gap: 12px;
    a {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: smaller;
      color: azure;
    }
  }
`

const TodoList = styled.div`
  width: 80vw;
  max-width: 720px;
  min-width: 320px;
  min-height: 50vh;
  background-color: #E9F8F9;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 2px 2px 16px #18122B;
  color: white;
  border: solid 2px #A1B57D;
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
        <h1>Todo list</h1>
        <Lista />
      </TodoList>
      <div className='repo-container'>
        <a href="https://github.com/Daniel-Barrios-J/creador-memes" target='_blank' rel='noreferrer'>
          Go to the GitHub repository
        </a>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" width={'24px'} />
      </div>
    </AppContainer>
  );
}

export default App;
