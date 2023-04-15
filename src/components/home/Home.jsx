import { Home, HomeText, H1, H3, Button } from "./styled";

export default function home() {
    return(
        <Home id="home">
            <HomeText>
                <H1>Men's new <br /> arrival</H1>
                <H3>News colors, now also avaliabe in men's sizing</H3>
                <Button href="#">View Collection</Button>
            </HomeText>
        </Home>
    )
}