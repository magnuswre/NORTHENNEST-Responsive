import './Heading2.css';
import { useMediaQuery } from 'react-responsive';

const Heading2 = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      {isMobile ?
        <div className='Home-Heading2'> 
        <h2>Tailored Retreats for Every Budget </h2>
      </div>
       : <div className='Home-Heading2-Desktop'> 
       <h2>Tailored Retreats for Every Budget </h2>
     </div>
       }
    </div>
   

  );
};

export default Heading2;
