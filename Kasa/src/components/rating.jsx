import "../styles/rating.css"
import starActive from "../assets/star-active 3.svg"
import starInactive from "../assets/star-inactive 1.svg"

export default function Rating({rating}) {

    const stars= []
    for(let i = 1; i <= 5; i++)
        if(i <= rating) {
            stars.push(<img className="Stars-active" key={i} src={starActive}/>)
        } else {
            stars.push(<img className="Stars" key={i} src={starInactive}/>)
        }


    return (
        <div>
            {stars}
        </div>
)}
