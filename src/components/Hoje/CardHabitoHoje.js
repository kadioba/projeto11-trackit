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

    const feito = props.feito

    function marcarHabito() {
        const body = {}

        if (props.feito) {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`, body, config);

            requisicao.then(resposta => {
                props.setHabitoAtualizado([...props.habitoAtualizado, props.id])
            })
        }

        else {
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`, body, config);

            requisicao.then(resposta => {
                console.log(resposta)
                props.setHabitoAtualizado([...props.habitoAtualizado, props.id])

            })

            requisicao.catch(resposta => {
                console.log("erro")
                console.log(resposta)
            })

        }
    }

    function streak() {
        if (props.sequencia === props.sequenciaMax) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <CardHoje data-test="today-habit-container">
            <DadosHabito>
                <h1 data-test="today-habit-name">{props.nome}</h1>
                <SequenciaHabito feito={feito} data-test="today-habit-sequence">Sequência atual: <span>{props.sequencia} dias</span></SequenciaHabito>
                <RecordeDeSequencia data-test="today-habit-record" streak={streak()}>Seu recorde: <span>{props.sequenciaMax} dias</span></RecordeDeSequencia>
            </DadosHabito>
            <CheckDia data-test="today-habit-check-btn" feito={props.feito} onClick={() => marcarHabito()}>
                <img src={check} alt="" />
            </CheckDia>
        </CardHoje>

    )
}

const CardHoje = styled.div`
width: 100%;
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
h1{
    max-width: 60vw;;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 15px;
}
`

const SequenciaHabito = styled.h2`
max-width: 60vw;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 12.976px;
line-height: 6px;
color: #666666;
margin-bottom: 10px;
span{
    color: ${props => props.feito ? "#8FC549" : "#666666"};
}
`

const RecordeDeSequencia = styled.h2`
max-width: 60vw;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 12.976px;
line-height: 6px;
color: #666666;
span{
    color: ${props => props.streak ? "#8FC549" : "#666666"};
}
`