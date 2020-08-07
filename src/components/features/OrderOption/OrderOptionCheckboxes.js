import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = (props) => {
  return (
    <div className={styles.checkboxes}>
      {props.values.map(value => {
        return (
          <label key={value.id}>
            <input
              type='checkbox'
              value={value.id}
              checked={props.currentValue.includes(value.id)}
              onChange={event => props.setOptionValue(newValueSet(props.currentValue, value.id, event.currentTarget.checked))}
            >
            </input>
            {value.name} ({formatPrice(value.price)})
          </label>
        );
      }
      )}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  price: PropTypes.number,

};

export default OrderOptionCheckboxes;