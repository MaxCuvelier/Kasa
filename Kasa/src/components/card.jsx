import "../styles/card.css"


export default function Card ( { id, title, cover } ) {


    return (
        <div className="cards">
            <a className="lien-card" href={`page-appartement/${id}`}>
            <div className="filtre-cards"></div>
            <img className="card-img" src={cover}></img>
            <h3 className="card-titre">{title}</h3>
            </a>
        </div>
    )
}
