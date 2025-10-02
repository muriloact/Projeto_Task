import { useState } from 'react'
import ImgLogo from '../../../public/logo_tarefas.svg'
import { useNavigate } from 'react-router-dom';
import './Login.css'



function Login() {

    const navigate = useNavigate();
    
    const [isLogin, setIsLogin] = useState(true);
    
    //Variaveis de Cadastro de Usuário
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    // Variaveis de Login de Usuários

    const [loginEmail,setLoginEmail] = useState('')
    const [loginSenha, setLoginSenha] = useState('')

    const handleCadastro = async (e) => {
        e.preventDefault();

        if(senha !== confirmaSenha){
            alert('As senhas não coincidem !')
            return;
        } 
        try{
            const response = await fetch("http://localhost:5000/api/cadastro-usuario",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({nome, email, senha}),
        })
            const data = await response.json();
            if(response.ok){
                alert(data.message)
                setIsLogin(true)
            }else{
                alert(data.error || 'Erro ao cadastrar')
            }

        } catch (err){
            console.error('Este foi o erro', err)
        }
    }

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ loginEmail, loginSenha })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login realizado com sucesso!");
            console.log("Usuário logado:", data);
            navigate('/home');
        } else {
            alert(data.error || "Erro ao fazer login");
        }
    } catch (err) {
        console.error("Erro no login:", err);
        alert("Falha na conexão com o servidor");
    }
};


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
                            <form action="" className="login" onSubmit={handleLogin}>
                                <input type="email" className="input-email" placeholder='E-mail' onChange={(e) => setLoginEmail(e.target.value)} />
                                <input type="password" className="input-senha" placeholder='Senha' onChange={(e) => setLoginSenha(e.target.value)} />
                                <div className="container-btn">
                                    <input type="submit" className="btn-login" value='Entrar' />
                                </div>
                            </form>
                            <p>Se não possui cadastro <a href="/" className="ativa-login" onClick={(e) => { e.preventDefault(); setIsLogin(false);}}>Clique aqui!</a></p>
                        </div>
                    ) : (
                        <div className="container-cadastro">
                            <h3>Cadastro</h3>
                            <form action="" className="cadastro" 
                                onSubmit={handleCadastro}>
                                <input type="text"
                                    className="input-nome completo"
                                    name='nomeCompleto'
                                    placeholder='Nome completo'
                                    onChange={(e) => setNome(e.target.value)}
                                    required />

                                <input type="email"
                                    className="input-email cadastro"
                                    name='emailUsuario'
                                    placeholder='E-mail'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />

                                <input type="password"
                                    className="input-senha cadastro"
                                    name='senhaUsuario'
                                    placeholder='Senha'
                                    onChange={(e) => setSenha(e.target.value)}
                                    required />

                                <input type="password"
                                    className="input-senha confirmacao"
                                    placeholder='Confirme a senha'
                                    onChange={(e)=> setConfirmaSenha(e.target.value)}
                                    required />

                                <div className="container-btn">
                                    <input type="submit"
                                        className="btn-login"
                                        value='Cadastrar'/>
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