import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
                <div className="nav">
                    <ul>
                        <li>Account</li>
                        <li>Abount us</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </header>
        )
    }

}
export default Header