import styled from "styled-components";

export const New = styled.section`

`
export const NewText = styled.header`
    
`
export const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1;
`
export const NewContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4.5rem;
`
export const NewBox = styled.div`
    position: relative;
    transition: all 0.4s ease;
    
    span {
        position: absolute;
        background-color: var(--btn-color);
        color: #fff;
        top: 0;
        left: 0;
        padding: 1px 11px;
        font-size: 0.9rem;
        font-weight: 700;
    }

    &:hover {
        transform: scale(0.9) translateY(-5px);
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0 5px 5px 5px;
`
export const BoxText = styled.div`
    text-align: center;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
`
export const H5 = styled.h5`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
`
export const H6 = styled.h6`
    font-size: 1rem;
    font-weight: 700;
`