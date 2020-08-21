import React from 'react'
import { Link } from "react-router-dom";


function Home() {
    var matchAout = [
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:61,result:'Défaite',score2:72,ecusson2:'../logo-lyon.png',equipe2:'War Of Lions'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:62,result:'Victoire',score2:57,ecusson2:'../cactuar-logo.png',equipe2:'Corona Virus'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:51,result:'Défaite',score2:66,ecusson2:'../yellow.png',equipe2:'JapNameTeam'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:63,result:'Victoire',score2:56,ecusson2:'../spider.png',equipe2:'Garuda'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:61,result:'Défaite',score2:68,ecusson2:'../lionstatue.png',equipe2:'Eternal Flame'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:58,result:'Défaite',score2:75,ecusson2:'../mog.png',equipe2:'FinalFantasy'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:66,result:'Victoire',score2:63,ecusson2:'../sun.png',equipe2:'TheOnyxGuard'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:42,result:'Victoire',score2:37,ecusson2:'../spider.png',equipe2:'EoE'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:69,result:'Défaite',score2:72,ecusson2:'../logo-lyon.png',equipe2:'Lion Heart'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:66,result:'Défaite',score2:66,ecusson2:'../chocobo.png',equipe2:'Elysium'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:55,result:'Défaite',score2:75,ecusson2:'../mog.png',equipe2:'Twin Adder'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:72,result:'Victoire',score2:58,ecusson2:'../knight.png',equipe2:'Vagrants'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:56,result:'Défaite',score2:75,ecusson2:'../tree.png',equipe2:'Lcie Bois'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:54,result:'Victoire',score2:50,ecusson2:'../cactuar-logo.png',equipe2:'Atheria'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:66,result:'Victoire',score2:66,ecusson2:'../bee.png',equipe2:'Materia'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:67,result:'Victoire',score2:66,ecusson2:'../spider.png',equipe2:'Black Lions'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:54,result:'Victoire',score2:30,ecusson2:'../spider.png',equipe2:'RAGNAROK'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:75,result:'Victoire',score2:53,ecusson2:'../knight.png',equipe2:'Vagrants'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:64,result:'Défaite',score2:72,ecusson2:'../chocobo.png',equipe2:'Dragonborn'}

    ]

    var matchJuillet = [
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:67,result:'Défaite',score2:67,ecusson2:'../mog.png',equipe2:'Freelancer'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:71,result:'Défaite',score2:73,ecusson2:'../lionstatue.png',equipe2:'NomJap'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:75,result:'Victoire',score2:54,ecusson2:'../knight.png',equipe2:'Maester'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:61,result:'Défaite',score2:75,ecusson2:'../lionstatue.png',equipe2:'Demedoria'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:50,result:'Défaite',score2:75,ecusson2:'../mog.png',equipe2:'Darkside'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:69,result:'Victoire',score2:57,ecusson2:'../yellow.png',equipe2:'The Empire'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:59,result:'Défaite',score2:64,ecusson2:'../mog.png',equipe2:'HeavenBar'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:64,result:'Victoire',score2:59,ecusson2:'../chocobo.png',equipe2:'Asteria'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:66,result:'Défaite',score2:72,ecusson2:'../logo-lyon.png',equipe2:'FF Arcana'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:48,result:'Défaite',score2:60,ecusson2:'../cactuar-logo.png',equipe2:'#Off-Topic'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:57,result:'Défaite',score2:72,ecusson2:'../lionstatue.png',equipe2:'The Fallen'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:67,result:'Victoire',score2:61,ecusson2:'../chocobo.png',equipe2:'Ruination'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:65,result:'Victoire',score2:48,ecusson2:'../lionstatue.png',equipe2:'Panzer Heart'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:64,result:'Défaite',score2:72,ecusson2:'../chocobo.png',equipe2:'Selfish Cats'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:67,result:'Victoire',score2:66,ecusson2:'../lionstatue.png',equipe2:'Oblivion'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:51,result:'Victoire',score2:45,ecusson2:'../bee.png',equipe2:'EoE'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:69,result:'Victoire',score2:52,ecusson2:'../knight.png',equipe2:'Nom Chinois'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:60,result:'Défaite',score2:64,ecusson2:'../lionstatue.png',equipe2:'EXINERIS'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:60,result:'Défaite',score2:61,ecusson2:'../ange.png',equipe2:'KingsGlaive'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:58,result:'Victoire',score2:50,ecusson2:'../mog.png',equipe2:'Nom Chinois'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:69,result:'Victoire',score2:45,ecusson2:'../chocobo.png',equipe2:'Skeptic'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:63,result:'Défaite',score2:65,ecusson2:'../cactuar-logo.png',equipe2:'Quaranteam!'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:71,result:'Victoire',score2:59,ecusson2:'../chocobo.png',equipe2:'Soldier'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:50,result:'Défaite',score2:60,ecusson2:'../sun.png',equipe2:'Akatsuki'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:65,result:'Défaite',score2:74,ecusson2:'../chocobo.png',equipe2:'Selfish Cats'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:69,result:'Défaite',score2:78,ecusson2:'../lionstatue.png',equipe2:'EXINERIS'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:70,result:'Victoire',score2:63,ecusson2:'../goat.png',equipe2:'Soldier'},
    ]

    var matchJuin = [
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:52,result:'Défaite',score2:78,ecusson2:'../knight.png',equipe2:'Silver'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:61,result:'Victoire',score2:40,ecusson2:'../mog.png',equipe2:'Halcyons'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:76,result:'Victoire',score2:60,ecusson2:'../cactuar-logo.png',equipe2:'Quaranteam!'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:75,result:'Victoire',score2:59,ecusson2:'../lionstatue.png',equipe2:'Razgriz'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:72,result:'Victoire',score2:62,ecusson2:'../ange.png',equipe2:'Dragon Trinh'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:59,result:'Défaite',score2:66,ecusson2:'../cactuar-logo.png',equipe2:'Brodorz.PH'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:56,result:'Victoire',score2:50,ecusson2:'../chocobo.png',equipe2:'Cheetopia'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:45,result:'Défaite',score2:57,ecusson2:'../chocobo.png',equipe2:'台灣希望'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:51,result:'Victoire',score2:48,ecusson2:'../ange.png',equipe2:'7th Heaven'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:54,result:'Victoire',score2:52,ecusson2:'../chocobo.png',equipe2:'路行鳥農場.'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:56,result:'Victoire',score2:41,ecusson2:'../lionstatue.png',equipe2:'The WolfPack'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:57,result:'Victoire',score2:45,ecusson2:'../chocobo.png',equipe2:'Letifer'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:43,result:'Victoire',score2:31,ecusson2:'../cactuar-logo.png',equipe2:'ShiningForce'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:54,result:'Victoire',score2:28,ecusson2:'../cactuar-logo.png',equipe2:'Ivalice Squad'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:48,result:'Victoire',score2:16,ecusson2:'../mog.png',equipe2:'GetBeterBroz'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:39,result:'Victoire',score2:27,ecusson2:'../dragon.png',equipe2:'Mighty Ducks'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:53,result:'Victoire',score2:27,ecusson2:'../cactuar-logo.png',equipe2:'醉雪光明'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:51,result:'Victoire',score2:21,ecusson2:'../logo-wolf.png',equipe2:'Excalibur'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:9,ecusson2:'../dragon.png',equipe2:'Fairy Tail'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:39,result:'Victoire',score2:9,ecusson2:'../dragon.png',equipe2:'Boogeymans'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:48,result:'Victoire',score2:12,ecusson2:'../cerf.png',equipe2:'The judges'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:45,result:'Victoire',score2:6,ecusson2:'../bee.png',equipe2:'TheOnyxGuard'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:57,result:'Victoire',score2:7,ecusson2:'../logo-lyon.png',equipe2:'Mirage Corps'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:3,ecusson2:'../knight.png',equipe2:'Kaer Morhen'},
        {equipe1:'Ivalice FR',ecusson1:'../cactuar-logo.png',score1:33,result:'Victoire',score2:0,ecusson2:'../logo-lyon.png',equipe2:'TRUMPVACCINE'}
    ]


    var matchListAout =
        matchAout.map(function(item, i){return <div className='result-div' data-aos="fade-up">
                <div className='col1'>{item.equipe1}</div>
                <div className='col2'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson1} alt='blason'></img></div>
                <div className='col3' style={{color:item.score1>=item.score2?"#479B58":"#white"}}>{item.score1}</div>
                <div className='col4' style={{color:item.result === "Victoire" ?"#479B58":"#EE6365",fontWeight:"bold"}}>{item.result}</div>
                <div className='col5' style={{color:item.score2>=item.score1?"#479B58":"#white"}}>{item.score2}</div>
                <div className='col6'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson2} alt='blason'></img></div>
                <div className='col7'>{item.equipe2}</div>
            </div>
        })

    var matchListJuin = 
        matchJuin.map(function(item, i){return <div className='result-div' data-aos="fade-up">
                <div className='col1'>{item.equipe1}</div>
                <div className='col2'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson1} alt='blason'></img></div>
                <div className='col3' style={{color:item.score1>=item.score2?"#479B58":"#white"}}>{item.score1}</div>
                <div className='col4' style={{color:item.result === "Victoire" ?"#479B58":"#EE6365",fontWeight:"bold"}}>{item.result}</div>
                <div className='col5' style={{color:item.score2>=item.score1?"#479B58":"#white"}}>{item.score2}</div>
                <div className='col6'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson2} alt='blason'></img></div>
                <div className='col7'>{item.equipe2}</div>
            </div>
        })

        var matchListJuillet = 
        matchJuillet.map(function(item, i){return <div className='result-div' data-aos="fade-up">
                <div className='col1'>{item.equipe1}</div>
                <div className='col2'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson1} alt='blason'></img></div>
                <div className='col3' style={{color:item.score1>=item.score2?"#479B58":"#white"}}>{item.score1}</div>
                <div className='col4' style={{color:item.result === "Victoire" ?"#479B58":"#EE6365",fontWeight:"bold"}}>{item.result}</div>
                <div className='col5' style={{color:item.score2>=item.score1?"#479B58":"#white"}}>{item.score2}</div>
                <div className='col6'><img style={{width:35,height:35,backgroundSize:'cover',backgroundPosition:'center'}} src={item.ecusson2} alt='blason'></img></div>
                <div className='col7'>{item.equipe2}</div>
            </div>
        })
    return(
        
        <div>
                <div className='nav-main'>
                    <ul>
                    <li><img width='40' heigh='40' style={{margin:'5px 0'}} src='../cactuar-logo.png' alt='blason'></img></li>
                    <Link to='/'><li>Acceuil</li></Link>
                    <Link to='/results'><li>Resultats GvG</li></Link>
                    <Link to='/tournois'><li>Tournois Mensuels</li></Link>
                    <Link to='/links'><li>Liens Utiles</li></Link>
                    
                    </ul>
                </div>
                <div className='home-component'>


                    <div id="accordion" style={{marginTop:25}}>
            
                        <div class="card">
                            <div class="card-header" id="headingTree">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTwo">
                                Aout 2020
                                </button>
                            </h5>
                            </div>

                            <div id="collapseTree" class="collapse show" aria-labelledby="headingTree" data-parent="#accordion">
                            <div class="card-body">

                                <div className='result-banner3'></div>
                                {matchListAout}
                                

                            </div>
                            </div>
                        </div>

                        
                    </div>


                    <div id="accordion" style={{marginTop:25}}>
        
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Juillet 2020
                                </button>
                            </h5>
                            </div>
        
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
        
                                <div className='result-banner1'></div>
                                {matchListJuillet}
                                
        
                            </div>
                            </div>
                        </div>
        
                        
                    </div>


                    <div id="accordion" style={{marginTop:25}}>
        
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Juin 2020
                                </button>
                            </h5>
                            </div>
        
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
        
                                <div className='result-banner2'></div>
                                {matchListJuin}
        
                            </div>
                            </div>
                        </div>
        
                        
                    </div>


                    

                    
        
                </div>
            </div>
    )
}

export default Home
