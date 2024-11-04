import "../styles/card.css"


export default function Card ( { id, title, cover } ) {


    return (
        <div className="cards">
            <a href={`page-appartement/${id}`}>
            <img className="card-img" src={cover}></img>
            <h3 className="card-titre">{title}</h3>
            </a>
        </div>
    )
}
