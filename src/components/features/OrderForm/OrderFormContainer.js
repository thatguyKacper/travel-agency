import { connect } from 'react-redux';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from '../OrderForm/OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => {
  return {
    setOrderOption: (option) => {
      dispatch(setOrderOption('OPTIONS', option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);