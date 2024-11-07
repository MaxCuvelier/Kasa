import Banner from "../components/banner.jsx"
import Footer from "../components/footer.jsx"
import Data from "../../Data/Data.json"
import Tags from "../components/tags.jsx"
import { useParams } from 'react-router-dom';
import Collapse from '../components/collapse.jsx'
import '../styles/page-appartement.css'
import Carroussel from "../components/carroussel.jsx";
import Rating from "../components/rating.jsx"


export default function Logement() {

        const { id } = useParams();
        const item = Data.find((item) => item.id === id)


    return (
        <>
        <Banner />
        <div className="container-appart">
            <div className="carrousel">
                <Carroussel pictures={item.pictures} />
            </div>
            <div className="titre-host">
                <div className="title">
                    <h1 className="titre">{item.title}</h1>
                    <p className="sous-titre">{item.location}</p>
                </div>
                <div className="Host">
                    <p className="host-name">{item.host.name}</p>
                    <img className="host-image" src={item.host.picture}></img>
                </div>
            </div>
            <div className="tags-rating">
                <div className="Tags">
                    {item.tags.map((tag, index) =>
                <Tags key={`${tag}-${index}`} tags={tag} />)
                    }
                </div>
                <div className="Rating">
                    <Rating rating={item.rating}/>
                </div>
            </div>
            <div className="Description">
                <div className="collapse-taille">
                <Collapse title='Description' paragraphe={item.description} />
                </div>
                <div className="collapse-taille">
                <Collapse title='Équipements' paragraphe={0} list={item.equipments}/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}