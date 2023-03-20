import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import React from 'react'
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'



import logoGrande from "../../assets/logo-grande.png"

export default function Cadastro() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [foto, setFoto] = React.useState("");
    const [cadastrar, setCadastrar] = React.useState(false)

    const navigate = useNavigate()

    function cadastrarUsuario(event) {

        event.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: senha
        })

        setCadastrar(true);

        requisicao.then(resposta => {
            navigate("/")
        })

        requisicao.catch(resposta => {

            setCadastrar(false)
            alert("Erro ao criar conta, tente novamente")
        })

    }

    return (
        <PaginaDeCadastro>
            <img src={logoGrande} alt="" />
            <div>
                <form onSubmit={cadastrarUsuario}>
                    <input data-test="email-input" disabled={cadastrar} placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input data-test="password-input" disabled={cadastrar} placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                    <input data-test="user-name-input" disabled={cadastrar} placeholder="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    <input data-test="user-image-input" disabled={cadastrar} placeholder="foto" type="url" value={foto} onChange={e => setFoto(e.target.value)} />
                    <button data-test="signup-btn" disabled={cadastrar} type="submit" >{cadastrar ? <ThreeDots
                        text
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Cadastrar"}</button>
                </form>
            </div>
            <Link data-test="login-link" to="/">Já tem uma conta? Faça login!</Link>
        </PaginaDeCadastro >
    )
}

const PaginaDeCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    margin-top: 32px;
    width: 303px;
    height: 249px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
img{
    margin-top: 68px;
    width: 180px;
    height: 178px;
}
input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #DBDBDB;
    box-sizing: border-box;
}
button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: #FFFFFF;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    margin-top: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    text-decoration-line: underline;
    color: #52B6FF;
}
`