import "../styles/banner.css"
import logo from "../assets/logo.svg"


export default function Banner () {
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