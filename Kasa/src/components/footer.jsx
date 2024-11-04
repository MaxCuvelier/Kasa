import logo from "../assets/logo.svg"
import "../styles/footer.css"

export default function Footer () {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="logo"/>
            <p className="footer-right">© 2020 Kasa. All right reserved</p>
        </div>
    )
}