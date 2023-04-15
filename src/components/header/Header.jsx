import { Header, Logo, NavBar, NavList,
List, NavLink, Icons, Icon, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { BiShoppingBag } from "react-icons/bi"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(BiMenu)
    const headingRef = useRef(null)
    const navRef = useRef(null)

    const stickyScroll = () => {
        window.addEventListener("scroll", () => {
            headingRef.current.classList.toggle("sticky", window.scrollY > 0)
        })
    }

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(IoClose)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(stickyScroll)
    useEffect(hidleMenu)

    return(
        <Header ref={headingRef} onScroll={stickyScroll}>
            <Logo href="/">Classix</Logo>

            <NavBar ref={navRef} onScroll={hidleMenu}>
                <NavList>
                    <List><Link smooth to={'#home'}><NavLink>Home</NavLink></Link></List>
                    <List><Link smooth to={'#fet'}><NavLink>Featured</NavLink></Link></List>
                    <List><Link smooth to={'#new'}><NavLink>New</NavLink></Link></List>
                    <List><Link smooth to={'#contact'}><NavLink>Contact</NavLink></Link></List>
                </NavList>
            </NavBar>

            <Icons>
                <NavLink href="#"><Icon><BiShoppingBag/></Icon></NavLink>
                <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
            </Icons>
        </Header>
    )
}