import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Items from "./components/Items";
import axios from "axios";
import Categories from "./components/Categories";


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({ users: res.data.data })
        })

        this.state = {
            orders: [],

            users: [],

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
                    category: "lighting",
                    price: "39.99"
                },
                {
                    id: 5,
                    title: "Office Desk",
                    img: "desk-office.jpg",
                    desc: "A sturdy office desk with ample workspace, designed for productivity and comfort. Comes with built-in storage drawers.",
                    category: "tables",
                    price: "149.99"
                }
            ]

        }


        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
    render() {
        return (<div className="page-wrapper">
            <Header orders={this.state.orders} onDeleteOrder={this.deleteOrder}></Header>
            <div className="container">
                <aside>
                    <AddUser onAdd={this.addUser} ></AddUser>
                    <Categories></Categories>

                </aside>
                <main>
                    <div>
                        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}></Users>
                    </div>

                    <div>
                        <Items items={this.state.items} onAddToOrder={this.addToOrder}></Items>


                    </div>
                </main>
            </div>
            <Footer></Footer>

        </div>)
    }
    addToOrder(item) {
        let isInArray = false
        
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] }, () => {
                    console.log(this.state.orders)
                }
            )

    }
    deleteOrder(id){
        this.setState({
            orders: this.state.orders.filter(el=>el.id!==id)})
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