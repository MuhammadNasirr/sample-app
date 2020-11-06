import React from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import { _getUsers, _getUser } from './actions'
import { ListComponent } from './Components';


class MainScreen extends React.Component {

    componentDidMount() {
        this.props._getUsers()
    }

    getUser = (user) => {
        this.props._getUser(user)
    }

    render() {
        const { users, singleUser } = this.props;
        return (
            <View>
                <ListComponent getUser={this.getUser} _getUser={this.props._getUsers} users={users} singleUser={singleUser} />
            </View>
        )
    }
}

const mapStateToProps = ({ user }) => {
    const { loading, users, singleUser } = user;
    return { loading, users, singleUser };
};

export default connect(mapStateToProps, {
    _getUsers,
    _getUser
})(MainScreen)