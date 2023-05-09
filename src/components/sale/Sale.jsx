import { useEffect } from "react";
import { Sale, SaleText, H4, H2 } from "./styled";

export default function sale() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 2400,
            reset: true
        })

        sr.reveal(".sale", {delay: 300, origin: "bottom"})
    }, [])

    return(
        <Sale className="sale">
            <SaleText>
                <H4>Summer on sale</H4>
                <H2>20% off <br /> new arrival</H2>
            </SaleText>
        </Sale>
    )
}