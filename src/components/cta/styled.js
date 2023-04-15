import styled from "styled-components";

export const Cta = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    align-items: center;
`
export const CtaBox = styled.aside`
    opacity: 0.5;
    transition: opacity 0.4s ease;

    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 180px;
    height: auto;
    object-fit: cover;
`