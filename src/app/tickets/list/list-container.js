import { connect } from 'react-redux';
import List from './list.js';

const mapStateToProps = (state) => ({
  counter: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(List);