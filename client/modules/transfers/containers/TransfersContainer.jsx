import React, { PureComponent, PropTypes } from 'react';
import TransfersList from '../components/TransfersList';
import Search from '../../../components/Search';

/*
  Why we use PureComponent here?
  https://github.com/facebook/react/pull/6914
  https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.wt38q22yo
*/

class TransfersContainer extends PureComponent {
  componentDidMount() {
    if (!this.props.transfers.length) {
      this.props.fetch(); // dispatch-> this.props.dispatch.fetch()
    }
  }
  render() {
    return (
      <div className="card card-block">
        <Search onSearch={this.props.fetch} searchText="" />
        <TransfersList transfers={this.props.transfers} />
      </div>
    );
  }
}

TransfersContainer.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func,
};

export default TransfersContainer;
