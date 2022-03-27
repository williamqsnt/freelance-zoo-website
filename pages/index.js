import Head from 'next/head'
import Image from 'next/image'
import animals from '../public/assets/animals.jpeg'
import directions from '../public/assets/directions.jpeg'
import ticketshours from '../public/assets/ticketshours.jpeg'
import Highlights from '../composants/Highlights'
import Menus from '../composants/Menus'
import Footer from '../composants/Footer'
import Connect from '../composants/Connect'



export default function Home() {
  return (
    <div className='fullPage'>
    <div className='Header'>
      <Menus />

      <h1>THE ZOO</h1>

    </div>
    
    <div className='HeaderInfos'>
      <h3><strong>We strongly recommend for you to purchase your tickets online in advance of your visit.</strong></h3>
      <h3>BRING YOUR MASK TO ENJOY THE FULL ZOO EXPERIENCE</h3>
      <p>Masks are required for all (ages 5+) in indoor spaces including restrooms, restaurants, shops and indoor exhibits.<br/>
      For information about disability accommodations and other safety protocols, see the <a href="#" style={{color : '#017585', fontWeight : '700'}}>Guest FAQ</a>.</p>
      <a href="#" className='btn'>PLAN YOUR VISIT</a>
    </div>

    <div className="ZooHours">
      <div>
        <div>
           <p style={{color : '#96d7d2', fontWeight : '700'}}>ZOO HOURS</p>
        </div>
        <div>
          <p style={{fontWeight : '600'}}>OPEN DAILY</p>
        </div>
        <div>
           <p>9:30 a.m. - 4.:00 p.m.</p>
        </div>
      </div>
    
    </div>

    <section className='section1'>
      <div className='round'>
        <Image src={ticketshours}alt="tickets and hours" />
        <h3>Tickets &amp; <br/> Hours  </h3>
      </div>
      <div className='round'>
        <Image src={directions} alt="directions" />
        <h3>Directions</h3>
      </div>
      <div className='round'>
        <Image src={animals} alt="animals" />
        <h3>Animals</h3>
      </div>
    </section>

    <section className='section2'>
    <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                        <h2 style={{margin : '1em'}}>ZOO HIGHLIGHTS</h2>
                        <div style={{border : '2px solid #cfdb52', width : '100%'}}></div>
                    </div>
     <Highlights />
    </section>

    <section className='support'>
      <div>
        <h3>WHAT YOUR SUPPORT CAN DO FOR THE ZOO</h3>
        <h2>FORCE FOR NATURE</h2>
      </div>
    </section>

    <Connect />
    
    <Footer />




























  </div>
)

}