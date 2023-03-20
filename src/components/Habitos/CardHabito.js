import styled from "styled-components";
import iconeLixo from "../../assets/lixo.png"
import axios from 'axios';
import { useContext } from "react";
import { UserDataContext } from "../../Contex/UserDataContext";

export default function CardHabito(props) {

    const { dadosUsuario, setDadosUsuario } = useContext(UserDataContext)

    const config = {
        headers: {
            "Authorization": `Bearer ${dadosUsuario.token}`
        }
    }

    function deletarHabito() {

        if (window.confirm("Você quer mesmo excluir esse habito?") === true) {
            const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config)

            requisicao.then(resposta => {
                const novoArray = props.habitos.filter(hab => hab.id !== props.id)
                props.setHabitos(novoArray)
            })
        }
    }

    function corLetra(numero) {
        for (let i = 0; i < props.dias.length; i++) {
            if (numero == props.dias[i]) {
                return true
            }
        }
        return false
    }

    return (
        <CartaoHabito data-test="habit-container">
            <TituloELixo>
                <h1 data-test="habit-name">{props.conteudo}</h1>
                <img data-test="habit-delete-btn" src={iconeLixo} alt="" onClick={() => deletarHabito()} />
            </TituloELixo>
            <DiasSemana>
                <BotaoDias data-test="habit-day" corLetra={corLetra(0)}>D</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(1)}>S</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(2)}>T</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(3)}>Q</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(4)}>Q</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(5)}>S</BotaoDias>
                <BotaoDias data-test="habit-day" corLetra={corLetra(6)}>S</BotaoDias>
            </DiasSemana>
        </CartaoHabito>
    )
}

const CartaoHabito = styled.div`
width: 100%;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding: 15px;
box-sizing: border-box;
margin-top: 10px;
display: flex;
flex-direction: column;
`

const TituloELixo = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 8px;
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
img{
    width: 13px;
    height: 15px;
}
`

const DiasSemana = styled.div`
width: 234px;
align-self: flex-start;
`

const BotaoDias = styled.button`
box-sizing: border-box;
width: 30px;
height: 30px;
background: ${props => props.corLetra ? "#DBDBDB" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.corLetra ? "#FFFFFF" : "#DBDBDB"};
margin-right: 4px;
`