import styled from "styled-components";
import { Link } from "react-router-dom";

import logoGrande from "../../assets/logo-grande.png"

export default function Cadastro() {
    return (
        <PaginaDeCadastro>
            <img src={logoGrande} alt="" />
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Entrar</button>
            </div>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </PaginaDeCadastro>
    )
}

const PaginaDeCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
div{
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