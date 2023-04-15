import { Featured, Heading, H2, FeaturedContent,
FeaturedBox, Image, Text, H3, H6 } from "./styled";
import { BiRightArrowAlt } from "react-icons/bi"
import fea1 from "../../assets/fea1.jpg"
import fea2 from "../../assets/fea2.jpg"
import fea3 from "../../assets/fea3.jpg"
import fea4 from "../../assets/fea4.jpg"
import fea5 from "../../assets/fea5.jpg"
import fea6 from "../../assets/fea6.jpg"
import Fade from "react-reveal/Fade"

export default function featured() {
    return(
        <Fade bottom duration={2000} distance={'30px'} delay={100}>
            <Featured id="fet">
                <Heading>
                    <H2>Featured categories</H2>
                </Heading>

                <FeaturedContent>
                    <FeaturedBox>
                        <Image src={fea1} alt="Feature 1"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>

                    <FeaturedBox>
                        <Image src={fea2} alt="Feature 2"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>

                    <FeaturedBox>
                        <Image src={fea3} alt="Feature 3"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>
                    <FeaturedBox>
                        <Image src={fea4} alt="Feature 4"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>
                    <FeaturedBox>
                        <Image src={fea5} alt="Feature 5"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>

                    <FeaturedBox>
                        <Image src={fea6} alt="Feature 6"/>

                        <Text>
                            <H3>Mens</H3>
                            <H6>10 items</H6>
                        </Text>

                        <a href="#"><BiRightArrowAlt/></a>
                    </FeaturedBox>
                </FeaturedContent>
            </Featured>
        </Fade>
    )
}