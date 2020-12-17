import { connect } from 'react-redux';
import NewRoomForm from 'src/components/NewRoomForm';

import {
  changeInputValueRoom,
  submitNewRoom,
} from 'src/actions/newRoomForm';

const mapStateToProps = (state) => ({
  formValues: state.newRoomForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValueRoom: (target, value) => {
    dispatch(changeInputValueRoom(target, value));
  },
  submitNewRoom: () => {
    dispatch(submitNewRoom());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm);
