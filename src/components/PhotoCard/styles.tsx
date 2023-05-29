import styled from 'styled-components'
import { fadeIn } from '../styles/animation'

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`
// en este caso como la animacion es una arrow function se puede pasar al Img como metodo directamente. Dentro del metodo se pueden cambiar los parametros nuevamente con { time: '5s' }.

export const Img = styled.img`
    ${fadeIn()};
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    border: none;
    background-color: white;
    align-items: center;
    padding-top: 8px;    
    & svg {
        margin-right: 4px;
    }
`
export const Article = styled.article`
min-height: 200px;
`
