import React from "react";
import User from "./User";


class Users extends React.Component {
    render() {
        const { users, onDelete } = this.props;

        return (
            <div>
                {users.length > 0 ? (
                    users.map((user) => (
                        <User key={user.id} user={user} onDelete={onDelete} />
                    ))
                ) : (
                    <div className="user">
                        <h3>There are no users</h3>
                    </div>
                )}
            </div>
        );
    }
}

export default Users;
