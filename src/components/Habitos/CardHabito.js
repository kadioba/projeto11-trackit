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
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config)

        requisicao.then(resposta => {
            console.log("Excluido com sucesso")
            const novoArray = props.habitos.filter(hab => hab.id !== props.id)
            props.setHabitos(novoArray)
            console.log(props.dias)
        })
    }

    console.log(props.dias)

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
            <div>
                <h1 data-test="habit-name">{props.conteudo}</h1>
                <img data-test="habit-delete-btn" src={iconeLixo} alt="" onClick={() => deletarHabito()} />
            </div>
            <div>
                <button data-test="habit-day" corLetra={corLetra(7)}>D</button>
                <button data-test="habit-day" corLetra={corLetra(1)}>S</button>
                <button data-test="habit-day" corLetra={corLetra(2)}>T</button>
                <button data-test="habit-day" corLetra={corLetra(3)}>Q</button>
                <button data-test="habit-day" corLetra={corLetra(4)}>Q</button>
                <button data-test="habit-day" corLetra={corLetra(5)}>S</button>
                <button data-test="habit-day" corLetra={corLetra(6)}>S</button>
            </div>
        </CartaoHabito>
    )
}

const CartaoHabito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding: 15px;
box-sizing: border-box;
margin-top: 10px;
display: flex;
flex-direction: column;
div:first-of-type{
    width: 315px;
    height: 27px;
    display: flex;
    justify-content: space-between;
}
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
div:nth-of-type(2){
    width: 250px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    background-color: red;
}
button{
    width: 30px;
    height: 30px;
    background-color: ${props => props.corLetra ? "white" : "yellow"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.corLetra ? "green" : "blue"};
}
`