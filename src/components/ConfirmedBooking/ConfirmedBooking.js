import { useEffect, useState } from 'react';
import './ConfirmedBooking.styles.css';
import restaurant from '../../assets/restaurant.jpg';
import { Link as LinkR } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUsers, FaGlassCheers, FaChair } from 'react-icons/fa';

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <section name='booking-confirmation' className='booking-confirmation'>
      <div className='confirmation-content'>
        <div className='confirmation-header'>
          <div className='success-icon-container'>
            <FaCheckCircle className='success-icon' />
          </div>
          <h1 className='confirmation-confirmed'>Reservation Confirmed!</h1>
          <p className='confirmation-subtitle'>We're excited to have you join us</p>
        </div>

        <div className='confirmation-card'>
          <div className='confirmation-image-wrapper'>
            <img
              src={restaurant}
              alt='Little Lemon Restaurant'
              className='confirmation-image'
            />
            <div className='image-overlay'></div>
          </div>

          <div className='confirmation-details-container'>
            <div className='detail-item'>
              <FaCalendarAlt className='detail-icon' />
              <div className='detail-content'>
                <span className='detail-label'>Date</span>
                <span className='confirmation-details'>{reservedDetails.date || 'N/A'}</span>
              </div>
            </div>

            <div className='detail-item'>
              <FaClock className='detail-icon' />
              <div className='detail-content'>
                <span className='detail-label'>Time</span>
                <span className='confirmation-details'>{reservedDetails.time || 'N/A'}</span>
              </div>
            </div>

            <div className='detail-item'>
              <FaUsers className='detail-icon' />
              <div className='detail-content'>
                <span className='detail-label'>Guests</span>
                <span className='confirmation-details'>{reservedDetails.guests || 'N/A'}</span>
              </div>
            </div>

            <div className='detail-item'>
              <FaGlassCheers className='detail-icon' />
              <div className='detail-content'>
                <span className='detail-label'>Occasion</span>
                <span className='confirmation-details'>{reservedDetails.occasion || 'N/A'}</span>
              </div>
            </div>

            <div className='detail-item'>
              <FaChair className='detail-icon' />
              <div className='detail-content'>
                <span className='detail-label'>Seating</span>
                <span className='confirmation-details'>{reservedDetails.seating || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='confirmation-footer'>
          <p className='confirmation-note'>
            A confirmation email has been sent to your registered email address.
          </p>
          <LinkR to='/' className='confirmation-home'>
            Return to Home
          </LinkR>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
