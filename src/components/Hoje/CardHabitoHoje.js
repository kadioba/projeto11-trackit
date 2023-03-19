import styled from "styled-components";
import check from "../../assets/check.png"
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";

export default function CardaHabitoHoje(props) {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)


    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    function marcarHabito() {
        const body = {}

        if (props.feito) {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`, body, config);

            requisicao.then(resposta => props.setHabitoAtualizado(props.id))
        }

        else {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`, body, config);

            requisicao.then(resposta => props.setHabitoAtualizado(props.id))
        }
    }

    return (
        <CardHoje data-test="today-habit-container">
            <DadosHabito>
                <h1 data-test="today-habit-name">{props.nome}</h1>
                <h2 data-test="today-habit-sequence">Sequência atual: {props.sequencia} dias</h2>
                <h2 data-test="today-habit-record">Seu recorde: {props.sequenciaMax} dias</h2>
            </DadosHabito>
            <CheckDia data-test="today-habit-check-btn" feito={props.feito} onClick={() => marcarHabito()}>
                <img src={check} alt="" />
            </CheckDia>
        </CardHoje>

    )
}

const CardHoje = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
padding: 13px;
margin-bottom: 10px;
`

const CheckDia = styled.button`
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background-color: ${props => props.feito ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
img{
    width: 35px;
    height: 28px;
}
`

const DadosHabito = styled.div`
width: 231px;
height: 64px;
h1{
    width: 208px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
h2{
    width: 146px;
    height: 32px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 12.976px;
    line-height: 6px;
    color: #666666;
}
`