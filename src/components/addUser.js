import React from "react"

class AddUser extends React.Component {
    render() {
        return (
            <form>
                <input placeholder="Title" type="text"></input>
                <input placeholder="Release Year" type="number"></input>
                <textarea placeholder="Plot" type="text"></textarea>
                <input placeholder="Genres" id="genres" type="text"></input>
                <input placeholder="Actors" id="actors" type="text"></input>
                <button type="button">Add</button>

            </form>
        )
    }


}
export default AddUser