import React from 'react';
import kitchen from '../../assets/facilitiesIcons/kitchen.svg'
import kingsizebed from '../../assets/facilitiesIcons/kingsizebed.svg';
import petsallowed from '../../assets/facilitiesIcons/petsallowed.svg'
import charching from '../../assets/facilitiesIcons/charching.svg'
import lounge from '../../assets/facilitiesIcons/lounge.svg'
import privateparking from '../../assets/facilitiesIcons/parking.svg'
import privatedeck from '../../assets/facilitiesIcons/privatedeck.svg'
import towels from '../../assets/facilitiesIcons/towels.svg'
import tv from '../../assets/facilitiesIcons/tv.svg'
import washingmachine from '../../assets/facilitiesIcons/washingmachine.svg'
import wifi from '../../assets/facilitiesIcons/Wifi.svg'
import beddings from '../../assets/facilitiesIcons/bedding.svg'

import './tempoComp.css'

import { useMediaQuery } from 'react-responsive';

const TempoComp: React.FC = () => {

    const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>

        {isMobile ?
         <div className='Tempo-Comp-Container'>
         <div className='Tempo-Comp-Icons'>
         <p>Kitchen</p>
         <img src={kitchen} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>King size bed</p>
         <img src={kingsizebed} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Pets allowed</p>
         <img src={petsallowed} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Charching</p>
         <img src={charching} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Lounge</p>
         <img src={lounge} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Private parking</p>
         <img src={privateparking} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Charching</p>
         <img src={charching} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Towels</p>
         <img src={towels} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Washing machine</p>
         <img src={washingmachine} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Private deck</p>
         <img src={privatedeck} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Wifi</p>
         <img src={wifi} alt="" />
         </div>
         <div className='Tempo-Comp-Icons'>
         <p>Beddings</p>
         <img src={beddings} alt="" />
         </div>
 
     </div>
         : 

         <div className='Tempo-Comp-Container-Desktop'>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Kitchen</p>
         <img src={kitchen} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>King size bed</p>
         <img src={kingsizebed} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Pets allowed</p>
         <img src={petsallowed} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Charching</p>
         <img src={charching} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Lounge</p>
         <img src={lounge} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Private parking</p>
         <img src={privateparking} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Charching</p>
         <img src={charching} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Towels</p>
         <img src={towels} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Washing machine</p>
         <img src={washingmachine} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Private deck</p>
         <img src={privatedeck} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Wifi</p>
         <img src={wifi} alt="" />
         </div>
         <div className='Tempo-Comp-Icons-Desktop'>
         <p>Beddings</p>
         <img src={beddings} alt="" />
         </div>
 
     </div>

    }
    </div>
    
  );
};

export default TempoComp;
