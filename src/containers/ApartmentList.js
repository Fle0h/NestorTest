import { connect } from 'react-redux';
import ApartmentList from 'src/components/ApartmentList';

import { getAllApartments } from 'src/actions/apartmentList';

const mapStateToProps = (store) => ({
  apartments: store.apartmentList.apartments,
});

const mapDispatchToProps = (dispatch) => ({
  getAllApartments: () => {
    dispatch(getAllApartments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList);
