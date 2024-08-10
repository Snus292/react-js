import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Items from "./components/Items";
import axios from "axios";


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({ users: res.data.data })
        })

        this.state = {
            users: []
        }

        this.state = {
            items: [
                {
                    id: 1,
                    title: "Grey Chair",
                    img: "chair-grey.jpg",
                    desc: "The gray chairs in this range are available in a variety of styles, designs, and shades. From gray chairs with wooden frames to ones with armrests.",
                    category: "chairs",
                    price: "49.99"
                },
                {
                    id: 2,
                    title: "Modern Sofa",
                    img: "sofa-modern.jpg",
                    desc: "A comfortable modern sofa with a sleek design, perfect for contemporary living spaces. Available in various colors and fabrics.",
                    category: "sofas",
                    price: "299.99"
                },
                {
                    id: 3,
                    title: "Dining Table",
                    img: "table-wooden.jpg",
                    desc: "This elegant wooden dining table offers a timeless design and is built to last. Perfect for both formal dining rooms and casual kitchens.",
                    category: "tables",
                    price: "199.99"
                },
                {
                    id: 4,
                    title: "Stylish Lamp",
                    img: "lamp-stylish.jpg",
                    desc: "Add a touch of elegance to your room with this stylish lamp. Features a modern design and provides warm ambient lighting.",
                    category: "lamps",
                    price: "39.99"
                },
                {
                    id: 5,
                    title: "Office Desk",
                    img: "desk-office.jpg",
                    desc: "A sturdy office desk with ample workspace, designed for productivity and comfort. Comes with built-in storage drawers.",
                    category: "desks",
                    price: "149.99"
                }
            ]

        }


        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return (<div>
            <Header></Header>
            <div className="container">
                <aside>
                    <AddUser onAdd={this.addUser} ></AddUser>

                </aside>
                <main>
                    <div>
                        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}></Users>
                    </div>

                    <div>
                        <Items items={this.state.items}></Items>


                    </div>
                </main>
            </div>
            <Footer></Footer>

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
    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

}
export default App