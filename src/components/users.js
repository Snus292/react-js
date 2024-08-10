import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        const { users, onDelete, onEdit } = this.props;

        return (
            <div className="users">
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <User key={user.id} user={user} onDelete={onDelete} onEdit={onEdit} />
                    ))
                ) : (
                    <div className="user">
                        <h3>There are not any users</h3>
                    </div>
                )}
            </div>
        );
    }
}

export default Users;
