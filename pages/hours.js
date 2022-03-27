import Menus from "../composants/Menus"
import styled from '@emotion/styled'
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Connect from "../composants/Connect"
import Footer from "../composants/Footer"


export default function hours() {

    return(
        <div>

            <Head>
                <title>Hours - Zoo</title>
            </Head>

            <div className="Header">
                <Menus />
            </div>
            <Container>
                <section className="s1">
                    <h3>SHOW US <br/> HOW YOU ZOO</h3>
                    <h4>Make your day and a difference for wildlife</h4> 
                </section>
                <section style={{textAlign : 'center', marginTop : '8em'}}>
                    <Link href="">
                        <a style={{backgroundColor : 'green', color : 'white', padding : '1em 2em', borderRadius : '5px', fontSize : '1.5em', boxShadow : '0 0 0.4em grey'}}>BECOME A MEMBER</a>
                    </Link><br/><br/><br/><br/><br/>
                    <Link href="">
                        <a style={{backgroundColor : 'green', color : 'white', padding : '1em 2em', borderRadius : '5px', fontSize : '1.25em' ,boxShadow : '0 0 0.4em grey'}}>BUY TICKETS</a>
                    </Link>
                </section>
                <section className="s2" style={{marginTop : '5em'}}>
                    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2>HOURS</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>
                    
                    <div className="block-hours">
                        <h3>HOURS</h3>
                        <div>
                            <p style={{fontSize : '1.5em'}}>January 31 - April 30, 2022</p>
                            <strong>Open Daily</strong><br/>
                            <p style={{fontStyle : 'green'}}>9:30 a.m. - 4:00 p.m.</p>
                            <p>The zoo is open daily except Christms Day, December 25</p>                            
                        </div>


                    </div>
                </section>

                <section className="s3">
                    <div>
                        <h2 style={{color : '#96d7d2'}}>Note to Visitors</h2>
                        <p style={{marginTop :'1em'}}>Most exhibits are open, and there are dining and shopping experiences to enjoy and restrooms available for your convenience.</p>
                        <h3 style={{marginTop :'1em'}}>Temporary Closures</h3><br/>
                        <p>The Historic Carousel is closed until further notice.</p><br/>
                        <h3 style={{marginTop :'1em'}}>Upcoming Re-Openings</h3><br/>
                        <p>Please note some areas of the zoo are temporarily closed, including some indoor buildings and high-touch areas such as: <br/><br/>
                            Zoomazium, Molbak’s Butterfly Garden (reopens Summer 2022), Tropical Rain Forest building, South ZooStore, Willawong Station, Bug World, All playgrounds, Mother’s/Nursing room, Face painting, Kiosks
                        </p>
                     </div>
                    
                </section>

                <section className="s4">
                    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2>KNOW BEFORE YOU GO</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>

                    <div style={{margin : '3em 1em'}}>
                        <h3>Please respect other guests at the zoo as well as the zoo animals :</h3><br/>
                        <ul>
                            <li>∙ The zoo is a non-smoking facility</li>
                            <li>∙ For the safety of our animals, no pets—except for service animals—are allowed on zoo grounds. See the service animal guidelines</li>
                            <li>∙ Stay on marked paths and areas.</li>
                            <li>∙ Do not throw food or objects into exhibits.</li>
                            <li>∙ Do not tap on glass or otherwise stress the animals.</li>
                            <li>∙ Be quiet near exhibits.</li>
                            <li>∙ Use recycling, compost and trash containers throughout the zoo.</li>
                            <li>∙ For the safety of our animals and visitors, please: No balloons, barbecues, balls, weapons, radios, skates, skateboards, bicycles, flying discs, scooters, straws, lids or alcohol.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <Connect />
                </section>

                <Footer />

            </Container>
            
        </div>
    )
}


const Container = styled.div`

    .s4{
        h2{
            text-align : center;
            font-size : 3em;
            margin : 1em;
            color : green;
        }
    }

    .s3{
        background-color : rgb(36,81,94);
        margin-top : 5em;

        div{
            color : white;
            padding : 2em;
            p{
                color : white;
            }
        }
    }

    .s2{
        display : flex;
        align-items : center;
        flex-direction : column;
        h2{
            text-align : center;
            font-size : 3em;
            margin : 1em;
            color : green;
        }
        .block-hours{
            background-color : #e6e6e6;
           
            h3{
                background-color : black;
                color : #92c83e;
                padding : 1em;
            }

            div{
                padding : 1em 5em 4em 1em;

                strong{
                    color : green;
                }
        
                p{
                    margin : 1em 0em;
                }
            }
         
        }
    }

    .s1{
        text-align : center;
        margin : 1em;
        h3{
            font-size : 5em;
            color : green;
            font-weight : 500;
        }
        h4{
            font-size : 1.5em;
            color : #92c83e;
            font-weight : 500;
        }
    }


`