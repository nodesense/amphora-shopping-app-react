// AuthRouteContainer.js
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import {bindActionCreators} from 'redux';

import AuthRoute from '../components/AuthRoute';

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, null) (AuthRoute);