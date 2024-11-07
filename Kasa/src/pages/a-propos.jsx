import Banner from "../components/banner.jsx"
import Footer from "../components/footer.jsx"
import "../styles/a-propos.css"
import Collapse from "../components/collapse.jsx"
import info from "../../Data/info-collapse.json"
import Banderole from "../components/banderole.jsx"






export default function APropos () {

   
    return (
        <>
            <Banner />
            <div className="banderole-2">
                <Banderole />
            </div>
            <div className="collapse">
                {info.map((item) => (
                    <Collapse key={item.id} title={item.title} paragraphe={item.paragraphe} />
                ))}
            </div>
            <Footer />
        </>
    );
}