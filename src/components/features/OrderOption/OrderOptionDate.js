import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      className="red-border"
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;