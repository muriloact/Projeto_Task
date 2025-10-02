import { useState } from "react";
import './TarefaCard.css'

function TarefaCard({ titulo, inicio, fim, status, conteudo }) {
  const [expandido, setExpandido] = useState(false);
  const [editando, setEditando] = useState(false);
  // const [fundoPendente, setBackground] = useState('infomracao-naoiniciado')


  // Estados para edição
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novoInicio, setNovoInicio] = useState(inicio);
  const [novoFim, setNovoFim] = useState(fim);
  const [novoStatus, setNovoStatus] = useState(status);
  const [novoConteudo, setNovoConteudo] = useState(conteudo);

  var tituloTemp = titulo;
  var inicioTemp = inicio;
  var fimTemp = fim;
  var statusTemp = status;
  var conteudoTemp = conteudo;

  // const test = () =>{
  //   novoStatus == 'Concluida'?'infomracao-concluido':novoStatus == 'Pendente'? 'infomracao-pendente':'infomracao-naoiniciado'
  // }

  const cancelar =() => {

      setNovoTitulo(tituloTemp)
      setNovoInicio(inicioTemp)
      setNovoFim(fimTemp)
      setNovoStatus(statusTemp)
      setNovoConteudo(conteudoTemp)

      setEditando(false);
  };

  const salvar = () => {
    // test();
    setEditando(false);
  };

  return (
    <div
      className={novoStatus == 'Concluida'?'infomracao-concluido':novoStatus == 'Pendente'? 'infomracao-pendente':'infomracao-naoiniciado'}
      onClick={() => setExpandido(!expandido)}
    >
      {!editando ? (
        <>
          <h4 className="titulo-tarefas">{novoTitulo}</h4>
          <p className="data-tarefa-inicio">{novoInicio}</p>
          <p className="data-tarefa-final">{novoFim}</p>
          <p className="status-tarefa">{novoStatus}</p>
          <p className="conteudo-tarefa">{novoConteudo}</p>

          {expandido && (
            <button className="btn-editar-tarefa" onClick={(e) => {e.stopPropagation(); /* não fecha o card*/ setEditando(true);}}>Editar</button>
            )}
        </>
      ) : (
        <div>
          <input
            type="text"
            required
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
          <input
            type="text"
            required
            value={novoInicio}
            onChange={(e) => setNovoInicio(e.target.value)}
          />
          <input
            type="text"
            required
            value={novoFim}
            onChange={(e) => setNovoFim(e.target.value)}
          />
          <select name="status" id="status" value={novoStatus} onChange={(e) =>setNovoStatus(e.target.value)}>
            <option value="Concluida">Concuída</option>
            <option value="Pendente">Pendente</option>
            <option value="Nao Iniciada">Não Iniciada</option>
          </select>
          <textarea
            required
            value={novoConteudo}
            onChange={(e) => setNovoConteudo(e.target.value)}
          />

          <button className="btn-salvar" onClick={salvar}>Salvar</button>
          <button className="btn-cancelar" onClick={cancelar/*() => setEditando(false)*/}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default TarefaCard;
