import React from "react"

class Users extends React.Component {
    users = [
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
    render() {
        if (this.users.length > 0)
            return (
                <div>
                    {this.users.map((element) => (<div className="user" key={element.id}>
                        <ul>
                            <li>
                                <h3>{element.title} {element.releaseYear}</h3>
                                <p>{element.plot}</p>
                                <b>{element.genres.length < 2 ? "Specific genre" : "Multi-genre"}</b>
                            </li>
                        </ul>
                    </div>))}
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