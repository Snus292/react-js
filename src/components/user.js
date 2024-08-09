import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }}
    render() {
        const { user, onDelete, onEdit } = this.props;

        return (
            <div className="user">
                <ul>
                    <li>
                        <div>
                            <h3>{user.first_name} {user.last_name}</h3>
                            <img src={user.avatar} alt=""></img>
                            <h5>{user.email}</h5>
                            {/* <h3>({user.releaseYear})</h3>
                            <p>{user.plot}</p> */}
                            {/* <b>{user.genres.length  < 2 ? "Specific genre" : "Multi-genre"}</b> */}
                        </div>
                        <div className="action-icons">
                            <FaRegHeart className="like-icon" />
                            <IoHammerSharp className="edit-icon" onClick={()=>{
                                this.setState({
                                    editForm: !this.state.editForm
                                })
                            }} />
                            <IoCloseCircleSharp
                                className="delete-icon"
                                onClick={() => onDelete(user.id)}/>
                            
                        </div>
                    </li>
                </ul>
                {this.state.editForm && <AddUser user={this.props.user} onAdd={onEdit}></AddUser> }
            </div>
        );
    }
}

export default User
