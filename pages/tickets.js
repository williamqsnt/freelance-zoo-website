import Menus from "../composants/Menus";
import styled from '@emotion/styled'
import Connect from "../composants/Connect";
import Footer from "../composants/Footer";
import Head from "next/head";


export default function tickets() {

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
                    <h3>SHOW US HOW YOU ZOO</h3>
                    <h4>Make your day and a difference for wildlife</h4> 
                </section>
             
                <section className="s2" style={{marginTop : '5em'}}>
                    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2>TICKETS</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>

                    <div className='maps'>

                       
                        <div className='left'>

                            <div style={{margin : '1em'}}>
                           
                   
                        <h2>Plan your visit</h2>
                            <div style={{marginTop : '2em'}}>
                                <h3 style={{margin : '1em 0em', color : 'white'}}>Buy online to save time at the zoo and avoid lines!</h3>
                                <p>We strongly recommend for you to purchase your tickets online in advance of your visit.</p>
                                <p>For information about disability accommodations and other safety protocols, see <strong>the Guest FAQ.</strong> </p>
                            </div>
                            <div style={{marginTop : '2em'}}>
                                <p>Discount for Persons with Disabilities $2 off regular admission, 1:1 aides are complimentary.</p>
                                <p><strong>Learn more about accessibility at the zoo</strong></p>
                                <p style={{margin : '2em 0em'}}>For current ticket prices, please visit our ticket purchasing page by clicking the Buy Tickets button.</p>
                            </div>
                            <a href="">BUY TICKETS</a>
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
                width : 100%;
                display : flex;
                align-items : center;
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