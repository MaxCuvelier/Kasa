import { useState } from "react"
import "../styles/carroussel.css"
import arrowLeft from "../assets/arrow_back_ios-24px 1.png"
import arrowRight from "../assets/arrow_forward_ios-24px 1.png"

export default function Carroussel({pictures}) {
    let [currentIndex, setCurrentIndex] = useState(0)

    function handleClickUp() {
        if (currentIndex >= pictures.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(a => a + 1)
        }
    }

    function handleClickDown() {
        if (currentIndex <= 0) {
            setCurrentIndex(pictures.length-1)
        } else {
            setCurrentIndex(a => a - 1)
        }
    }

    return (
        <>
        <div className="carroussel">
            <img src={pictures[currentIndex]} className="picture"/>
            <img src={arrowLeft} className="arrow arrow_left" alt="" onClick={handleClickDown}></img>
		    <img src={arrowRight} className="arrow arrow_right" alt="" onClick={handleClickUp}></img>
        </div>
        </>
    )
}