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
        const { user, onDelete } = this.props;

        return (
            <div className="user">
                <ul>
                    <li>
                        <div>
                            <h3>{user.title} ({user.releaseYear})</h3>
                            <p>{user.plot}</p>
                            <b>{user.genres.length < 2 ? "Specific genre" : "Multi-genre"}</b>
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
                                onClick={() => onDelete(user.id)}
                            />
                            
                        </div>
                    </li>
                </ul>
                {this.state.editForm && <AddUser></AddUser> }
            </div>
        );
    }
}

export default User
