import { useRouteError } from "react-router-dom";
import "../styles/error-page.css"
import Banner from "../components/banner"
import Footer from "../components/footer"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container-error">
      <div className="error-banner">
         <Banner />
      </div>
    <div id="error-page">
      <h1 className="titre-error">404</h1>
      <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
      <a href={"/"} className="lien-error">Retourner sur la page d'accueil</a>
    </div>
    <div className="error-footer">
      <Footer />
    </div>
    </div>
  );
}