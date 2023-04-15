import { Home, HomeText, H1, H3, Button } from "./styled";
import Fade from "react-reveal/Fade";

export default function home() {
    return(
        <Home id="home">
            <Fade bottom duration={2100} distance={'30px'} delay={200}>
                <HomeText>
                    <H1>Men's new <br /> arrival</H1>
                    <H3>News colors, now also avaliabe in men's sizing</H3>
                    <Button href="#">View Collection</Button>
                </HomeText>
            </Fade>
        </Home>
    )
}