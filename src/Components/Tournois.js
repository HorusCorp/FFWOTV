import React from 'react'
import { Link } from "react-router-dom";

function Tournois() {
    return (
        <div>
            <div className='nav-main'>
                <ul>
                <li><img width='50' heigh='50' src='../cactuar-logo.png' alt=''></img></li>
                <Link to='/'><li>Acceuil</li></Link>
                <Link to='/results'><li>Resultats GvG</li></Link>
                <Link to='/tournois'><li>Tournois Mensuels</li></Link>
                <Link to='/links'><li>Liens Utiles</li></Link>
                </ul>
            </div>
            <div className='home-content'>
                Félicitation à nos participants !
            </div>
            <div className='tournament-result-card'>
                <img src='../../trophy.png' alt='trophee' width='100' heigh='100'></img>
                <h2>Tournois de Juillet</h2>
                
                <p>Le tournoi de juillet s'est terminé sur une victoire d'Asagi</p>

                <p>Mots du vainqueur:</p>

                <p> "C'était fun! Merci à tous d'avoir participé et désolé pour les abus d'Archondros et moi^^ C'était pas mal serré en finale avec Archondros mais le prochain tournoi sera plus équilibré pour tout le monde."</p>
            </div>
        </div>
    )
}

export default Tournois
