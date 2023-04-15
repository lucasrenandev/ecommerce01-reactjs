import { Header, Logo, NavBar, NavList,
List, NavLink, Icons, Icon, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi"
import { BiShoppingBag } from "react-icons/bi"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon] = useState(BiMenu)
    const headingRef = useRef(null)

    const stickyScroll = () => {
        window.addEventListener("scroll", () => {
            headingRef.current.classList.toggle("sticky", window.scrollY > 0)
        })
    }

    useEffect(stickyScroll)

    return(
        <Header ref={headingRef} onScroll={stickyScroll}>
            <Logo href="/">Classix</Logo>

            <NavBar>
                <NavList>
                    <List><Link smooth to={'#home'}><NavLink>Home</NavLink></Link></List>
                    <List><Link smooth to={'#fet'}><NavLink>Featured</NavLink></Link></List>
                    <List><Link smooth to={'#new'}><NavLink>New</NavLink></Link></List>
                    <List><Link smooth to={'#contact'}><NavLink>Contact</NavLink></Link></List>
                </NavList>
            </NavBar>

            <Icons>
                <NavLink href="#"><Icon><BiShoppingBag/></Icon></NavLink>
                <MenuIcon>{menuIcon}</MenuIcon>
            </Icons>
        </Header>
    )
}