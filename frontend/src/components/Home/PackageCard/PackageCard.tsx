import './PackageCard.css';
import { RootState } from '../../../app/store';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPackages } from '../../../features/_package/packagesSlice';
import bedIcon from '../../../assets/bed.svg'
import WifiIcon from '../../../assets/facilitiesIcons/Wifi.svg'
import petsa from '../../../assets/facilitiesIcons/lounge.svg'

const PackageCard = () => {
  const { packages, loading, error } = useSelector((state: RootState) => state.packages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPackages() as any);
  }, [dispatch]);

  return (
    <div className="Home-PackageCard-container">
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}

      {packages.length > 0 ? (
        packages.map((_package: { _id: string, name: string, imageURL: string, description: string }) => (
          <Link className="packageCard-details" to={`/packagedetails/${_package._id}`} key={_package._id}>
            <img className='Home-Package-Images' src={_package.imageURL} alt="" />
            <h2 className='PackageCard-Name'>{_package.name}</h2>
            <div className='PackageCard-Description'>
              <p>{_package.description}</p>
            </div>
            <div className='PackageCard-Icon-Wrapper'>
              <div className='PackageCard-Icon-Content'>
                <img className='PackageCard-Icons' src={bedIcon} alt="" />
                <img className='PackageCard-Icons' src={petsa} alt="" />
                <img className='PackageCard-Icons' src={WifiIcon} alt="" />
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h2>No Packages to show</h2>
      )}
    </div>
  );
};

export default PackageCard;
