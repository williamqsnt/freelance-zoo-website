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
                    <h3>GETTING HERE</h3>
                    <h4>Directions</h4> 
                </section>
             
                <section className="s2" style={{marginTop : '5em'}}>
                    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2>DIRECTIONS</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>
                    
                    <div className="directions" style={{display : 'flex'}}>
                        <div className="block-hours">
                            <h3>DRIVE YOUR CAR</h3>
                            <div> 
                                <strong>Open Daily</strong><br/>
                                <p>
                                From North or South bound I-5, take Exit 169/NE 50th St, <br/> go west to Phinney Ave. N. Turn right and drive north <br/> on Phinney Ave. N. to the West Entrance just past N. 55th St.
                                </p>                           
                            </div>
                        </div>

                        <div className="block-hours">
                            <h3>TAKE THE BUS</h3>
                            <div> 
                                <strong>Open Daily</strong><br/>
                                <p>
                                Take North or South bound Metro Bus #5 to Phinney <br/> Ave. N. and N. 55th St. to arrive at the West Entrance.
                                </p>
                            </div>
                            </div>
                    </div>
                </section>

               
                <section style={{marginTop : '5em'}}>
                    <Connect />
                </section>

                <Footer />

            </Container>
            
        </div>
    )
}


const Container = styled.div`
    @media(max-width : 800px){
        .directions{
            display : flex;
            flex-direction : column;
            
            div{
                padding : unset;
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
            color : #92c83e;
            font-weight : 300;
        }
        h4{
            font-size : 1.5em;
            color : green;
            font-weight : 300;
        }
    }


`