import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #598A5C    81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TodoList = styled.div`
    background: #000000 ;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 20px;
    width: 360px;
    background-color: #FFFFFF ;
    font-size: 17px;
    outline: none;
`
export const Button = styled.button`
    border: none;
    border-radius: 5px;
    width: 130px;
    height: 40px;
    background-color: #18E424 ;
    color: #000 ;
    font-size: 17px;
    line-height: 2px;
    font-weight: 900;
    width: 132px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#94FF9B' : '#FF9595  '};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
        font-size: 17px;
    }
`
export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    font-size: 22px;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    font-size: 22px;
`
export const Titulo = styled.h3`
    font-size: 27px;
    text-align: center;
    color: #FF0000;   
    text-shadow: 2px 5px 50px 
`



