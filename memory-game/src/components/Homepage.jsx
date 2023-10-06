import { NavLink } from "react-router-dom";
import "./Homepage.css";
export default function Home() {
  return (
    <div className="home-container-div">
      <h5>
        Bienvenue sur le memory game. Ici vous trouverez plusieurs niveaux de
        jeu. Have Fun
      </h5>

      <div className="level1-li">
        <NavLink to="/level1" className="level1-link">
          Niveau Débutant
        </NavLink>
      </div>

      <div className="level2-li">
        <NavLink to="/level2" className="level2-link">
          Niveau intermédiaire
        </NavLink>
      </div>
      <div className="level3-li">Niveau difficile (A venir)</div>
    </div>
  );
}
