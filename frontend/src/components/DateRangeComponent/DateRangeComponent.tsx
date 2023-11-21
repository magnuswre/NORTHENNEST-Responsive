import chevronBottom from '../../assets/chevron bottom.svg';
import './DateRangeComponent.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import format from 'date-fns/format';

type Range = {
  startDate: Date;
  endDate: Date;
  key: string;
};

const DateRangeComponent = () => {
  const today = new Date();
  const [range, setRange] = useState<Range[]>([
    {
      startDate: today,
      endDate: addDays(today, 1),
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    checkIn: '',
    checkOut: '',
  });
  const refOne = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);

    let savedCheckIn = localStorage.getItem('checkIn');
    let savedCheckOut = localStorage.getItem('checkOut');

    if (savedCheckIn && savedCheckOut) {
      const newCheckInDate = new Date(savedCheckIn);
      let newCheckOutDate = new Date(savedCheckOut);

      if (newCheckOutDate <= newCheckInDate) {
        newCheckOutDate = addDays(newCheckInDate, 1);
        savedCheckOut = format(newCheckOutDate, 'MM/dd/yyyy');
        localStorage.setItem('checkOut', savedCheckOut);
      }

      setInputValues({
        checkIn: format(newCheckInDate, 'MM/dd/yyyy'),
        checkOut: savedCheckOut,
      });

      setRange([{
        startDate: newCheckInDate,
        endDate: newCheckOutDate,
        key: 'selection',
      }]);
    }

    return () => {
      document.removeEventListener('keydown', hideOnEscape, true);
      document.removeEventListener('click', hideOnClickOutside, true);
    };
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

  const handleOpenClick = (field: 'checkIn' | 'checkOut') => {
    setOpen(true);
    setInputValues({ ...inputValues, [field]: '' });
  };

  const handleDateChange = (item: { selection: Range }) => {
    setRange([item.selection]);
    const checkInDate = format(item.selection.startDate, 'MM/dd/yyyy');
    const checkOutDate = format(item.selection.endDate, 'MM/dd/yyyy');

    localStorage.setItem('checkIn', checkInDate);
    localStorage.setItem('checkOut', checkOutDate);

    setInputValues({
      checkIn: checkInDate,
      checkOut: checkOutDate,
    });

    if (item.selection.key === 'selection' && item.selection.startDate.getTime() === range[0].endDate.getTime()) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <div className='CalenderInputAndLabel-Content'>
        <div className='CalenderInputAndLabel'>
          <div className='inputBoxCheckIn-container'>
            <div className='inputBoxCheckIn-Label'>
              <label htmlFor="inputBoxCheckIn">Check in</label>
            </div>
            <div className='inputBoxes-InputAndBtn'>
              <div>
                <input
                  value={inputValues.checkIn || 'When?'}
                  readOnly
                  className="inputBoxCheckIn"
                  onClick={() => handleOpenClick('checkIn')}
                  id='inputBoxCheckIn'
                />
              </div>
              <div>
                <img className='Calender-Chevron-Btn' src={chevronBottom} alt="" />
              </div>
            </div>
          </div>

          <div className='inputBoxCheckOut-container'>
            <div className='inputBoxCheckOut-Label'>
              <label htmlFor="inputBoxCheckOut">Check out</label>
            </div>

            <div className='inputBoxes-InputAndBtn'>
              <div>
                <input
                  value={inputValues.checkOut || 'When?'}
                  readOnly
                  className="inputBoxCheckOut"
                  onClick={() => handleOpenClick('checkOut')}
                  id='inputBoxCheckOut'
                />
              </div>
              <div>
                <img src={chevronBottom} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={handleDateChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            minDate={today}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;
