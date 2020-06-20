import React from 'react'
import { Link } from "react-router-dom";


function Home() {
    return(
        <div>
            <div className='nav-main'>
                <ul>
                <li><img width='50' heigh='50' src='../cactuar-logo.png'></img></li>
                <li>Liens Utiles</li>
                <Link to='/results'><li>Resultats JvJ</li></Link>
                </ul>
            </div>
            <div className='home-content'>
                Liens utiles
            </div>
            <div className='liens-utiles'>
                <div className='ligne-liens'>
                    <img src='../discord.png' width='40' height='40'></img>
                    <a href='https://discord.gg/WawCxW5'>Notre Discord</a>
                </div>
                <div className='ligne-liens'>
                    <img src='../fb.png' width='40' height='40'></img>
                    <a href='https://www.facebook.com/groups/1216527968739213/about'>Le Facebook</a>
                </div>
                <div className='ligne-liens'>
                    <img src='../reddit.png' width='40' height='40'></img>
                    <a href=' https://www.reddit.com/r/wotv_ffbe/'>Le Reddit</a>
                </div>
                <div className='ligne-liens'>
                    <img src='../gamea.jpg' width='40' height='40'></img>
                    <a href='http://wotvffbe.gamea.co/c/3x9pzf7y?fbclid=IwAR24xTm29sghwJ96QLOWv_xwP7fJxI-U_6iNIzK_NGqdlt5RLGRzm1ETeIw#cp666287'>Tier Liste des personnages</a>
                </div>
                <div className='ligne-liens'>
                    <img src='../farmcalc.png' width='40' height='40'></img>
                    <a href='https://wotvfarmcalculator.github.io/?fbclid=IwAR1Asy9SX8luyygShUMncC0DfDNfMDRtT-OMvc8iPor5f_RJ-v8a1-NEiO4'>Les zones de Farm</a>
                </div>
                <div className='ligne-liens'>
                    <img src='../shiva.png' width='40' height='40'></img>
                    <a href='https://wotv-calc.com/?fbclid=IwAR3ELMb3zV0ZlkaH57YXZDL98Ob44Pikua3rQaEswnqwTZRm0ZKLrynOQpg'>Data Mining / Stats Max </a>
                </div>
                

                
               
                
            </div>
        </div>
    )
}

export default Home
