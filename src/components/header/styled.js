import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: 1000;
    padding: 20px 14%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s ease;

    &.sticky {
        background-color: #fff;
        padding: 12px 14%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        @media screen and (max-width: 1359px) {
            padding: 12px 2%;
        }
    }

    @media screen and (max-width: 1359px) {
        padding: 10px 2%;
    }
`
export const Logo = styled.a`
    color: #000;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 1px;
`
export const NavBar = styled.nav`
    @media screen and (max-width: 750px) {
        position: absolute;
        top: 100%;
        left: -500px;
        background-color: #fff;
        width: 50vw;
        height: 100vh;
        transition: all 0.4s ease;

        &.active {
            left: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 750px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
    }
`
export const List = styled.li`
    padding: 0 25px;
    margin: 0 5px;

    .nav-link {
        color: #000;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.4s ease;

        &:hover {
            color: var(--btn-color);
        }
    }

    @media screen and (max-width: 750px) {
        padding: 0;
        margin: 2rem 0;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Icon = styled.i`
    font-size: 34px;
    color: #000;
    transition: all 0.4s ease;

    &:hover {
        color: var(--btn-color);
    }
`
export const MenuIcon = styled.div`
    font-size: 33px;
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 750px) {
        display: inline-flex;
        align-items: center;
    }
`