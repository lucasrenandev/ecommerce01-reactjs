import styled from "styled-components";

export const Featured = styled.section`

`
export const Heading = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;

    @media screen and (max-width: 400px) {
        line-height: 1.2;
    }
`
export const FeaturedContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    }
`
export const FeaturedBox = styled.div`
    position: relative;
    transition: all 0.4s ease;

    a {
        background-color: #fff;
        color: #000;
        position: absolute;
        bottom: 2.3rem;
        left: 2.3rem;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        transition: all 0.4s ease;
    }

    &:hover {
        transform: scale(0.9) translateY(-5px);
        cursor: pointer;
    }

    &:hover a {
        background-color: var(--btn-color);
        color: #fff;
    }
`
export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`
export const Text = styled.div`
    position: absolute;
    top: 2.3rem;
    left: 2.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 2px;
`
export const H6 = styled.h6`
    font-size: 14px;
    font-weight: 400;
    color: #555;
    letter-spacing: 1px;
    line-height: 1;
`