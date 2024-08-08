import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"   

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res)=>{
            this.setState({users: res.data.data})
        })

        this.state = {
            users: []
        }

        
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return (<div>
            <Header title="User list"></Header>
            <div className="container">
                <aside>
                    <AddUser onAdd={this.addUser} ></AddUser>

                </aside>
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}></Users>
                </main>
            </div>

        </div>)
    }


    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ 
            users: [...this.state.users, { id, ...user }] 
        })//обращение ко всему текущему списку и добавления id
        //и обьекта user(введенные данные)

    }
    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)//JS метод filter() для перебора массива, все элементы не 
            //подходящие под условие будут удалены
            //берем все id несовпадающие с параметром
        })


    }
    editUser(user){
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []},()=>{
            this.setState({users:[...allUsers]})
        })
    }

}
export default App