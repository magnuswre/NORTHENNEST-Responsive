import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { getAllRentalObjectsByCategory } from '../../features/rentalObject/rentalObjectsSlice';
import './ObjectListing.css'
import HeartIcon from '../../assets/Heart.svg'
import { useParams } from 'react-router-dom'
import { FaStar, FaRegStar } from 'react-icons/fa';

const ObjectListing = () => {
  const { rentalObjects, loading, error } = useSelector((state: RootState) => state.rentalObjects);
  const dispatch = useDispatch();
  const category = useParams().category || "";
  const StarIcon = ({ filled }: { filled: boolean }) => (filled ? <FaStar className="star" /> : <FaRegStar className="star" />);

  useEffect(() => {
    dispatch(getAllRentalObjectsByCategory(category) as any);
  }, [category, dispatch]);

  return (
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
                    <p className='RentalObject-Livingarea Bold-Text'>{rentalObject.livingarea} m2, </p>
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
  );
};

export default ObjectListing;
