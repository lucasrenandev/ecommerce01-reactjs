import styled from "styled-components";
import background from "../../assets/background.jpg"

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
`
export const HomeText = styled.main`

`
export const H1 = styled.h1`
    font-size: 4.5rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.6rem;
`
export const H3 = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    line-height: 1.4;
    margin: 2rem 0 2rem;
`
export const Button = styled.a`
    background-color: var(--btn-color);
    color: #fff;
    padding: 12px 23px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
    transition: 0.4s ease;

    &:hover {
        background-color: #000;
        transform: translateY(-5px);
    }
`