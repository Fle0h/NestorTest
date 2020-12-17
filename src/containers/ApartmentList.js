import { connect } from 'react-redux';
import ApartmentList from 'src/components/ApartmentList';

const mapStateToProps = (store) => ({
  apartments: store.app.apartments,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList);
