import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";

import logoGrande from "../../assets/logo-grande.png"


export default function Login() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [logar, setLogar] = React.useState(false)

    const navigate = useNavigate()

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)
    console.log(dadosUsuario)

    function loginAplicacao(event) {

        event.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: senha
        })

        setLogar(true)

        requisicao.then(resposta => {
            console.log("Sucesso")
            setDadosUsuario(resposta.data)
            navigate("/hoje")
        })

        requisicao.catch(resposta => {
            console.log("Erro")
            console.log(resposta)
            setLogar(false)
            alert("Erro ao logar, tente novamente")
        })

    }

    return (
        <PaginaDeCadastro>
            <img src={logoGrande} alt="" />
            <div>
                <form onSubmit={loginAplicacao}>
                    <input data-test="email-input" disabled={logar} placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input data-test="password-input" disabled={logar} placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                    <button data-test="login-btn" disabled={logar} type="submit" >{logar ? <ThreeDots
                        text
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Entrar"}</button>
                </form>
            </div>
            <Link data-test="signup-link" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </PaginaDeCadastro>
    )
}

const PaginaDeCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    margin-top: 32px;
    width: 303px;
    height: 147px;
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