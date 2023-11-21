import DateRangeComponent from '../DateRangeComponent/DateRangeComponent'
import './HeroSearch.css'
import Package from './Package/Package'
import { useMediaQuery } from 'react-responsive';

const HeroSearch = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div >
      {isMobile ? 
    <div className='Home-HeroSearch-container'>
      <div className='Home-HeroSearch'>
        <div className='Home-DatePickers'>
          <DateRangeComponent />
        </div>
        <div className='Home-PackagePicker'>
          <Package />
        </div>
      </div>
    </div> 
    : 
    <div className='Home-HeroSearch-Container-Desktop'>
    <div className='Home-HeroSearch-Desktop'>
      <div className='Home-DatePickers-Desktop'>
        <DateRangeComponent />
      </div>
      <div className='Home-PackagePicker-Desktop'>
        <Package />
      </div>
    </div>
  </div> 
      }
    </div>
  )
}

export default HeroSearch