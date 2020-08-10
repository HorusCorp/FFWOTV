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
            <div className='home-content'>
                Liens Utiles
            </div>
            <div className='usefullLinks-Zone'>
                <div className='usefullLinks-card' data-aos="fade-right">
                    <img src='../discord.png' width='40' height='40' alt=''></img>
                    <a href='https://discord.com/invite/WawCxW5?fbclid=IwAR3VL7MXXcFhgaenYxV8U81Z_E0QSb8-2UuyogVQPPS8jcMOjzlPBFNsaCE' className='link-desc'>Discord</a>
                </div>

                <div className='usefullLinks-card' data-aos="fade-left" data-aos-delay="300">
                    <img src='../facebook-logo.png' width='40' height='40' alt=''></img>
                    <a href='https://www.facebook.com/groups/1216527968739213/about' className='link-desc'>FaceBook</a>
                </div>

                <div className='usefullLinks-card' data-aos="fade-right" data-aos-delay="600">
                    <img src='../reddit.png' width='40' height='40' alt=''></img>
                    <a href='https://www.reddit.com/r/wotv_ffbe/' className='link-desc'>Reddit</a>
                </div>

                <div className='usefullLinks-card' data-aos="fade-left" data-aos-delay="900">
                    <img src='../stern.png' width='40' height='40' alt=''></img>
                    <a href='http://wotvffbe.gamea.co/c/3x9pzf7y' className='link-desc'>Tier List</a>
                </div>

                <div className='usefullLinks-card' data-aos="fade-right" data-aos-delay="1200">
                    <img src='../farm.png' width='40' height='40' alt=''></img>
                    <a href='https://wotvfarmcalculator.github.io/' className='link-desc'>Farm Guide</a>
                </div>

                <div className='usefullLinks-card' data-aos="fade-left" data-aos-delay="1500">
                    <img src='../wotvcalc.png' width='40' height='40' alt=''></img>
                    <a href='https://wotv-calc.com/'className='link-desc'>Data Mining / Equipement stats</a>
                </div>
            </div>
        </div>
        )
    }

export default Results