import Link from "next/link";
import styled from '@emotion/styled'


export default function Menus() {
    return(
        <div className='Menus'>
        <nav className='flag'>
          <ul>
            <li style={{backgroundColor : 'black'}}>TICKET</li>
            <li style={{backgroundColor : 'red'}}>MEMBERSHIP</li>
            <li style={{backgroundColor : 'green'}}>DONATE</li>
          </ul>
        </nav>
        <nav className='list'>
          <ul>
            <div className='menu'>
              <li>Visit</li>
              <div className='dropdown-menu'>
                <Link href="/hours">
                    <a>Hours</a>
                </Link>
                <Link href="/tickets">
                  <a>Tickets</a>
                </Link>
                <Link href="/direction">
                  <a>Direction</a>
                </Link>
                <Link href="/maps">
                  <a>Zoo Map</a>
                </Link>
               
              </div>
            </div>
            <div className='menu'>
              <li>Animals</li>
              <div className='dropdown-menu'>
                <a href="">Mammals</a>
                <a href="">Birds</a>
                <a href="">Fish</a>
                <a href="">Reptiles</a>
                <a href="">Amphibians</a>
                <a href="">Invertebrates</a>  
              </div>
            </div>
            <div className='menu'>
              <li>Saving stray animals</li>
              <div className='dropdown-menu'>
                <a href="">What we do</a>
                <a href="">How you can help</a>
                <a href="">Helping stray animals</a>
                <a href="">Saving Afghanistan birds</a>
                <a href="">Wildlife survival program</a>  
              </div>
            </div>
            <div className='menu'>
              <li>Learn</li>
              <div className='dropdown-menu'>
                <a href="">Marjan The Lion</a>
                <a href="">Afghan Snow Leopard</a>
                <a href="">Afghan Golden Eagle</a>  
              </div>
            </div>
            <div className='menu'>
              <li>Support</li>
              <div className='dropdown-menu'>
                <a href="">Donate</a>
                <a href="">Become a Member</a>
                <a href="">Adopt an animal</a>
                <a href="">Jobs</a>
                <a href="">Volunteer</a>
                <a href="">About us</a>
                <a href="">Our Impact</a>
                <a href="">Our mission</a>  
              </div>
            </div>
          </ul>
        </nav>
      </div>
    )
}