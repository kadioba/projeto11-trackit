import styled from "styled-components";
import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";

export default function Historico() {
    return (
        <>
            <Topo />
            <PaginaMenu>
                <TextoHistorico>Histórico</TextoHistorico>
                <HistoricoNaoDisponivel>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoricoNaoDisponivel>
            </PaginaMenu>
            <Menu />
        </>
    )
}

const PaginaMenu = styled.div`
width: 100%;
padding-left: 15px;
padding-right: 15px;
padding-top: 28px ;
margin-top: 10vh;
box-sizing: border-box;
`
const TextoHistorico = styled.h1`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const HistoricoNaoDisponivel = styled.div`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-top: 17px;
`