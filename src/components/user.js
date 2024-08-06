import React from "react"
import { IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa6";
class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <div className="user">
                <ul>
                    <li>
                        <div>
                            <h3>{this.user.title} {this.user.releaseYear}</h3>
                            <p>{this.user.plot}</p>
                            <b>{this.user.genres.length < 2 ? "Specific genre" : "Multi-genre"}</b>
                        </div>
                        <div className="action-icons">
                            <FaRegHeart className="like-icon"></FaRegHeart>
                            <IoHammerSharp className="edit-icon"></IoHammerSharp>
                            <IoCloseCircleSharp className="delete-icon"></IoCloseCircleSharp>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }


}
export default User