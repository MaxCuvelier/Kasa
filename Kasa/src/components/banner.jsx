import "../styles/banner.css"
import logo from "../assets/logo.svg"


export default function Banner ({ actifLink }) {

    if(actifLink === 1) {
        return (
            <header className="header">
                <div className="logo-header">
                    <img src={logo} className="kasa" alt="logo"/>
                </div>
                <div className="liens-header">
                    <a href={"/"} className="lien-actif">Accueil</a>
                    <a href={"/a-propos"}>A Propos</a>
                </div>
            </header>
        )
    }  
    if(actifLink === 2) {
        return (
            <header className="header">
                <div className="logo-header">
                    <img src={logo} className="kasa" alt="logo"/>
                </div>
                <div className="liens-header">
                    <a href={"/"}>Accueil</a>
                    <a href={"/a-propos"}  className="lien-actif">A Propos</a>
                </div>
            </header>
        ) 
    } else {
        return (
            <header className="header">
                <div className="logo-header">
                    <img src={logo} className="kasa" alt="logo"/>
                </div>
                <div className="liens-header">
                    <a href={"/"}>Accueil</a>
                    <a href={"/a-propos"}>A Propos</a>
                </div>
            </header>
        )
 }
}