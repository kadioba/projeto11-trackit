import styled from "styled-components";
import Topo from "../Topo/Topo";
import Menu from "../Menu/Menu";
import CriacaoHabito from "./CriacaoHabito";
import CardHabito from "./CardHabito";
import { UserDataContext } from "../../Contex/UserDataContext";
import { useContext } from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";

export default function Habitos() {

    const [habitos, setHabitos] = React.useState(false)
    const [criarHabito, setCriarHabito] = React.useState(false)
    console.log(habitos)

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        requisicao.then(resposta => {
            console.log(resposta);
            setHabitos(resposta.data)
        });
    }, []);

    function mostrarCriarHabito() {
        setCriarHabito(true)
    }

    return (
        <>
            <Topo />
            <TelaHabitos>
                <div>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => mostrarCriarHabito()}>+</button>
                </div>
                {criarHabito ? <CriacaoHabito setHabitos={setHabitos} habitos={habitos} /> : ""}
                {habitos ? habitos.map(carta => <CardHabito id={carta.id} conteudo={carta.name} dias={carta.days} setHabitos={setHabitos} habitos={habitos} />) : <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
            </TelaHabitos>
            <Menu />
        </>
    )
}

const TelaHabitos = styled.div`
margin-top: 10vh;
margin-bottom: 10vh;
width: 100vw;
height: 80vh;
background-color: #F2F2F2;
padding: 0px 17px;
padding-top: 28px;
box-sizing: border-box;
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}
button{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4.63636px;
}
h2{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    background-color: #126BA5;
}
`