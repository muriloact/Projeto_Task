import  'react'
// import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Nav';
import './Home.css'
import Tarefas from '../components/Tarefas';


function Home() {
  // const navigate = useNavigate();

  return (
    <div className="container-principal-home">
      <NavBar/>
       <div className="flex">
        <div className="homepage">
          <button>Nova Tarefa</button>
        </div>
        <div className="container-tarefas">
          <div className="container-tarefas-concluidas">
            <h2 className="tarefas-concluidas">Tarefas Concluidas</h2>
            <Tarefas/>
          </div>
          <div className="container-tarefas-atrasadas">
            <h2 className="tarefas-pendentes">Tarefas Atrasadas</h2>
            <Tarefas/>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Home;
