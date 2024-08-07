import React from "react"

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            releaseYear: "",
            plot: "",
            genres: "",
            actors: ""
        }
    }


    render() {
        return (
            <form>
                <input placeholder="Title" type="text" onChange={(e) => this.setState({ title: e.target.value })}></input>
                <input placeholder="Release Year" type="number" onChange={(e) => this.setState({ releaseYear: e.target.value })}></input>
                <textarea placeholder="Plot" type="text" onChange={(e) => this.setState({ plot: e.target.value })}></textarea>
                <input placeholder="Genres" id="genres" type="text" onChange={(e) => this.setState({ genres: e.target.value })}></input>
                <input placeholder="Actors" id="actors" type="text" onChange={(e) => this.setState({ actors: e.target.value })}></input>
                <button type="button" onClick={() => this.props.onAdd({
                    title: this.state.title,
                    releaseYear: this.state.releaseYear,
                    plot: this.state.plot,
                    genres: this.state.genres.split(",").map(genre => genre.trim()),
                    actors: this.state.actors.split(",").map(actor => actor.trim())

                })}>Add</button>

            </form>
        )
    }


}
export default AddUser