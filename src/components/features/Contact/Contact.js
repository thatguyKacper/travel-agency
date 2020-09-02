import React from 'react';
import { visibleContact } from '../../../utils/visibleContact';

class Contact extends React.Component {

  pickTime() {
    const actualDate = new Date();
    const actualHour = actualDate.getUTCHours();
    return actualHour;
  }

  render() {
    const actualHour = this.pickTime();
    return (
      visibleContact(actualHour)
    );
  }
}

export default Contact;