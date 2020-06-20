import React from 'react'
import { Link } from "react-router-dom";

function Results() {
    var match = [
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:56,result:'Victoire',score2:41,ecusson2:'../lionstatue.png',equipe2:'The WolfPack'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:57,result:'Victoire',score2:45,ecusson2:'../chocobo.png',equipe2:'Letifer'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:43,result:'Victoire',score2:31,ecusson2:'../cactuar-logo.png',equipe2:'ShiningForce'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:54,result:'Victoire',score2:28,ecusson2:'../cactuar-logo.png',equipe2:'Ivalice Squad'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:48,result:'Victoire',score2:16,ecusson2:'../mog.png',equipe2:'GetBeterBroz'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:39,result:'Victoire',score2:27,ecusson2:'../dragon.png',equipe2:'Mighty Ducks'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:53,result:'Victoire',score2:27,ecusson2:'../cactuar-logo.png',equipe2:'nomChinois'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:51,result:'Victoire',score2:21,ecusson2:'../logo-wolf.png',equipe2:'Excalibur'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:9,ecusson2:'../dragon.png',equipe2:'Fairy Tail'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:39,result:'Victoire',score2:9,ecusson2:'../dragon.png',equipe2:'Boogeymans'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:48,result:'Victoire',score2:12,ecusson2:'../cerf.png',equipe2:'The judges'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:45,result:'Victoire',score2:6,ecusson2:'../bee.png',equipe2:'TheOnyxGuard'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:57,result:'Victoire',score2:7,ecusson2:'../logo-lyon.png',equipe2:'Mirage Corps'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:3,ecusson2:'../knight.png',equipe2:'Kaer Morhen'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:0,ecusson2:'../logo-lyon.png',equipe2:'TRUMPVACCINE'}
    ]
    
    var matchList = 
        match.map(function(item, i){return <div className='result-div'  data-aos="fade-up">
                <div className='col1'>{item.equipe1}</div>
                <div className='col2'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson1}></img></div>
                <div className='col3' style={{color:item.score1>=item.score2?"yellow":"#white"}}>{item.score1}</div>
                <div className='col4' style={{color:item.result === "Victoire" ?"#8CE05A":"#EE6365",fontWeight:"bold"}}>{item.result}</div>
                <div className='col5' style={{color:item.score2>=item.score1?"yellow":"#white"}}>{item.score2}</div>
                <div className='col6'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson2}></img></div>
                <div className='col7'>{item.equipe2}</div>
            </div>
        })
      
    
        return (
            <div>
                <div className='nav-main'>
                    <ul>
                    <li><img width='50' heigh='50' src='../cactuar-logo.png'></img></li>
                    <Link to='/'><li>Liens Utiles</li></Link>
                    <Link to='/results'><li>Resultats JvJ</li></Link>
                    </ul>
                </div>
                <div className='home-component'>
                
                    <div id="accordion">
        
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Juin 2020
                                </button>
                            </h5>
                            </div>
        
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
        
                                <div className='result-banner1'></div>
                                {matchList}
        
                            </div>
                            </div>
                        </div>
        
                        
                    </div>
        
                </div>
            </div>
        )
    }

export default Results
