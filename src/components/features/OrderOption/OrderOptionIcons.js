import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcon = (props) => {
  return (
    <div className={styles.icon}>
      {props.values.map(value => (
        <div className={styles.icon, value.id === props.currentValue ? styles.iconActive : ''}
          key={value.id}
          onClick={() =>
            props.setOptionValue(value.id)}>
          <Icon name={value.icon} />
          {value.name}
          ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};

OrderOptionIcon.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  icon: PropTypes.node,
};

export default OrderOptionIcon;