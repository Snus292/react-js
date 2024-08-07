import React from "react"
import Header from "./components/header"
import Users from "./components/users"
import AddUser from "./components/addUser"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    title: "Inception",
                    releaseYear: 2010,
                    plot: "A thief who enters the dreams of others to steal their secrets.",
                    genres: ["Action", "Sci-Fi"],
                    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
                },
                {
                    id: 2,
                    title: "The Shawshank Redemption",
                    releaseYear: 1994,
                    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    genres: ["Drama"],
                    actors: ["Tim Robbins", "Morgan Freeman"]
                },
                {
                    id: 3,
                    title: "Pulp Fiction",
                    releaseYear: 1994,
                    plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                    genres: ["Crime", "Drama"],
                    actors: ["John Travolta", "Samuel L. Jackson"]
                },
                {
                    id: 4,
                    title: "The Dark Knight",
                    releaseYear: 2008,
                    plot: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                    genres: ["Action", "Crime", "Drama"],
                    actors: ["Christian Bale", "Heath Ledger"]
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
    }
    render() {
        return (<div>
            <Header title="User list"></Header>
            <div className="container">
                <aside>
                    <AddUser onAdd={this.addUser}></AddUser>

                </aside>
                <main>
                    <Users users={this.state.users}></Users>
                </main>
            </div>

        </div>)
    }

    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}] })
        // this.setState
        
    }
}
export default App