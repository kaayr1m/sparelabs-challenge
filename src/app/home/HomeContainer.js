import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { viewport } = state.home;
  return { viewport };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
