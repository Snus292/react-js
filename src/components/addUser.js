import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email:"",
            avatar:"",
            // title: "",
            // releaseYear: "",
            // plot: "",
            // genres: "",
            // actors: ""
        }
    }


    render() {
        return (//функция с параметром тегом и ссылкой на формы
            <form ref={(el) => this.myForm = el}>
                <input id="first_name" name="first_name"  placeholder="First name" type="text" onChange={(e) => this.setState({ first_name: e.target.value })}></input>
                <input id="last_name" name="last_name"  placeholder="Last name" type="text" onChange={(e) => this.setState({ last_name: e.target.value })}></input>
                <input id="email" name="email"  placeholder="Email" type="text" onChange={(e) => this.setState({ email: e.target.value })}></input>
                <input id="avatar" name="avatar"  placeholder="Avatar URL" type="text" onChange={(e) => this.setState({ avatar: e.target.value })}></input>
                {/* <input id="title" name="title"  placeholder="Title" type="text" onChange={(e) => this.setState({ title: e.target.value })}></input>
                <input id="releaseYear" name="releaseYear" placeholder="Release year" type="number" onChange={(e) => this.setState({ releaseYear: e.target.value })}></input>
                <textarea id="plot" name="plot" placeholder="Plot" type="text" onChange={(e) => this.setState({ plot: e.target.value })}></textarea>
                <input id="genres" name="genres" placeholder="Genres"  type="text" onChange={(e) => this.setState({ genres: e.target.value })}></input>
                <input id="actors" name="actors" placeholder="Actors"  type="text" onChange={(e) => this.setState({ actors: e.target.value })}></input> */}
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                        
                        // title: this.state.title,
                        // releaseYear: this.state.releaseYear,
                        // plot: this.state.plot,
                        // genres: this.state.genres.split(",").map(genre => genre.trim()),
                        // actors: this.state.actors.split(",").map(actor => actor.trim()),

                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)

                }}>Add</button>

            </form >
        )
    }


}
export default AddUser