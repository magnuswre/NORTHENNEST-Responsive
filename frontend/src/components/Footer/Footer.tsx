import './Footer.css'

import mail from '../../assets/envelope.svg'
import mapMarker from '../../assets/Map Marker_.svg'
import facebook from '../../assets/Facebook_.svg'
import twitter from '../../assets/Twitter_.svg'
import insta from '../../assets/Instagram Square_.svg'




const Footer = () => {
  return (
    <div className='Footer'>
      <p>Contact us</p>
      <p id='Footer-Title'>Northernnest Retreats</p>
      <div>
        <img src={mapMarker} alt="" />
        <div>
        <p>Norrskensvägen 235</p>
        <p>235 00 Åre, Sweden</p>
        </div>
       </div>

       <div>
        <p>icon</p>
        <p>+46 123 423 024</p>
       </div>

       <div>
       <img src={mail} alt="" />
        <p>contact@northernnest.com</p>
       </div>
      
      <p>Sign Up to Our newsletter:</p>
      <div>
      <input type="text" name="" id="" />
      </div>
      <p>Follow us</p>

      <div>
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
      </div>

      <div>
        <p>Logo</p>
      </div>

      <p id='Footer-Copyright'>C 2023 NorthenNest Retreats. All Rights Reserved </p>
    </div>
  )
}

export default Footer