import React from "react"
import Header from "./components/header"
import Users from "./components/users"



class App extends React.Component {
    render() {
        return (<div>
            <Header title="User list"></Header>
            <div className="container">
                <aside>

                </aside>
                <main>
                    <Users></Users>
                </main>
            </div>

        </div>)
    }
}
export default App