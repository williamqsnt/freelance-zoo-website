import styled from '@emotion/styled'
import Head from 'next/head'
import Connect from '../composants/Connect'
import Footer from '../composants/Footer'
import Menus from '../composants/Menus'


export default function maps() {

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
                    <h3>WHILE YOU'RE HERE</h3>
                    <h4>Maps, rentals, dining and shopping information</h4> 
                </section>
             
                <section className="s2" style={{marginTop : '5em'}}>
                    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2>ZOO MAPS</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>

                    <div className='maps'>

                       
                        <div className='left'>

                            <div style={{marginLeft : '5em'}}>
                           
                   
                        <h2>Maps and Guides</h2>
                        <a href="">DOWNLOAD THE MAP</a>
                            <div style={{marginTop : '2em'}}>
                                <h3 style={{margin : '1em 0em', color : 'white'}}>Language Maps</h3>
                                <p> <strong>Spanish Grounds Map</strong> (PDF)</p>
                                <p><strong>Chinese Grounds Map </strong>(PDF)</p>
                            </div>
                            <div style={{marginTop : '2em'}}>
                                <h3 style={{margin : '1em 0em', color : 'white'}}>Sensory Maps and Guides</h3>
                                <p> <strong>Accessibility Guide</strong> (PDF)</p>
                                <p><strong>Sensory Grounds Map</strong>(PDF)</p>
                                <p><strong> Sensory Guide for Zoomazium Visitors</strong>(PDF)</p>
                            </div>
                            </div>
                        </div>



                    
                        <div className='right'>
                            
                        </div>
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


    .s2{
        display : flex;
        align-items : center;
        flex-direction : column;


        .maps{

        width : 100%;
        
        
            .left{
                background-color : green;
                width : 50%;
                display : flex;
                align-items : flex-start;
                justify-content : center;
                flex-direction : column;
                padding-bottom : 5em;

                
                p{
                    color : white;


                    strong{
                        color : #cfdb52;
                        font-weight : 500;
                    }
                }

                h2{
                    color :  #cfdb52;
                }

                a{
                    background-color : white;
                    padding : 0.5em 1.5em;
                    border-radius : 5px;
                    font-size : 1.5em;
                    font-weight : 500;
                }
            }
    
            .right{
                width : 50%;
                height : 100%;
                
            }
        }






        h2{
            text-align : center;
            font-size : 3em;
            margin : 1em 0em;
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