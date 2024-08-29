import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import ShopM from "./pages/ShopM";
import UserM from "./pages/UserM";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
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
        };

        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    // Добавление товара в корзину
    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id) isInArray = true;
        });
        if (!isInArray) {
            this.setState({ orders: [...this.state.orders, item] });
            console.log("Added to order:", item);  // Лог для проверки
        }
    }

    // Удаление товара из корзины
    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter(el => el.id !== id)
        });
    }

    render() {
        return (
            <Router>
                <div className="page-wrapper">
                    <Header orders={this.state.orders} onDeleteOrder={this.deleteOrder} />
                    <div className="container-xxl">


                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/features" element={<Features />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/faqs" element={<FAQs />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/userm" element={<UserM />} />
                            <Route path="/shopm" element={<ShopM items={this.state.items} addToOrder={this.addToOrder} />} />
                        </Routes>

                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;