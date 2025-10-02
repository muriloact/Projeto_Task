//#region Primeira proposta
/*import './Tarefas.css'

function Tarefas(){

    return(
        <> 
            <div className="container-principal-tarefa">
                <div className="flex">
                    <div className="informacaoes">
                        <h4 className='titulo-tarefas'>Aqui fica o titulo da tarefa</h4>
                        <p className='data-tarefa-inicio'>Data inicio</p>
                        <p className='data-tarefa-final'>Data final</p>
                        <p className='status-tarefa'>status da tarefa</p>
                        <p className='conteudo-tarefa'>conteudo da tarefa conadsfasfjhasdfkhbasdfkjhvbasdfjhbasdklubasdflkujbasdflkhbsadfmjhb asddfkjhvbasfkvbasjharf wehbarfuyvbaeruja fnhruiahfnerw </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tarefas
*/
//#endregion

import "./Tarefas.css";
import TarefaCard from "../components/TarefaCard";

function Tarefas() {
  const tarefas = [
    {
      titulo: "Finalizar relatório",
      inicio: "01/09/2025",
      fim: "05/09/2025",
      status: "Concluida",
      conteudo: "Relatório financeiro do trimestre",
    },
    {
      titulo: "Finalizar relatório",
      inicio: "01/09/2025",
      fim: "05/09/2025",
      status: "Pendente",
      conteudo: "Relatório financeiro do trimestre",
    },
  ];

  

  return (
    <div className="container-principal-tarefa">
      {tarefas.map((tarefa, index) => (
        <TarefaCard
          key={index}
          titulo={tarefa.titulo}
          inicio={tarefa.inicio}
          fim={tarefa.fim}
          status={tarefa.status}
          conteudo={tarefa.conteudo}
        />
      ))}
    </div>
  );
}

export default Tarefas;
