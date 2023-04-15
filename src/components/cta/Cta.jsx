import { Cta, CtaBox, Image } from "./styled";
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import brand6 from "../../assets/brand6.png"

export default function cta() {
    return(
        <Cta>
            <CtaBox>
                <Image src={brand1} alt="Gucci"/>
            </CtaBox>

            <CtaBox>
                <Image src={brand2} alt="Zara"/>
            </CtaBox>

            <CtaBox>
                <Image src={brand3} alt="Louis Vuitton"/>
            </CtaBox>

            <CtaBox>
                <Image src={brand4} alt="Channel"/>
            </CtaBox>

            <CtaBox>
                <Image src={brand5} alt="Prada"/>
            </CtaBox>

            <CtaBox>
                <Image src={brand6} alt="Mulberry"/>
            </CtaBox>
        </Cta>
    )
}