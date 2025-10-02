import { useState } from 'react'
import ImgLogo from '../../../public/logo_tarefas.svg'
import { useNavigate } from 'react-router-dom';
import './Login.css'
// import connection from '../../../../servidor/main.cjs'


function Login() {

    const navigate = useNavigate();

//     const [usuario_data, setTarefas] = useState([]);

//     useEffect(() => {
//     fetch("http://localhost:5000/api/tarefas")
//       .then(res => res.json())
//       .then(data => setTarefas(data))
//       .catch(err => console.error("Erro ao buscar tarefas:", err));
//   }, []);

    const [usuario,setUsuario] = useState({
        nomeCompleto: "",
        emailUsuario: "",
        senhaUsuario: "",
        senhaConfirmada: false
    })
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirma_senha,setConfirma_Senha] = useState('')

    // Pega os usuários já salvos no localStorage
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];


    const handleChange = (e) =>{
        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            if(validaSenha(confirma_senha.target.value,usuario.senhaUsuario) === true){

                usuario.senhaConfirmada = true;

                // Adiciona o novo usuário ao array
                usuariosSalvos.push(usuario);
            
                // Salva de volta no localStorage
                localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

                alert(`Usuário ${usuario.nomeCompleto} salvo com sucesso!`);

            }
        }catch(Error){
            console.log(Error,"Não foi salvo davido ao erro");
        }

     };

    console.log(usuarios);

    //Funções 

    function validaSenha(confirmacao,senha){
        try{
            if(confirmacao == senha){
                return true
            }
            else{
                return alert('As senhas estão diferentes');
            }
        }catch(erro){
            console.log(erro, 'deu errado e esta no catch')
        }
    }

    function validarLogin(e) {
        e.preventDefault();

        try {
            email == usuario.emailUsuario && 
            senha == usuario.senhaUsuario ? 
            alert("tudo certo até aqui !") : 
            alert("e-mail ou senha incorretas,tente novamente")
            
            navigate("/home")
        } catch (error) {
            console.log(error, 'deu esse erro')
        }
    }
    
    return (
        <>
            <div className="container-principal">
                <div className="flex">
                    <div className="container-img-logo">
                        <img src={ImgLogo} alt="Logo Task" className="logo-task" />
                        <h2>TASK</h2>
                    </div>
                    {isLogin ? (
                        <div className="container-login">
                            <h3>Login</h3>
                            <form action="" className="login" onSubmit={validarLogin}>
                                <input type="email" className="input-email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="input-senha" placeholder='Senha' onChange={(e) => setSenha(e.target.value)} />
                                <div className="container-btn">
                                    <input type="submit" className="btn-login" value='Entrar' />
                                </div>
                            </form>
                            <p>Se não possui cadastro <a href="/" className="ativa-login" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Clique aqui!</a></p>
                        </div>
                    ) : (
                        <div className="container-cadastro">
                            <h3>Cadastro</h3>
                            <form action="" className="cadastro" >
                                <input type="text" className="input-nome completo" name='nomeCompleto' placeholder='Nome completo' onChange={handleChange} required />
                                <input type="email" className="input-email cadastro" name='emailUsuario' placeholder='E-mail' onChange={handleChange} required />
                                <input type="password" className="input-senha cadastro" name='senhaUsuario' placeholder='Senha' onChange={handleChange} required />
                                <input type="password" className="input-senha confirmacao" placeholder='Confirme a senha'  onChange={setConfirma_Senha} required />
                                <div className="container-btn">
                                    <input type="submit"  className="btn-login" value='Cadastrar' onClick={handleSubmit}/>
                                </div>
                            </form>
                            <p>Se já possui cadastro
                                <a
                                    href="/"
                                    className="ativa-login"
                                    onClick={(e) => {
                                        e.preventDefault;
                                        setIsLogin(true)
                                    }}> Login!
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Login