import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function Menu() {

    const navigate = useNavigate()

    function direcionarHoje() {
        navigate("/hoje")
    }

    return (
        <BarraMenu data-test="menu">
            <Link to="/habitos">Hábitos</Link>
            <button data-test="today-link" onClick={() => direcionarHoje()}>Hoje</button>
            <Link to="/historico">Histórico</Link>
        </BarraMenu>
    )
}

const BarraMenu = styled.div`
margin: 0 auto;
width: 375px;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
background-color: red;
a{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
    background-color: red;
}
button{
    width: 91px;
    height: 91px;
    background: #52B6FF;
    margin-bottom: 40px;
    border-radius: 50px;
    border: none;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}
`
