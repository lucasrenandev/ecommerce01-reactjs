import { New, NewText, H2, NewContent, NewBox,
Image, BoxText, H5, H6 } from "./styled";
import new1 from "../../assets/new1.jpg"
import new2 from "../../assets/new2.jpg"
import new3 from "../../assets/new3.jpg"
import new4 from "../../assets/new4.jpg"
import Fade from "react-reveal/Fade"

export default function cta() {
    return(
        <Fade bottom duration={2000} distance={'30px'} delay={100}>
            <New id="new">
                <NewText>
                    <H2>New arrivals</H2>
                </NewText>

                <NewContent>
                    <NewBox>
                        <Image src={new1} alt="New 1"/>
                        <BoxText>
                            <H5>Lorem ipsum dolor</H5>
                            <H6>$188</H6>
                        </BoxText>
                        <span>Sale</span>
                    </NewBox>

                    <NewBox>
                        <Image src={new2} alt="New 2"/>
                        <BoxText>
                            <H5>Lorem ipsum dolor</H5>
                            <H6>$188</H6>
                        </BoxText>
                        <span>Sale</span>
                    </NewBox>

                    <NewBox>
                        <Image src={new3} alt="New 3"/>
                        <BoxText>
                            <H5>Lorem ipsum dolor</H5>
                            <H6>$188</H6>
                        </BoxText>
                        <span>Sale</span>
                    </NewBox>

                    <NewBox>
                        <Image src={new4} alt="New 4"/>
                        <BoxText>
                            <H5>Lorem ipsum dolor</H5>
                            <H6>$188</H6>
                        </BoxText>
                        <span>Sale</span>
                    </NewBox>
                </NewContent>
            </New>
        </Fade>
    )
}