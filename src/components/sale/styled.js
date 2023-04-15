import styled from "styled-components";
import sale from "../../assets/sale.png"

export const Sale = styled.section`
    height: 450px;
    background: url(${sale}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media screen and (max-width: 1359px) {
        grid-template-columns: 1fr;
    }
`
export const SaleText = styled.aside`
    
`
export const H4 = styled.h4`
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1;
    margin-bottom: 0.5rem;
`
export const H2 = styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.4;
    letter-spacing: 0.5rem;

    @media screen and (max-width: 400px) {
        font-size: 2.5rem;
        line-height: 1.3;
    }
`