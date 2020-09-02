import React from 'react';
import styles from '../components/features/Contact/Contact.scss';

export const visibleContact = hourArg => {

  const data = {
    firstShift: {
      partDay: '8:00 - 12:00',
      name: 'Amanda',
      number: '678-243-8455',
    },
    secondShift: {
      partDay: '12:00 - 16:00',
      name: 'Tobias',
      number: '278-443-6443',
    },
    thirdShift: {
      partDay: '16:00 - 22:00',
      name: 'Helena',
      number: '167-280-3970',
    },
  };

  if (hourArg >= 8 && hourArg < 12) {
    return (
      <span>
        <span className={styles.partDay}>{data.firstShift.partDay}</span>
        <span className={styles.name}>{data.firstShift.name}</span>
        <span className={styles.number}>{data.firstShift.number}</span>
      </span>
    );
  } else if (hourArg >= 12 && hourArg < 16) {
    return (
      <span>
        <span className={styles.partDay}>{data.secondShift.partDay}</span>
        <span className={styles.name}>{data.secondShift.name}</span>
        <span className={styles.number}>{data.secondShift.number}</span>
      </span>
    );
  } else if (hourArg >= 16 && hourArg < 22) {
    return (
      <span>
        <span className={styles.partDay}>{data.thirdShift.partDay}</span>
        <span className={styles.name}>{data.thirdShift.name}</span>
        <span className={styles.number}>{data.thirdShift.number}</span>
      </span>
    );
  } else
    return (
      <div>
        <span>Open Hours: 08:00-22:00</span>
      </div>
    );
};

export default visibleContact;