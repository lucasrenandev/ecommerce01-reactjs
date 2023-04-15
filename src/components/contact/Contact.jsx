import { Contact, ContactContent, ContactBox, H5, H6,
SocialIcons, Icon, List } from "./styled";
import { RiFacebookBoxFill } from "react-icons/ri"
import { RiInstagramFill } from "react-icons/ri"
import { RiTwitterFill } from "react-icons/ri"

export default function contact() {
    return(
        <Contact id="contact">
            <ContactContent>
                <ContactBox>
                    <H5>Classix</H5>
                    <H6>Let's connect with us</H6>

                    <SocialIcons>
                        <Icon><RiFacebookBoxFill/></Icon>
                        <Icon><RiInstagramFill/></Icon>
                        <Icon><RiTwitterFill/></Icon>
                    </SocialIcons>
                </ContactBox>

                <ContactBox>
                    <H5>Explore</H5>

                    <List>Home</List>
                    <List>Featured</List>
                    <List>New</List>
                    <List>Contact</List>
                </ContactBox>

                <ContactBox>
                    <H5>Our Services</H5>

                    <List>Pricing</List>
                    <List>Free Shipping</List>
                    <List>Gift Cards</List>
                </ContactBox>

                <ContactBox>
                    <H5>Shopping</H5>

                    <List>Clothing Store</List>
                    <List>Trending Shoes</List>
                    <List>Acessories</List>
                    <List>Sale</List>
                </ContactBox>
            </ContactContent>
        </Contact>
    )
}