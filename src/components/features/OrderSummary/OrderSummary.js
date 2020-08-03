import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, options }) => {
  const totalTripCost = calculateTotal(formatPrice(tripCost), options);
  return (
    <h2 className={styles.component}>
      Total: $
      <strong>
        {totalTripCost}
      </strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;