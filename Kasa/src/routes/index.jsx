//import { Outlet } from "react-router-dom"
import Banner from "../components/banner.jsx"
import Footer from "../components/footer.jsx"
import "../assets/logo.svg"
import "../styles/root.css"
import "../assets/image1.png"
import Card from "../components/card.jsx"
import Data from "../../Data/Data.json"






export default function Root() {


    return (
      <>
       <Banner />
        <div className="container">
          <div className="banderole">
            <h1 className="banderole-title">Chez vous, partout et ailleurs</h1>
          </div>
          <div className="list-card">
          {Data.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }