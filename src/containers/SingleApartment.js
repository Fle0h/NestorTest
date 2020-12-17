import { connect } from 'react-redux';
import SingleApartment from 'src/components/SingleApartment';

import {
  changeApartmentID,
} from 'src/actions/newRoomForm';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeApartmentID: (id) => {
    dispatch(changeApartmentID(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleApartment);
