import { connect } from 'react-redux';
import { fetch } from './actions';
import TransfersContainer from './containers/TransfersContainer';

const mapStateToProps = state => ({
  transfers: state.transfers.payload,
  isFetching: state.transfers.isFetching,
  errors: state.transfers.errors,
  query: state.transfers.query,
});

const mapDispatchToProps = {
  fetch,
};

// make & dispatch actions
export default connect(mapStateToProps, mapDispatchToProps)(TransfersContainer);
