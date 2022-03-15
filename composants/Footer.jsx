

export default function Footer() {

    return(
        <footer>
      <div className='footer-top'>
        <h3>OUR MISSION</h3>
        <p>WOODLAND PARK ZOO SAVES WILDLIFE AND INSPIRES EVERYONE TO MAKE CONSERVATION A PRIORITY IN THEIR LIVES.</p>
        <h3>LAND ACKNOWLEDGMENT</h3>
        <p>Woodland Park Zoo recognizes that these are the lands of the Tribal signatories of the Treaty of Point Elliott. We acknowledge their stewardship of this place continues to this day and that it is our responsibility to join them to restore the relationship with the living world around us.</p>
      </div>
      <hr/>
      <div className='footer-menu'>
        <nav>
          <ul>
            <li>ZooStore</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Volunteer</li>
            <li>Press Room</li>
            <li>Privacy Policy</li>
            <li>DONER LOGIN</li>
          </ul>
        </nav>
      </div>
      <div className='footer-bottom'>
        <p>ADDRESS | <strong style={{color : 'lightgreen'}}>zooinfo@zoo.org</strong></p>
        <p>Woodland Park Zoo is a registered 501(c)(3) nonprofit organization. &copy;2022 Woodland Park Zoo</p>
      </div>
    </footer>
    )

}