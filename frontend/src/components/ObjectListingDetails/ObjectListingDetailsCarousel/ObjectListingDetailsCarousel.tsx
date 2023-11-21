import './ObjectListingDetailsCarousel.css'

import Image1 from '../../../assets/image 10.png'
import Image2 from '../../../assets/image 176.png'
import Image3 from '../../../assets/image 177.png'
import Image4 from '../../../assets/image 39.png'
import arrow from '../../../assets/carousel-arrow.svg'

export const ObjectListingDetailsCarousel = () => {
  return (
    <div className='ObjectListingDetailsCarousel-Wrapper'>
        <img src={arrow} alt="" id='ObjectListingDetailsCarousel-Left-Arrow' className='Responsive-Arrow' />
        <img src={Image1} alt="" className='Responsive-Image1' />
        <img src={Image2} alt="" className='Responsive-Image2'/>
        <img src={Image3} alt="" className='Responsive-Image3'/>
        <img src={Image4} alt="" className='Responsive-Image4'/>
        <img src={arrow} alt=""  className='Responsive-Arrow'/>
    </div>
  )
}
