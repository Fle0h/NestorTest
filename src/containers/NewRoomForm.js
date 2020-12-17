import { connect } from 'react-redux';
import NewRoomForm from 'src/components/NewRoomForm';

import {
  changeInputValue,
  submitNewRoom,
} from 'src/actions/newRoomForm';

const mapStateToProps = (state) => ({
  formValues: state.newRoomForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (target, value) => {
    dispatch(changeInputValue(target, value));
  },
  submitNewRoom: () => {
    dispatch(submitNewRoom());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm);
