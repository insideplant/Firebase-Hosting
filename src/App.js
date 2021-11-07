import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container} from 'reactstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodosContextProvider from './contexts/TodosContext';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
