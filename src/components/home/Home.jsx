import { useEffect } from "react";
import { Home, HomeText, H1, H3, Button } from "./styled";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2400,
            reset: true
        })

        sr.reveal(".home-text", {delay: 300, origin: "bottom"})
    }, [])

    return(
        <Home id="home">
            <HomeText className="home-text">
                <H1>Men's new <br /> arrival</H1>
                <H3>News colors, now also avaliabe in men's sizing</H3>
                <Button href="#">View Collection</Button>
            </HomeText>
        </Home>
    )
}