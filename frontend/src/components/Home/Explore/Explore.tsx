import './Explore.css'
import { useMediaQuery } from 'react-responsive';
const Explore = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      {isMobile ?
      <div className="Home-Explore-Activities" >
      <h2>Explore our Activities</h2>
    </div>
     :
     <div className="Home-Explore-Activities-Desktop" >
     <h2>Explore our Activities</h2>
   </div>
    }
    </div>
   
  )
}

export default Explore