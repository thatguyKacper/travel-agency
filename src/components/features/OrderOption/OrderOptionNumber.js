import React from 'react';
import styles from '../OrderOption/OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = (props) => {
  return (
    <div className={styles.number}>
      <input type='number'
        className={styles.inputSmall}
        value={props.currentValue}
        min={props.limits.min}
        max={props.limits.max}
        onChange={event => {
          props.setOptionValue(event.currentTarget.value);
        }}>
      </input>
      {formatPrice(props.price)}

    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
};

export default OrderOptionNumber;