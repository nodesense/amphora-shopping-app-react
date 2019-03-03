// containers/Login.js
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import {bindActionCreators} from 'redux';

import Login from '../components/Login';

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

function mapDispatchToProps (dispatch) {
    return {
        login: function (username, password) {
            //todo
            const actionFunc = actions.login(username, password);
            // thunk stops actionFunc and calls actionFunc(dispatch, getState)
            dispatch(actionFunc);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);