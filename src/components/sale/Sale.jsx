import { Sale, SaleText, H4, H2 } from "./styled";
import Fade from "react-reveal/Fade"

export default function sale() {
    return(
        <Fade bottom duration={2000} distance={'30px'} delay={100}>
            <Sale>
                <SaleText>
                    <H4>Summer on sale</H4>
                    <H2>20% off <br /> new arrival</H2>
                </SaleText>
            </Sale>
        </Fade>
    )
}