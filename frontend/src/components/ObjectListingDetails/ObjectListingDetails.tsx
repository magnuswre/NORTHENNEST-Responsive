import './ObjectListingDetails.css';
import { useEffect, useCallback } from 'react'; // Import React if it's not already imported
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRentalObjectById } from '../../features/rentalObject/rentalObjectSlice';
import ReviewObjectListingCard from './ReviewObjectListingCard/ReviewObjectListingCard';
import ReservationInfoCard from './ReservationInfoCard';

// Facilities icons
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
//------

import { useMediaQuery } from 'react-responsive';
import { ObjectListingDetailsCarousel } from './ObjectListingDetailsCarousel/ObjectListingDetailsCarousel';


const ObjectListingDetails = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const { id } = useParams();
  const dispatch = useDispatch();
  const { rentalObject, loading, error } = useSelector((state: RootState) => state.rentalObject) as {
    rentalObject: RentalObject | null
    loading: boolean;
    error: string | null;
  };

  const getRentalObjectFacilties = useCallback((): CategoryFacility[] => {
    if (rentalObject?.facilities) {
      const _facilities = rentalObject.facilities.map(facility => {
        return facility.categories.map(category => {
          return category.facilities
        })
      })
      return _facilities.flat(2)
    }
    return []
  }, [rentalObject?.facilities])

  const rentalObjectFacilities = getRentalObjectFacilties()
  console.log("RENTAL OBJECT", rentalObject)

  useEffect(() => {
    if (id) {
      const fetchRentalObjectData = async () => {
        dispatch(getRentalObjectById(id) as any);
      };

      fetchRentalObjectData();
    }
  }, [id, dispatch]);

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
    beddings,
  } as { [key: string]: string };

  return (
    <div>
      {isMobile ? (
        <div>
          {loading && <p>Loading...</p>}
          {rentalObject ? (
            <div>
              <img className='RentalObject-Details-Image' src={rentalObject.imageURL} alt="" />
            </div>
          ) : (
            <div>
              <h2>Rental Object not found</h2>
            </div>
          )}
          <div className='ObjectListingDetails-Facilities-Container'>
            <h3>Facilities</h3>
            <div className='ObjectListingDetails-Facilities-Content'>
              {rentalObjectFacilities.length > 0 ? (
                rentalObjectFacilities.map((facility) => (
                  <div className='ObjectListingDetails-Text-And-Icons' key={facility._id}>
                    <img
                      src={iconMap[facility.iconText ?? '']}
                      alt={''}
                      className='Facility-Icon'
                    />
                    <p className='ObjectListingDetails-Facilities-Text'>
                      <span className='ObjectListingDetails-Facilities-Text-Details'>{facility.text}</span>
                    </p>
                  </div>
                ))
              ) : (
                <h2>No Facilities to show</h2>
              )}

            </div>
          </div>

          <div className='Reservation-Info-Area'>
            <ReservationInfoCard
              rentalObject={rentalObject}
            />
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
              {rentalObjectFacilities.length > 0 ? (
                rentalObjectFacilities.map((facility) => (
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
                <h3>No Facilities to show</h3>
              )}

              {/* RESERVATION CARD in desktop version */}
              <div className='Reservation-Info-Area-Desktop'>
              </div>
            </div>
          </div>
          <ReservationInfoCard
            rentalObject={rentalObject}
          />

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
                <h3>No packages to show</h3>
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
