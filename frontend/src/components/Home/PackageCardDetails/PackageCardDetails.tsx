import './PackageCardDetails.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getPackageById } from '../../../features/_package/packageSlice';

const PackageCardDetails = () => {
  const dispatch = useDispatch();
  const { _package, loading, error } = useSelector((state: RootState) => state._package) as {
    _package: { name: string } | null;
    loading: boolean;
    error: string | null;
  };
  const { id } = useParams();

 console.log(_package)

  useEffect(() => {
    if (id) {
      const fetchPackageData = async () => {
        dispatch(getPackageById(id) as any); 
      };

      fetchPackageData();
    }
  }, [id]);

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {_package && (
        <div className='Home-PackageCard-Details'>
          <h2>{_package.name}</h2> 
        </div>
       )}
    </>
      
  );
};

export default PackageCardDetails;