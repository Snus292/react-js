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
            items: [ /* ... массив товаров, как и раньше ... */ ]
        };

        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id) isInArray = true;
        });
        if (!isInArray)
            this.setState({ orders: [...this.state.orders, item] });
    }

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
                    <div className="container">
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/features" element={<Features />} />
                                <Route path="/pricing" element={<Pricing />} />
                                <Route path="/faqs" element={<FAQs />} />
                                <Route path="/about" element={<About />} />
                                <Route 
                                    path="/userm" 
                                    element={<UserM />} 
                                />
                                <Route 
                                    path="/shopm" 
                                    element={
                                        <ShopM 
                                            items={this.state.items} 
                                            addToOrder={this.addToOrder} 
                                        />
                                    } 
                                />
                            </Routes>
                        </main>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
