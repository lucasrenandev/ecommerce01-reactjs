import styled from "styled-components";

export const Contact = styled.section`
    background-color: #111;
`
export const ContactContent = styled.main`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, auto));
   align-items: flex-start;
   gap: 2rem;
`
export const ContactBox = styled.div`

`
export const H5 = styled.h5`
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2rem;
    `
export const H6 = styled.h6`
    font-size: 1rem;
    font-weight: 600;
    color: #555;
    line-height: 1;
    margin-bottom: 2rem;
    letter-spacing: 0.2px;
`
export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Icon = styled.i`
    display: block;
    color: #555;
    font-size: 1.5rem;
    transition: all 0.4s ease;

    &:hover {
        color: #fff;
        transform: translateY(-5px);
        cursor: pointer;
    }
`
export const List = styled.li`
    color: #555;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2px;
    transition: all 0.4s ease;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    &:hover {
        color: #fff;
        transform: translateX(-5px);
        cursor: pointer;
    }
`