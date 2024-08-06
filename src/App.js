import React from "react"
import Header from "./components/header"
import Users from "./components/users"
import AddUser from "./components/addUser"



class App extends React.Component {
    render() {
        return (<div>
            <Header title="User list"></Header>
            <div className="container">
                <aside>
                    <AddUser></AddUser>

                </aside>
                <main>
                    <Users></Users>
                </main>
            </div>

        </div>)
    }
}
export default App