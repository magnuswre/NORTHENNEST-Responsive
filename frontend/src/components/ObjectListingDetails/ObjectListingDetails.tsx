import './ObjectListingDetails.css';
import { useEffect, useState } from 'react'; // Import React if it's not already imported
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalObjectById } from '../../features/rentalObject/rentalObjectSlice';
import { getAllFacilities } from '../../features/facility/facilitiesSlice';
import ReviewObjectListingCard from './ReviewObjectListingCard/ReviewObjectListingCard';
import ReservationInfoCard from './ReservationInfoCard';

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

import { useMediaQuery } from 'react-responsive';
import { ObjectListingDetailsCarousel } from './ObjectListingDetailsCarousel/ObjectListingDetailsCarousel';



interface Facility {
  _id: string;
  text: string;
  iconText?: string;
}

const ObjectListingDetails = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const { id } = useParams();
  const dispatch = useDispatch();
  const { rentalObject, loading, error } = useSelector((state: RootState) => state.rentalObject) as {
    rentalObject: { name: string, imageURL: string, RentalObjectPackage: string[], price: number } | null;
    loading: boolean;
    error: string | null;
  };
  const pricePerNight = rentalObject?.price;
  const [facilities, setFacilities] = useState<Facility[]>([]);
  useEffect(() => {
    if (pricePerNight != null) {
      console.log('Setting pricePerNight in localStorage:', pricePerNight);
      localStorage.setItem('pricePerNight', pricePerNight.toString());
    }
  }, [pricePerNight]);
  console.log(facilities)
  useEffect(() => {
    if (id) {
      const fetchRentalObjectData = async () => {
        dispatch(getRentalObjectById(id) as any);
      };

      fetchRentalObjectData();
    }
  }, [id, dispatch]);


  useEffect(() => {
    const fetchFacilities = async () => {
      if (rentalObject) {
        const facilityResponse = await dispatch(getAllFacilities() as any);
        if (!facilityResponse.error) {
          setFacilities(facilityResponse.payload);
        }
      }
    };

    fetchFacilities();
  }, [rentalObject, dispatch]);

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }
  const iconMap = {
    kitchen,
    kingsizebed,
    petsallowed,
    charching,
    lounge,
    privateparking,
    privatedeck,
    towels,
    tv,
    washingmachine,
    wifi,
    beddings
  } as { [key: string]: string };


  return (
    <div>
      {isMobile ? (
        <div>
          {loading && <p>Loading...</p>}
          {rentalObject ? (
            <div>
              <img className='RentalObject-Details-Image' src={rentalObject.imageURL} alt="" />
              {/* <p> {rentalObject.price}</p> */}
            </div>
          ) : (
            <div>
              <h2>Rental Object not found</h2>
            </div>
          )}
          <div className='ObjectListingDetails-Facilities-Container'>
            <h3>Facilities</h3>
            <div className='ObjectListingDetails-Facilities-Content'>
              {facilities.length > 0 ? (
                facilities.map((facility) => (
                  <div className='ObjectListingDetails-Text-And-Icons' key={facility._id}>
                    <img
                      src={iconMap[facility.iconText ?? '']}
                      alt={''}
                      className='Facility-Icon'
                    />
                    <p className='ObjectListingDetails-Facilities-Text' ><span className='ObjectListingDetails-Facilities-Text-Details'>{facility.text}</span></p>
                  </div>
                ))
              ) : (
                <h2>No Facilities to show</h2>
              )}
            </div>
          </div>

          <div className='Reservation-Info-Area'>
            <ReservationInfoCard />
          </div>

          <div className='ObjectListingDetails-Included-Info-Container'>
            <div className='Reservation-Info-Area-Title'>
              <h3>Included in the package</h3>
            </div>
            <div className='RentalObjectPackage'>
              <ul>
                {rentalObject && rentalObject.RentalObjectPackage && rentalObject.RentalObjectPackage.length > 0 ? (
                  rentalObject.RentalObjectPackage.map((_package, index) => (
                    <li className='RentalObjectPackage-ListItem' key={index}>{_package}</li>
                  ))
                ) : (
                  <h2>No packages to show</h2>
                )}
              </ul>
            </div>
          </div>
          <ReviewObjectListingCard />
        </div>
      ) : (

        // DESKTOP -----------------------/// 
        <div>
          {loading && <p>Loading...</p>}
          {rentalObject ? (
            <div>
              <img className='Desktop-RentalObject-Details-Image' src={rentalObject.imageURL} alt="" />
              {/* <p> {rentalObject.price}</p> */}
            </div>
          ) : (
            <div>
              <h2>Rental Object not found</h2>
            </div>
          )}

          <div>
            <ObjectListingDetailsCarousel />
          </div>
          <div className='ObjectListingDetails-Facilities-Container-Desktop'>
            <h2>Facilities</h2>
            <div className='ObjectListingDetails-Facilities-Content-Desktop'>
              {facilities.length > 0 ? (
                facilities.map((facility) => (
                  <div className='ObjectListingDetails-Text-And-Icons' key={facility._id}>
                    <img
                      src={iconMap[facility.iconText ?? '']}
                      alt={''}
                      className='Facility-Icon'
                    />
                    <p className='ObjectListingDetails-Facilities-Text'>{facility.text}</p>
                  </div>
                ))
              ) : (
                <h2>No Facilities to show</h2>
              )}

              {/* RESERVATION CARD in desktop version */}
              <div className='Reservation-Info-Area-Desktop'>
                <ReservationInfoCard />
              </div>
            </div>
          </div>


          <div className='RentalObjectPackage-Desktop'>
            <h2>Included in the package</h2>
          </div>
          <div className='RentalObjectPackage-Desktop'>
            <ul className='RentalObjectPackage-Desktop-UL-List'>
              {rentalObject && rentalObject.RentalObjectPackage && rentalObject.RentalObjectPackage.length > 0 ? (
                rentalObject.RentalObjectPackage.map((_package, index) => (
                  <li className='RentalObjectPackage-ListItem-Desktop' key={index}>{_package}</li>
                ))
              ) : (
                <h2>No packages to show</h2>
              )}
            </ul>
          </div>

          <ReviewObjectListingCard />
        </div>
      )}
    </div>
  );

}
export default ObjectListingDetails;
