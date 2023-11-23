import magnifyingglass from '../../../assets/🦆 icon _magnifying glass_.svg';
import './Package.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';


const Package = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('All'); // Initialize with 'All'
  const [inputValues, setInputValues] = useState({
    packages: '',
  });
  const refOne = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleOpenClick = (field: 'packages') => {
    setOpen(true);
    setInputValues({ ...inputValues, [field]: '' });
  };

  const handlePackageSelect = (packageType: string) => {
    setSelectedPackage(packageType);
    setOpen(false);
  };

  const handleSearch = () => {
    if (selectedPackage === 'All') {
      // Navigate to the ObjectListing page without a specific category
      window.location.href = '/rentalobject';
    } else {
      // Navigate to the ObjectListing page with the selected category as a URL parameter
      window.location.href = `/rentalobject/${selectedPackage}`;
    }
  };

  return (
    <div className="PackageWrap">
      <div className='Package-Container'>
        <label className="PackageLabel" htmlFor="InputPackage">Package</label>
        <div>
          <input
            value={selectedPackage}
            readOnly
            className="InputPackage"
            onClick={() => handleOpenClick('packages')}
            id='InputPackage'
          />
          {/* <img src={chevronBottom} alt="" /> */}
        </div>
      </div>
      <div>
        {isMobile ? 
        <div ref={refOne} className='Drop-Down-Packages-Content-Wrapper'>
        {open && (
          <>
            <div className='Drop-Down-Packages-Content'>
              <p className='Drop-Down-Packages-Item Packages-Item-Border' onClick={() => handlePackageSelect('All')}>All</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border' onClick={() => handlePackageSelect('Budget')}>Budget</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border' onClick={() => handlePackageSelect('Standard')}>Standard</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border' onClick={() => handlePackageSelect('Deluxe')}>Deluxe</p>
            </div>
          </>
        )}
      </div>
        : 
        <div ref={refOne} className='Drop-Down-Packages-Content-Wrapper-Desktop'>
        {open && (
          <>
            <div className='Drop-Down-Packages-Content-Desktop'>
              <p className='Drop-Down-Packages-Item Packages-Item-Border-Desktop' onClick={() => handlePackageSelect('All')}>All</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border-Desktop' onClick={() => handlePackageSelect('Budget')}>Budget</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border-Desktop' onClick={() => handlePackageSelect('Standard')}>Standard</p>
              <p className='Drop-Down-Packages-Item Packages-Item-Border-Desktop' onClick={() => handlePackageSelect('Deluxe')}>Deluxe</p>
            </div>
          </>
        )}
      </div>
        }
      </div>
      
      <div>

        {isMobile ? 
        <div className='Hero-Home-Search-Btn-Container'>
          <button className='Hero-Home-Search-Btn' onClick={handleSearch}>SEARCH</button>
        </div> :
          
            <div>
              <button className='magnifyingglass'
                onClick={handleSearch}>
                <img src={magnifyingglass}  alt="" id='magnifyingglass' />
              </button>
            </div>
          
        }
      </div>

    </div>
  );
};

export default Package;