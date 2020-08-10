import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = (props) => {
  console.log('PROPS<LL', props);
  return (
    <div className={styles.text}>
      <input
        type='text'
        className={styles.input.small}
        value={props.currentValue}
        onChange={event => props.setOptionValue(event.currentTarget.value)}
      >
      </input>
    </div>

  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;