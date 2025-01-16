import Banner from "../components/banner.jsx"
import Footer from "../components/footer.jsx"
import "../styles/a-propos.css"
import Collapse from "../components/collapse.jsx"
import info from "../../Data/info-collapse.json"
import Banderole from "../components/banderole.jsx"






export default function APropos () {

   
    return (
        <>
            {/* <div className="propos-header"> */}
            <Banner actifLink={2}/>
            {/* </div> */}
            <div className="banderole-2">
                <Banderole />
            </div>
            <div className="collapse">
                {info.map((item) => (
                    <Collapse key={item.id} title={item.title} paragraphe={item.paragraphe} />
                ))}
            </div>
            {/* <div className="propos-footer"> */}
            <Footer />
            {/* </div> */}
        </>
    );
}