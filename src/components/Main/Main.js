import { useReducer } from 'react';
import HomePage from '../../pages/HomePage';
import BookingPage from '../../pages/BookingPage';
import ConfirmedBookingPage from '../../pages/ConfirmedBookingPage';
import { Routes, Route } from 'react-router-dom';
import { fetchAPI } from '../../utils/temp';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      {/* ROUTES */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/bookings'
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path='/confirmed' element={<ConfirmedBookingPage />} />
      </Routes>
    </>
  );
};

export default Main;
