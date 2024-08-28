import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineHexagon } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Order from "./Order";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false
        };
    }

    toggleCart = () => {
        this.setState(prevState => ({
            cartOpen: !prevState.cartOpen
        }));
    }

    showOrders() {
        let subtotal = 0;
        this.props.orders.forEach(el => subtotal += Number.parseFloat(el.price));
        return (
            <div>
                {this.props.orders.map(el => (
                    <Order key={el.id} item={el} onDeleteOrder={this.props.onDeleteOrder} />
                ))}
                <div className="subtotal d-flex justify-content-between align-items-baseline">
                    <span>Subtotal:</span>
                    <span>{new Intl.NumberFormat().format(subtotal)}$</span>
                </div>
            </div>
        );
    }

    showNothing() {
        return (
            <div className="empty">
                <h4>There are no products</h4>
            </div>
        );
    }

    render() {
        return (
            <header className="header">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <MdOutlineHexagon className="logo" />
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
                        <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
                        <li><Link to="/pricing" className="nav-link px-2 text-white">Pricing</Link></li>
                        <li><Link to="/faqs" className="nav-link px-2 text-white">FAQs</Link></li>
                        <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
                        <li><Link to="/userm" className="nav-link px-2 text-white">User Management</Link></li>
                        <li><Link to="/shopm" className="nav-link px-2 text-white">Shop Management</Link></li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                    <div className="account-nav">
                        <a href="#" className="nav-link text-secondary">
                            <FaShoppingCart
                                onClick={this.toggleCart}
                                className={`account-button ${this.state.cartOpen ? "active" : ""}`}
                            />
                        </a>
                        <a href="#" className="nav-link text-secondary">
                            <FaRegHeart className="account-button" />
                        </a>
                        <a href="#" className="nav-link text-secondary">
                            <FaRegHeart className="account-button" />
                        </a>
                    </div>
                    {this.state.cartOpen && (
                        <div className="shop-cart">
                            {this.props.orders.length > 0 ?
                                this.showOrders() :
                                this.showNothing()}
                        </div>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;
