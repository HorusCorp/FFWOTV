import React from 'react'
import { Link } from "react-router-dom";

function Members() {
    return (
        <div>
            <div className='nav-main'>
                <ul>
                <li><img width='50' heigh='50' src='../cactuar-logo.png'></img></li>
                <li>Présentation</li>
                <Link to='/results'><li>Resultats JvJ</li></Link>
                </ul>
            </div>
            <div className='home-content'>
                En construction
            </div>
        </div>
    )
}

export default Members
