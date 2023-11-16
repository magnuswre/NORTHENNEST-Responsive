import DateRangeComponent from '../DateRangeComponent/DateRangeComponent'
import './HeroSearch.css'
import Package from './Package/Package'

const HeroSearch = () => {
  return (
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
  )
}

export default HeroSearch