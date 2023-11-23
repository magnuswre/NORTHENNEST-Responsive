import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { getAllRentalObjectsByCategory } from '../../features/rentalObject/rentalObjectsSlice';
import './ObjectListing.css'
import HeartIcon from '../../assets/Heart.svg'
import { useParams } from 'react-router-dom'
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const ObjectListing = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const { rentalObjects, loading, error } = useSelector((state: RootState) => state.rentalObjects);
  const dispatch = useDispatch();
  const category = useParams().category || "";
  const StarIcon = ({ filled }: { filled: boolean }) => (filled ? <FaStar className="star" /> : <FaRegStar className="star" />);
  
  useEffect(() => {
    dispatch(getAllRentalObjectsByCategory(category) as any);
    localStorage.setItem('selectedCategory', category);
    console.log(category)
  }, [category, dispatch]);

  return (

    <div>
      {isMobile ?
        <div className="Rental-Object-Listing">
          {loading && <p>Loading ...</p>}
          {error && <p>{error}</p>}
          {rentalObjects.length > 0 ? (
            rentalObjects.map((rentalObject: { _id: string, imageURL: string, description: string, price: number, bedrooms: number, category: string, livingarea: number }) => (
              <Link className="Rental-Object-Listing-Details" to={`/rentalobjectdetails/${rentalObject._id}`} key={rentalObject._id}>
                {rentalObject ? (
                  <>
                    <img className='RentalObject-Image' src={rentalObject.imageURL} alt="" />
                    <button className='RentalObject-Save-Btn'><img src={HeartIcon} alt="Save" /></button>
                    <p className='RentalObject-Category'><span>{rentalObject.category}</span> </p>
                    <p className='RentalObject-Price'><span><span className='Bold-Text'>{rentalObject.price}</span>  SEK per night</span></p>
                    <div className='RentalObject-Bottom-Content'>
                      <p className='RentalObject-Description'>{rentalObject.description} </p>
                      <div className='RentalObject-Bottom-Living-Bedroom'>
                        <p className='RentalObject-Livingarea Bold-Text'>{rentalObject.livingarea} m2,&nbsp; </p>
                        <p className='RentalObject-Bedrooms Bold-Text'>{rentalObject.bedrooms} bedrooms </p>
                      </div>
                      <div className='RentalObject-Starrating-ViewBtn'>
                        <div className='RentalObject-Starrating-Container'>
                          <p>4,9</p>
                          <p className='RentalObject-Starrating'>
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled={false} />
                          </p>
                        </div>
                        <button className='RentalObject-View-Deal-Btn'>View deal</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Loading Rental Object Details...</p>
                )}
              </Link>
            ))
          ) : (
            <h2>No rental Objects to show</h2>
          )}
        </div>
        :

        // DESKTOP
        <div className="Rental-Object-Listing-Desktop">
          {loading && <p>Loading ...</p>}
          {error && <p>{error}</p>}
          {rentalObjects.length > 0 ? (
            rentalObjects.map((rentalObject: { _id: string, imageURL: string, description: string, price: number, bedrooms: number, category: string, livingarea: number }) => (
              <Link className="Rental-Object-Listing-Details-Desktop" to={`/rentalobjectdetails/${rentalObject._id}`} key={rentalObject._id}>
                {rentalObject ? (
                  <>
                    <div className='Rental-Object-Listing-Desktop-Container'>
                      <img className='RentalObject-Image-Desktop' src={rentalObject.imageURL} alt="" />
                      <p className='RentalObject-Category-Desktop'><span>{rentalObject.category}</span> </p>
                    </div>

                    <div className='RentalObject-Right-Content-Desktop'>
                      <div className='RentalObject-Right-Content-Desktop-Top'>
                        <p className='RentalObject-Price-Desktop'><span><span className='Bold-Text-Desktop'>{rentalObject.price}</span>  SEK per night</span></p>
                        <button className='RentalObject-Save-Btn-Desktop'><img src={HeartIcon} alt="Save" /></button>
                      </div>
                      <div className='RentalObject-Description-Desktop'>
                        <p >{rentalObject.description} </p>
                      </div>
                      <div className='RentalObject-Bottom-Living-Bedroom-Desktop'>
                        <p className='RentalObject-Livingarea Bold-Text-Desktop'>{rentalObject.livingarea} m2, {rentalObject.bedrooms} bedrooms, 2 guests  </p>
                        {/* <p className='RentalObject-Bedrooms Bold-Text-Desktop'></p> */}
                      </div>
                      <div className='RentalObject-Starrating-ViewBtn-Desktop'>
                        <div className='RentalObject-Starrating-Container-Desktop'>
                          <p>4,9</p>
                          <p className='RentalObject-Starrating-Desktop'>
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled={false} />
                          </p>
                        </div>
                        <button className='RentalObject-View-Deal-Btn-Desktop'>View deal</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Loading Rental Object Details...</p>
                )}
              </Link>
            ))
          ) : (
            <h2>No rental Objects to show</h2>
          )}
        </div>
      }

    </div>
  );
};

export default ObjectListing;
