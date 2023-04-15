import { useEffect, useState } from "react";
import { ScrollArrow } from "./styled";
import { FaArrowUp } from "react-icons/fa"

export default function scrollarrow() {
    const [scrollArrow, setScrollArrow] = useState(false)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const hidleScrollUp = () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setScrollArrow(true)
            }
            else {
                setScrollArrow(false)
            }
        })
    }

    useEffect(hidleScrollUp)

    return(
        <div className="arrow">
            {scrollArrow && (
                <ScrollArrow onClick={scrollUp}>
                    <FaArrowUp/>
                </ScrollArrow>
            )}
        </div>
    )
}