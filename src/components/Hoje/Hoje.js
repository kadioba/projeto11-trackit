import styled from "styled-components";
import axios from "axios";
import { UserDataContext } from "../../Contex/UserDataContext";
import { useContext } from "react";
import { useState, useEffect } from 'react';


import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";

export default function Hoje() {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    useEffect(() => {
        console.log(dadosUsuario.token)
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);

        requisicao.then(resposta => {
            console.log(resposta);
        });
    }, []);

    return (
        <>
            <Topo />
            <TelaHoje>
                <h1 data-test="today">Segunda, 17/05</h1>
                <h2 data-test="today-counter">Nenhum hábito concluído ainda</h2>
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
box-sizing: border-box;
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