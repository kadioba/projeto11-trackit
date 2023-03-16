import styled from "styled-components";


import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";

export default function Hoje() {
    return (
        <>
            <Topo />
            <TelaHoje>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </TelaHoje>


            <Menu />
        </>
    )
}

const TelaHoje = styled.div`
margin-top: 10vh;
margin-bottom: 10vh;
width: 100vw;
height: 80vh;
background-color: #F2F2F2;
padding: 0px 17px;
padding-top: 28px;
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
    line-height: 29px;
}
h2{
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
color: #BABABA;
line-height: 22px;

}
`

const Habito = styled.div`
width: 90vw;
height: 97px;
background-color: #FFFFFF;
`