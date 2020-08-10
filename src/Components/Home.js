import React from 'react'
import { Link } from "react-router-dom";

function Results() {
    
      
    
        return (
            <div>
            <div className='nav-main'>
                <ul>
                <li><img width='50' heigh='50' src='../cactuar-logo.png' alt='logo'></img></li>
                <Link to='/'><li>Acceuil</li></Link>
                <Link to='/results'><li>Resultats GvG</li></Link>
                <Link to='/tournois'><li>Tournois Mensuels</li></Link>
                <Link to='/links'><li>Liens Utiles</li></Link>
                </ul>
            </div>
            
            <div className='guild-pampa'>
                <img src='../../pampa.png' alt='pampa'></img>
                <span>Bienvenue sur le site de la guilde</span>
                <h1>Ivalice FR WOTV</h1>
            </div>
        </div>
        )
    }

export default Results
