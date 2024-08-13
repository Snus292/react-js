import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineHexagon } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false // Инициализация состояния
        };
    }
    toggleCart = () => {
        this.setState((prevState) => ({
            cartOpen: !prevState.cartOpen
        }));
    };
    render() {
        return (
            <header className="header">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <MdOutlineHexagon className="logo"></MdOutlineHexagon>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>


                    </div>
                    <div className="account-nav">
                        <a href="#" className="nav-link text-secondary">
                            <FaShoppingCart
                                onClick={this.toggleCart}
                                className={`account-button ${this.state.cartOpen ? "active" : ""}`}/>


                        </a>
                        <a href="#" className="nav-link text-secondary">
                            <FaRegHeart className="account-button"> </FaRegHeart>
                        </a>
                        <a href="#" className="nav-link text-secondary">
                            <FaRegHeart className="account-button"> </FaRegHeart>
                        </a>

                    </div>
                    {this.state.cartOpen && (
                        <div className="shop-cart">

                        </div>
                    )}
                </div>

            </header>
        )
    }

}
export default Header
