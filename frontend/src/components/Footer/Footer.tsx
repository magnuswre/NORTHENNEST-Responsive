import './Footer.css'

import mail from '../../assets/envelope.svg'
import mapMarker from '../../assets/Map Marker_.svg'
import facebook from '../../assets/Facebook_.svg'
import twitter from '../../assets/Twitter_.svg'
import insta from '../../assets/Instagram Square_.svg'
import phone from '../../assets/phone.svg'
import logo from '../../assets/Logo.png'
import { useMediaQuery } from 'react-responsive';



const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      {isMobile ?
        <div className='Footer'>
          <div>
            <h3>Contact us</h3>
          </div>
          <div>
            <p id='Footer-Title'>Northernnest Retreats</p>
          </div>
          <div className='Footer-Address'>
            <img className='Footer-Icon' src={mapMarker} alt="" />
            <div>
              <p>Norrskensvägen 235</p>
              <p>235 00 Åre, Sweden</p>
            </div>
          </div>

          <div className='Footer-Phone'>
            <img className='Footer-Icon' src={phone} alt="" />
            <p>+46 123 423 024</p>
          </div>

          <div className='Footer-Mail'>
            <img className='Footer-Icon' src={mail} alt="" />
            <p>contact@northernnest.com</p>
          </div>
          <div className='Footer-Sign-Up-Header'>
            <h3 >Sign Up to Our newsletter:</h3>
          </div>
          <div>
            <input className='Footer-Input' type="text" name="" id="" placeholder='email' />
          </div>
          <div className='Footer-Join-Us-Header'>
            <h3>Follow us</h3>
          </div>

          <div className='Footer-Social-Media-Icons'>
            <img className='Footer-Icon' src={facebook} alt="" />
            <img className='Footer-Icon' src={twitter} alt="" />
            <img className='Footer-Icon' src={insta} alt="" />
          </div>

          <div>
            <img className='Footer-Logo' src={logo} alt="" />
          </div>

          <p id='Footer-Copyright'>&#169; 2023 NorthenNest Retreats. All Rights Reserved </p>
        </div>


        :
        // DESKTOP ------// 

        <div className='Footer-Desktop'>
          <div className='yolo11'>
            <div className='Footer-Contact-Us-Header-Desktop'>
              <div></div>
              <h3>Contact us</h3>
            </div>
            <div className='Footer-Title-Header-Desktop'>
            <div></div>
              <p id='Footer-Title-Desktop'>Northernnest Retreats</p>
            </div>
            <div className='Footer-Address-Desktop'>
              <img className='Footer-Icon-Desktop' src={mapMarker} alt="" />
              <div>
                <p>Norrskensvägen 235</p>
                <p>235 00 Åre, Sweden</p>
              </div>
            </div>

            <div className='Footer-Phone-Desktop'>
              <img className='Footer-Icon-Desktop' src={phone} alt="" />
              <p>+46 123 423 024</p>
            </div>

            <div className='Footer-Mail-Desktop'>
              <img className='Footer-Icon-Desktop' src={mail} alt="" />
              <p>contact@northernnest.com</p>
            </div>
          </div>

          <div className='yolo22'>
            <div className='Footer-Sign-Up-Header-Desktop'>
              <h3 >Sign Up to Our newsletter:</h3>
            </div>
            <div>
              <input className='Footer-Input-Desktop' type="text" name="" id="" placeholder='email' />
            </div>
            <div>
              <img className='Footer-Logo-Desktop' src={logo} alt="" />
            </div>
          </div>

          <div className='yolo33'>
            <div className='Footer-Join-Us-Header-Desktop'>
              <h3>Follow us</h3>
            </div>
            <div className='Footer-Social-Media-Icons-Desktop'>
              <img className='Footer-Icon-Desktop' src={facebook} alt="" />
              <img className='Footer-Icon-Desktop' src={twitter} alt="" />
              <img className='Footer-Icon-Desktop' src={insta} alt="" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
            {<div
            className='Footer-Copyright-Desktop'><p id='Footer-Copyright-Desktop'>&#169; 2023 NorthenNest Retreats. All Rights Reserved</p></div> }
            
        </div>



      }

    </div>

  )
}

export default Footer