import styled from "styled-components";

export default function Menu() {
    return (
        <BarraMenu data-test="menu">
            <a data-test="history-link" href="https://www.figma.com/file/IBpI2MYMEbnHOweD1rK0JA/TrackIt-(Copy)?node-id=15-124&t=JHueuPo7urTs5goH-0">Hábitos</a>
            <button data-test="today-link">Hoje</button>
            <a data-test="habit-link" href="https://www.figma.com/file/IBpI2MYMEbnHOweD1rK0JA/TrackIt-(Copy)?node-id=15-124&t=JHueuPo7urTs5goH-0">Histórico</a>
        </BarraMenu>
    )
}

const BarraMenu = styled.div`
width: 100vw;
height: 10vh;
background-color: #FFFFFF;
padding: 0px 36px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
a{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
}
button{
    width: 91px;
    height: 91px;
    background: #52B6FF;
    margin-bottom: 100px;

}
`
