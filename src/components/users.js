import React from "react"
import User from "./user"

class Users extends React.Component {
    
    render() {
        
        if (this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((element) => (
                        <User key={element.id} user={element}></User>
                    ))}
                </div>
            )
        else
            return (
                <div className="user">
                    <h3>There is not any users</h3>

                </div>

            )

    }


}
export default Users