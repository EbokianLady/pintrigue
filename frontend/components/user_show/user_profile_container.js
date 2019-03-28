import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => {
    const username = ownProps.match.params.username;
    const user = state.entities.users[username];
    return ({
        username, user
    });
};

const mdp = dispatch => ({
    fetchUser: (username) => dispatch(fetchUser(username))
});

export default connect(msp, mdp)(UserProfile);
